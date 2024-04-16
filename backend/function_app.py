import azure.functions as func
from datetime import datetime
import json
import logging
import yfinance as yf



app = func.FunctionApp()

@app.route(route="GetTickerPrice", auth_level=func.AuthLevel.ANONYMOUS)
def GetTickerPrice(req: func.HttpRequest) -> func.HttpResponse:
    ticker_symbol = req.params.get('ticker')
    if not ticker_symbol:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            ticker_symbol = req_body.get('ticker')

    if ticker_symbol:
        try:
            # Determine the appropriate period to cover weekends and holidays
            today = datetime.now()
            if today.weekday() == 0:  # It's Monday
                period = "7d"  # Cover the previous weekend
            else:
                period = "5d"  # Cover enough days to ensure data is available

            ticker = yf.Ticker(ticker_symbol)
            data = ticker.history(period=period)

            if not data.empty:
                last_price = data['Close'].iloc[-1]  # Last available closing price
                return func.HttpResponse(str(last_price), status_code=200)
            else:
                return func.HttpResponse("No recent trading data available for the ticker provided.", status_code=200)
        except Exception as e:
            return func.HttpResponse(
                "Failed to fetch data: " + str(e),
                status_code=500
            )
    else:
        return func.HttpResponse(
            "This HTTP triggered function executed successfully. Pass a ticker in the query string or in the request body for a personalized response.",
            status_code=200
        )

@app.route(route="GetTickerPrices", auth_level=func.AuthLevel.ANONYMOUS)
def GetTickerPrices(req: func.HttpRequest) -> func.HttpResponse:
    # Retrieve the ticker or tickers query parameters
    ticker = req.params.get('ticker')
    tickers = req.params.get('tickers')

    # Initialize ticker_symbols list
    ticker_symbols = []

    if ticker:
        ticker_symbols = [ticker]  # Handle single ticker
    elif tickers:
        ticker_symbols = tickers.split(',')  # Handle multiple tickers
    else:
        try:
            # Attempt to read the JSON body for additional flexibility
            req_body = req.get_json()
            tickers_body = req_body.get('tickers')
            if isinstance(tickers_body, str):
                ticker_symbols = tickers_body.split(',')
            elif isinstance(tickers_body, list):
                ticker_symbols = tickers_body
        except ValueError:
            pass

    if ticker_symbols:
        try:
            # Determine the appropriate period to cover weekends and holidays
            today = datetime.now()
            if today.weekday() == 0:  # It's Monday
                period = "7d"  # Cover the previous weekend
            else:
                period = "5d"  # Cover enough days to ensure data is available

            # Fetch data for all tickers at once
            data = yf.download(ticker_symbols, period=period, group_by='ticker')

            prices = []
            for symbol in ticker_symbols:
                symbol = symbol.strip().upper()  # Ensure uniformity for lookup
                if symbol in data.columns.get_level_values(0):
                    last_price = data[symbol]['Close'].iloc[-1]
                    prices.append(float(last_price))
                else:
                    prices.append(None)  # Handle the case where no data is found

            return func.HttpResponse(json.dumps(prices), status_code=200, headers={"Content-Type": "application/json"})
        except Exception as e:
            return func.HttpResponse(
                "Failed to fetch data: " + str(e),
                status_code=500
            )
    else:
        return func.HttpResponse(
            "This HTTP triggered function executed successfully. Pass a ticker or tickers in the query string or in the request body for a personalized response.",
            status_code=200
        )
