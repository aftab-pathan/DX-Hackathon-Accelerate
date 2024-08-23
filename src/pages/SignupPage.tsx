import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Copyright } from '../components/Common';
import { useState } from 'react';
import { useFirebase } from '../context/firebaseContext';

const SignupPage = () => {
  const firebase = useFirebase();
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await firebase.signupUserWithEmailAndPassword(signUpData.email,signUpData.password,signUpData.firstName,signUpData.lastName);
  };

  const renderInputField = (name: string, label: string, type: string, isRequired=true) => {
    return (
      <TextField
        margin="normal"
        required={isRequired}
        fullWidth
        id={name}
        label={label}
        name={name}
        autoComplete={name}
        autoFocus
        type={type}
        onChange={(event) => {
          setSignUpData({ ...signUpData, [name]: event.target.value })
        }}
      />
    )
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <MdLockOutline />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {renderInputField("firstName", "First Name", "text")}
          {renderInputField("lastName", "Last Name", "text")}
          {renderInputField("email", "Email Address", "email")}
          {renderInputField("password", "Password", "password")}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/login" >
                <Typography variant="body2">{"Already Have an account? "}<span style={{color: "blue"}}>Login</span></Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 1, mb: 3 , cursor: "pointer"}} >
          <img src="./google.png" width="300px" alt="google-login" />
        </Box>
      </Box>
      <Copyright  />
    </Container>
  )
}

export default SignupPage