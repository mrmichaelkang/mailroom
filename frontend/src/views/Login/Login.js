import { TextField, Button, Typography, Grid } from '@material-ui/core';
import { useState } from 'react';
import Logo from "../../components/Logo";
import loginStyles from './LoginStyles';

function Login() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userErrorMessage, setUserErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const classes = loginStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    
    const userLogin = {
      email: event.target[0].value,
      password: event.target[2].value
    }

    const res = await fetch('https://mailroom-project.herokuapp.com/api/v1/login', {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "manual",
      body: JSON.stringify(userLogin)
    });
    const data = await res.json();

    setEmailError(false);
    setPasswordError(false);

    if(data.authenticated) {
      localStorage.setItem('isAuthenticated', data.authenticated);
      localStorage.setItem('name', data.user.name);
      localStorage.setItem('uid', data.user.uid);
      localStorage.setItem('msg', data.msg);
      localStorage.setItem('msgCode', data.msgCode);
      localStorage.setItem('hasFlash', false);
      window.location.href = "/mailroom";
    } else {
      if(data.userError) {
        setEmailError(true);
        setUserErrorMessage(data.userError);
      }
      if(data.passwordError) {
        setPasswordError(true);
        setPasswordErrorMessage(data.passwordError);
      }
    }
  }

  return (
  <div>
    <Grid container spacing={1}>
      <Grid item md={6} className={classes.logoColumn}>
        <Logo/>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.container}>
        <Grid item>
          <div className={classes.loginContainer} >
            <div>
              <h1>Mailroom</h1>
            </div>
            <form onSubmit={handleLogin}>
              <div className={classes.loginForm}>
                <TextField className={classes.inputText} 
                label="Email" name="email" type='email' 
                required variant="outlined" error={emailError}
                helperText={emailError ? userErrorMessage : ""}></TextField>
              </div>
              <div className={classes.loginForm}>
                <TextField className={classes.inputText} name="password" 
                required type="password" label="Password" variant="outlined"
                error={passwordError} helperText={passwordError ? passwordErrorMessage : ""}></TextField>
              </div>
              <Button type="submit" className={classes.loginBtn} color="primary" variant="contained">Log in</Button>
            </form>
          </div>
        </Grid>
        <Grid item >
          <div className={classes.registerContainer} >
            <Typography className={classes.registerText} variant="body1">
              Don't have an account? <a className={classes.signUp}href="https://mailroom-project.herokuapp.com/register">Sign up</a>
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12}>
        <footer className={classes.footer}>
          <a href='https://www.freepik.com/vectors/background'>Background vector created by vectorpouch - www.freepik.com</a>
        </footer>
      </Grid>
    </Grid>
  </div>

  );
}

export default Login;