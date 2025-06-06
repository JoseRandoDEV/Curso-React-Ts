import React from "react"
import { Box, Button, Container, Paper, TextField, Typography, Grid } from "@mui/material"
import { useNotification } from "../../context/notification.context"
import { LoginValidate } from "../../utils/validateForm";

type LoginType = {
  username: string;
  password: string;
}

export const LoginPage: React.FC<{}> = () => {
  const { getError, getSuccess } = useNotification();
  const [loginData , setLoginData] = React.useState<LoginType>({
    username: "",
    password: ""
  });

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setLoginData({...loginData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    LoginValidate.validate(loginData).then(() => {
      getSuccess(JSON.stringify(loginData))
    }).catch((error)=> {
      getError(error.message);
    })
    
  }

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" alignItems="center" justifyContent="center" 
      sx={{ minHeight: "100vh" }}>
       <Grid>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{mt:1, mb: 1}} variant="h4">Iniciar Sesion</Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField name="username" margin="normal" type="text" fullWidth label="Email" sx={{mt:2, mb: 1.5}} onChange={dataLogin}/>
              <TextField name="password" margin="normal" type="password"fullWidth label="Password" sx={{mt:1.5, mb: 1.5}} onChange={dataLogin}/>
              <Button fullWidth type="submit" variant="contained" sx={{mt:3, mb: 1.5}}>Iniciar Sesion</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}