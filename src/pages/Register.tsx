import { Box, Container, Paper, TextField, Typography } from "@mui/material";


const Register = () => { 
    return (
       <Container maxWidth="xs" sx={{ mt: 8 }}>
        <Paper sx={{background:'#ffffff',borderRadius:2,p: 4}}>
            <Typography variant="h5" align="center"  gutterBottom fontFamily="Inter" fontSize={30} fontWeight="bold">Create an Account</Typography>
             <Box component="form"  noValidate>
            <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            name="name"
            required
          />
             </Box>
        </Paper>
       </Container>
    );
};


export default Register;