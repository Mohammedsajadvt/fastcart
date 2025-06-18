import { Box, Container, Typography, Link, Button } from "@mui/material";
import { styled } from "@mui/system"
import FormInput from "../components/FormInput";

const Register = () => {
    const Title = styled(Typography)(() => ({
        display: "flex",
        color: "#5A607F",
        fontSize: "14px",
        fontWeight:"400"
    }))
    return (
        <Container maxWidth="xs" sx={{ background: '#fff', borderRadius: 2, p: 4 }}>
            <Box sx={{ px: 4, justifyItems: "center" }}>
                <Typography variant="h5" align="center" gutterBottom fontFamily="Inter" fontSize={30} fontWeight="bold" sx={{ mt: 1 }}>
                    Create an Account
                </Typography>
                <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ fontSize: 16, fontWeight: 400, color: "#5A607F" }}
                >
                    Have an Account?{" "}
                    <Link
                        href="/login"
                        underline="none"
                        sx={{ color:"#1E5EFF",fontSize: 16, fontWeight: 400 }}
                    >
                        Sign In
                    </Link>
                </Typography>

                <Box component="form" autoComplete="off"  noValidate sx={{ mt: 5 }}>
                    <Title>Email</Title>
                    <FormInput
                        label="Enter Email Address"
                        type="email"
                    />
                    <Title>Password</Title>
                    <FormInput
                        label="Create Password"
                        type="password"
                    />
                    <Button fullWidth variant="contained" sx={{
                        mt: 2, background: "#1E2753", color: "#fff",
                        '&:focus': {
                            outline: 'none',
                            boxShadow: 'none',
                        },
                        textTransform: "none",
                        height:"40px"
                    }}>
                        Create Account
                    </Button>
                </Box>
                <Box sx={{mt:3}}>
                    <Typography variant="subtitle2" sx={{color:"#5A607F",fontSize:"14px",fontWeight:"400"}}>
                    By creating account, you agree to our
                </Typography>
                <Link
                        href="/register"
                        underline="none"
                        sx={{color:"#1E5EFF",fontSize:"14px",fontWeight:"400"}}
                    >
                        Terms of Service
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
