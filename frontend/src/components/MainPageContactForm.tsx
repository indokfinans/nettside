import React, { useState } from "react";
import { Link, Box, Typography, TextField, Button, Snackbar, Alert, SnackbarCloseReason } from "@mui/material";
import emailjs from '@emailjs/browser';

const MainPageContactForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [fromName, setFromName] = useState('');
    const [emailStatus, setEmailStatus] = useState({ success: false, error: false });

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailjs.sendForm('service_1hthu07', 'template_2lf9fxo', event.currentTarget, {
            publicKey: "FP5QHzW47zogTYrIn",
        })
            .then((result) => {
                console.log(result.text);
                setEmailStatus({ success: true, error: false });
                setEmail('');
                setMessage('');
                setFromName('');
            }, (error) => {
                console.log(error.text);
                setEmailStatus({ success: false, error: true });
            });
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }
        setEmailStatus({ success: false, error: false });
    };

    return (
        <>
            <Box
                sx={{
                    bgcolor: "background.paper",
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                    borderRadius: 1,
                }}
            >
                <Typography variant="h1" gutterBottom align="left" color="text.primary">
                    Kontakt oss
                </Typography>
                <Typography variant="h4" color="primary">
                    Ikke nøl med å ta kontakt med oss, enten du er interessert i å bli medlem, ønsker å samarbeide, eller har andre spørsmål.
                    <br />
                    <br />
                    <Link href="mailto:leder@indokfinans.no" color="primary"> {"leder@indokfinans.no"}</Link>
                </Typography>
            </Box>

            <Box
                sx={{
                    bgcolor: "background.paper",
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                    borderRadius: 1,
                }}
            >
                <form onSubmit={sendEmail}>
                    <TextField
                        label="Ditt navn"
                        type="text"
                        name="from_name"
                        value={fromName}
                        onChange={(e) => setFromName(e.target.value)}
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                        InputLabelProps={{
                            style: {
                                color: '#172F56'
                            }
                        }}
                    />
                    <TextField
                        label="Din e-post"
                        type="email"
                        name="from_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                        InputLabelProps={{
                            style: {
                                color: '#172F56'
                            }
                        }}
                    />
                    <TextField
                        label="Din melding"
                        name="message"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                        InputLabelProps={{
                            style: {
                                color: '#172F56'
                            }
                        }}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Send melding
                    </Button>
                </form>
            </Box>
            <Snackbar open={emailStatus.success} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Email successfully sent!
                </Alert>
            </Snackbar>
            <Snackbar open={emailStatus.error} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Error sending email!
                </Alert>
            </Snackbar>
        </>
    );
};

export default MainPageContactForm;