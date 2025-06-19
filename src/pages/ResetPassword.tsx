import { Button, Divider, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title'
import FormInput from '../components/FormInput'

function ResetPassword() {
    const navigate = useNavigate();
    return (
        <Container maxWidth="xs" sx={{ background: '#fff', borderRadius: 2, p: 4 }}>
            <Box sx={{ px: { xs: 2, sm: 4 }, justifyItems: "center" }}>
                <Typography variant="h5" align="center" gutterBottom fontFamily="Inter" fontSize={30} fontWeight="bold" sx={{ mt: 1, fontSize: { xs: 24, sm: 30 } }}>
                    Password Reset
                </Typography>
                <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ fontSize: 15, fontWeight: 400, color: "#5A607F" }}
                >
                    We Will Help You Reset your Password
                </Typography>
                <Box component="form" autoComplete="off" noValidate sx={{ mt: 5, display: 'flex', flexDirection: 'column' }}>
                    <Title>Email</Title>
                    <FormInput
                        label="Enter Email Address"
                        type="email"
                    />
                    <Button fullWidth variant="contained" onClick={() => navigate('/otp')} sx={{
                        mt: 2,
                        background: "#1E2753", color: "#fff",
                        '&:focus': {
                            outline: 'none',
                            boxShadow: 'none',
                        },
                        textTransform: "none",
                        height: "40px",
                        fontWeight: "400"
                    }}>
                        Reset Password
                    </Button>
                </Box>
                <Divider sx={{ mt: 5, borderColor: "#D7DBEC", borderBottomWidth: 1, width: '100%', }} />
                <Typography variant="subtitle2" sx={{ mt: 3, color: "#5A607F", fontSize: "14px", fontWeight: "400" }}>
                    Remembered your Password?
                </Typography>
                <Box sx={{ mt: 2, width: '100%', }}>
                    <Button fullWidth variant="outlined" onClick={() => navigate('/')}
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
                    >Back to Sign In</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default ResetPassword


