import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Copyright } from '../components/Common';
import { useFirebase } from '../context/firebaseContext';

const LoginPage = () => {
  const firebase = useFirebase();
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  })


  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await firebase.singinUserWithEmailAndPassword(loginData.email,loginData.password);
  };

  const handleGoogleSignIn = async()=>{
    await firebase.signinWithGoogle();
  }

  const renderInputField = (name: string, label: string, type: string) => {
    return (
      <TextField
        margin="normal"
        required
        fullWidth
        id={name}
        label={label}
        name={name}
        autoComplete={name}
        autoFocus
        type={type}
        onChange={(event) => {
          setLoginData({ ...loginData, [name]: event.target.value })
        }}
      />
    )
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <MdLockOutline />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {renderInputField("email", "Email Address", "email")}
          {renderInputField("password", "Password", "password")}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signup" >
                <Typography variant="body2">{"Don't have an account? "}<span style={{color: "blue"}}>Sign Up</span></Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 4, mb: 2 , cursor: "pointer"}} onClick={handleGoogleSignIn}>
          <img src="./google.png" width="300px" alt="google-login" />
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

export default LoginPage