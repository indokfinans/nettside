// Updated Contact Form with Email API Integration
import React, { useState } from "react";
import { Link, Box, Typography, TextField, Button } from "@mui/material";
import emailjs from '@emailjs/browser';


const MainPageContactForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [fromName, setFromName] = useState('');

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailjs.sendForm('service_1hthu07', 'template_2lf9fxo', event.currentTarget, {
            publicKey: "FP5QHzW47zogTYrIn",
        })
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setEmail('');
        setMessage('');
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
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Send melding
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default MainPageContactForm;


