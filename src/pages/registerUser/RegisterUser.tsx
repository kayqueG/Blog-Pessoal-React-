import React from "react";
import { Grid, Box,Typography,TextField,Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./RegisterUser.css";

function RegisterUser() {
  return (
    <Grid
      container 
      direction="row"
      justifyContent="center"
      alignContent="center"
      
    >
      <Grid item xs={6} className="img2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10} marginTop={15}>
          <form action="">
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="text2"
            >
              Cadastrar
            </Typography>
            <TextField
              id="name"
              label="nome"
              variant="outlined"
              name="name"
              margin="normal"
              fullWidth
            />
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
              fullWidth
              type="password"
            />
            <TextField
              id="confirmPassword"
              label="confirmar senha"
              variant="outlined"
              name="confirmPassword"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button variant="contained" color="secondary"           className="btnCancel">
                    Cancelar
          
                </Button>
              </Link>
              <Button type="submit" variant="contained" className="button">
                    Cadastrar
                </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default RegisterUser;
