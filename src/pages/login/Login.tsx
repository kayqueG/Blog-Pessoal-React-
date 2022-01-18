import React from "react";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Login.css";
import "../home/Home.css";

function Login() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid style={{ backgroundColor: "blue" }}></Grid>
      <Grid xs={6} alignItems="center">
        <Box paddingX={20}>
          <form action="">
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="text1"
            >
              Entrar
            </Typography>
            <TextField
              id="user"
              label="usuário"
              variant="outlined"
              name="user"
              margin="normal"
              fullWidth
            />
            <TextField
              id="password"
              label="senha"
              variant="outlined"
              name="password"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/home" className="text-decorator-none">
                <Button type="submit" variant="contained" className="button">
                  Logar
                </Button>
              </Link>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              className="text1"
            >
              Cadastre-se
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="img"></Grid>
    </Grid>
  );
}

export default Login;
