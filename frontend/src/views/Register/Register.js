import { TextField, Button, Typography, Grid} from '@material-ui/core';
import { useState } from 'react';
import registerStyles from './RegisterStyles';

function Register() {
  const [emailError, setEmailError] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMessage, setPasswordErrorMessage] = useState("");
  const classes = registerStyles();

  const handleRegisterForm = async (event) => {
    event.preventDefault();

    // Grab form data
    const user = {
      firstName: event.target[0].value,
      lastName: event.target[2].value,
      email: event.target[4].value,
      password: event.target[6].value
    }

    // Send data to backend 
    const res = await fetch('https://mailroom-project.herokuapp.com/api/v1/signup', {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "manual",
      body: JSON.stringify(user)
    });

    const data = await res.json();
    setEmailError(false);
    setPasswordError(false);

    if(data.status === 200) {
      window.location.href = "/";
    } else {
      if(data.emailError) {
        setEmailError(true);
        setEmailMessage(data.emailError);
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
        <Grid item>
          <Grid item xs={12} className={classes.registerContainer}>
            <Grid item>
              <div>
                <h1>Register</h1>
              </div>
              <form onSubmit={handleRegisterForm}>
                <div className={classes.registerForm}>
                  <TextField  label="First Name" name="firstName" required variant="outlined"></TextField>
                </div>
                <div className={classes.registerForm}>
                  <TextField  label="Last Name" name="lastName" required variant="outlined"></TextField>
                </div>
                <div className={classes.registerForm}>
                  <TextField  label="Email" name="email" type="email" required
                   variant="outlined" error={emailError} 
                   helperText={emailError ? emailMessage : "" }></TextField>
                </div>
                <div className="register-form">
                  <TextField className="form-input" name="password" type="password" required 
                  label="Password" variant="outlined" error={passwordError}
                  helperText={passwordError ? passwordMessage : ""}></TextField>
                </div>
                <Button type="submit" className={classes.registerBtn} color="primary" variant="contained">Sign up</Button>
              </form>
            </Grid>
            <Grid item>
              <div className={classes.loginContainer}>
                <Typography className={classes.loginText} variant="body1">
                  Have an account? <a className={classes.login} href="/">Log in</a>
                </Typography>
              </div>
            </Grid>
          </Grid>

        </Grid>   
      </Grid>
    </div>
  );
}

export default Register;