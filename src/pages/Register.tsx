import { Box, Container, Typography, Link, Button, Divider } from "@mui/material";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/store';
import Title from "../components/Title";
import FormInput from "../components/FormInput";
import google from "../assets/Google.png";
import facebook from "../assets/Facebook.png";
import { registerSchema } from "../features/auth/auth.validation";
import { useToast } from '../components/ToastProvider'; 

const Register = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const {showToast} = useToast();

    const handleRegister = async () => {
  try {
    await registerSchema.validate({ email, password }, { abortEarly: false });
    setErrors({});
    await dispatch(registerThunk({ email, password })).unwrap();
    showToast("Registration successful","success");
  } catch (error: any) {
    if (error?.inner) {
      const newErrors: any = {};
      error.inner.forEach((err: any) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
    showToast("Registration failed", "error");
  }
};
    return (
        <Container maxWidth="xs" sx={{ background: '#fff', borderRadius: 2, p: 4 }}>
            <Box sx={{ px: { xs: 2, sm: 4 }, justifyItems: "center" }}>
                <Typography variant="h5" align="center" gutterBottom fontFamily="Inter" fontSize={30} fontWeight="bold" sx={{ mt: 1, fontSize: { xs: 24, sm: 30 } }}>
                    Create an Account
                </Typography>
                <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ fontSize: 15, fontWeight: 400, color: "#5A607F" }}
                >
                    Have an Account?{" "}
                    <Link
                        href="/"
                        underline="none"
                        sx={{ color: "#1E5EFF", fontSize: 15, fontWeight: 400 }}
                    >
                        Sign In
                    </Link>
                </Typography>

                <Box component="form" autoComplete="off" noValidate sx={{ mt: 5, display: 'flex', flexDirection: 'column' }}>
                    <Title>Email</Title>
                    <FormInput
                        label="Enter Email Address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <Title>Password</Title>
                    <FormInput
                        label="Create Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <Button onClick={handleRegister} fullWidth variant="contained" sx={{
                        mt: 2, background: "#1E2753", color: "#fff",
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
                    <Typography variant="subtitle2" sx={{ color: "#5A607F", fontSize: "14px", fontWeight: "400" }}>
                        By creating account, you agree to our
                    </Typography>
                    <Link
                        href="/register"
                        underline="none"
                        sx={{ color: "#1E5EFF", fontSize: "14px", fontWeight: "400" }}
                    >
                        Terms of Service
                    </Link>
                </Box>
                <Divider sx={{ my: 3, borderColor: "#D7DBEC", borderBottomWidth: 1, width: '100%', }} />
                <Typography variant="subtitle2" sx={{ color: "#5A607F", fontSize: "14px", fontWeight: "400" }}>
                    Or create an account using:
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
                        fontWeight: "400",
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
                            mt: 1,
                            fontWeight: "400"
                        }}
                    >Continue with Facebook</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
function registerThunk(arg0: { email: string; password: string; }): any {
    throw new Error("Function not implemented.");
}

