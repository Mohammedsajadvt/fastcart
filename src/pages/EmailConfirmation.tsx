import { Button, Divider, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title'
import FormInput from '../components/FormInput'

function EmailConfirmation() {
    const navigate = useNavigate();
    return (
        <Container maxWidth="xs" sx={{ background: '#fff', borderRadius: 2, p: 4 }}>
            <Box sx={{ px: { xs: 2, sm: 4 }, justifyItems: "center" }}>
                <Typography variant="h5" align="center" gutterBottom fontFamily="Inter" fontSize={30} fontWeight="bold" sx={{ mt: 1, fontSize: { xs: 24, sm: 30 } }}>
                    Confirm Email
                </Typography>
                <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ fontSize: 15, fontWeight: 400, color: "#5A607F" }}
                >
                    Confirm with Email Code
                </Typography>
                <Box component="form" autoComplete="off" noValidate sx={{ mt: 5, display: 'flex', flexDirection: 'column' }}>
                    <Title>Confirmation Code</Title>
                    <FormInput
                        label="Enter Code"
                        type="email"
                    />
                    <Button fullWidth variant="contained" onClick={()=>navigate("/registration-completed")} sx={{
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
                        Confirm Email
                    </Button>
                </Box>
                <Divider sx={{ mt: 5, borderColor: "#D7DBEC", borderBottomWidth: 1, width: '100%', }} />
                <Typography variant="subtitle2" sx={{ mt: 3, color: "#5A607F", fontSize: "14px", fontWeight: "400" }}>
                    Haven’t received your code?
                </Typography>
                <Box sx={{ mt: 2, width: '100%', }}>
                    <Button fullWidth variant="outlined" 
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
                    >Resend Code</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default EmailConfirmation;


