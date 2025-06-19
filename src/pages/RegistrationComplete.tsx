import { Button, Divider, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useNavigate } from 'react-router-dom';
import mail from "../assets/mail.png";

function RegistrationComplete() {
    const navigate = useNavigate();
    return (
        <Container maxWidth="xs" sx={{ background: '#fff', borderRadius: 2, p: 4 }}>
            <Box sx={{ px: { xs: 2, sm: 4 }, justifyItems: "center" }}>
                <img src={mail} alt="mail" style={{ width: 130, height: 130, objectFit: "contain" }} />
                <Typography variant="h5" align="center" gutterBottom fontFamily="Inter" fontSize={30} fontWeight="bold" sx={{ mt: 1, fontSize: { xs: 24, sm: 30 } }}>
                    Almost There!
                </Typography>
                <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ fontSize: 15, fontWeight: 400, color: "#5A607F" }}
                >
                    Check your email inbox and confirm your account
                </Typography>
                <Divider sx={{ mt: 5, borderColor: "#D7DBEC", borderBottomWidth: 1, width: '100%', }} />
                <Typography variant="subtitle2" sx={{ mt: 3, color: "#5A607F", fontSize: "14px", fontWeight: "400" }}>
                    Didn’t receive any mail?
                </Typography>
                <Box sx={{ mt: 2, width: '100%', }}>
                    <Button fullWidth  variant="outlined" 
                        sx={{
                            borderColor: "#D7DBEC",
                            color: "#1E5EFF",
                            '&:focus': {
                                outline: 'none',
                                boxShadow: 'none',
                                borderColor: "#D7DBEC",
                            },
                            textTransform: "none",
                            height: "40px",
                            fontWeight:"400"
                        }}
                    >Resend Confirmation</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default RegistrationComplete;


