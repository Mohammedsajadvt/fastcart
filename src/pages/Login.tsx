import { Box, Container, Typography, Link, Button, Divider, Checkbox } from "@mui/material";
import FormInput from "../components/FormInput";
import google from "../assets/Google.png";
import facebook from "../assets/Facebook.png";
import Title from "../components/Title";
const Login = () => {

    return (
        <Container maxWidth="xs" sx={{ background: '#fff', borderRadius: 2, p: 4 }}>
            <Box sx={{ px: { xs: 2, sm: 4 }, justifyItems: "center" }}>
                <Typography variant="h5" align="center" gutterBottom fontFamily="Inter" fontSize={30} fontWeight="bold" sx={{ mt: 1, fontSize: { xs: 24, sm: 30 } }}>
                    Sign In
                </Typography>
                <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ fontSize: 15, fontWeight: 400, color: "#5A607F" }}
                >
                    New to Our Product?{" "}
                    <Link
                        href="/register"
                        underline="none"
                        sx={{ color: "#1E5EFF", fontSize: 15, fontWeight: 400 }}
                    >
                        Create an Account
                    </Link>
                </Typography>

                <Box component="form" autoComplete="off" noValidate sx={{ mt: 5, display: 'flex', flexDirection: 'column' }}>
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
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", mt: 1, mb: 1.5 }}>
                        <Checkbox
                            size="small"
                            sx={{
                                p: 0.0,
                                color: "#D7DBEC",
                                '&.Mui-checked': {
                                    color: "#1E2753",
                                },
                                '& .MuiSvgIcon-root': {
                                    fontSize: 20,
                                },
                            }}
                        />
                        <Typography
                            sx={{
                                color: "#5A607F",
                                fontSize: "14px",
                                fontWeight: 400,
                                lineHeight: 1.2,
                                ml: 0.5,
                            }}
                        >
                            Keep me signed in
                        </Typography>
                    </Box>

                    <Button fullWidth variant="contained" sx={{
                        background: "#1E2753", color: "#fff",
                        '&:focus': {
                            outline: 'none',
                            boxShadow: 'none',
                        },
                        textTransform: "none",
                        height: "40px",
                        fontWeight: "400"

                    }}>
                        Create Account
                    </Button>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Link
                        href="/reset"
                        underline="none"
                        sx={{ color: "#1E5EFF", fontSize: "14px", fontWeight: "400" }}
                    >
                        Forgot your password?
                    </Link>
                </Box>
                <Divider sx={{ my: 3, borderColor: "#D7DBEC", borderBottomWidth: 1, width: '100%', }} />
                <Typography variant="subtitle2" sx={{ color: "#5A607F", fontSize: "14px", fontWeight: "400" }}>
                    Or sign in using:
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Button fullWidth variant="outlined" startIcon={
                        <img
                            src={google}
                            alt="Google"
                            style={{ width: 20, height: 20, objectFit: "contain" }}
                        />
                    } sx={{
                        borderColor: "#D7DBEC",
                        color: "#1E5EFF",
                        textTransform: "none",
                        height: "40px",
                        fontWeight:"400",
                        '&:focus': {
                            outline: 'none',
                            boxShadow: 'none',
                            borderColor: "#D7DBEC",
                        },
                    }}>Continue with Google</Button>
                    <Button fullWidth variant="outlined" startIcon={
                        <img
                            src={facebook}
                            alt="facebook"
                            style={{ width: 20, height: 20, objectFit: "contain" }}
                        />
                    }
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
                            fontWeight:"400",
                            mt: 1,

                        }}
                    >Continue with Facebook</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
