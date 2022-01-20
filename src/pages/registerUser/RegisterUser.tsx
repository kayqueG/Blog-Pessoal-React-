import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import User from "../../models/User";
import { registerUser } from "../../services/Service";
import "./RegisterUser.css";

function RegisterUser() {
  let history = useHistory();
  const [confirmPassword, setConfirmPassword] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: ""
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: ""
  });

  useEffect(() => {
    if (userResult.id != 0) {
      history.push("/login");
    }
  }, [userResult]);

  function confirmPasswordHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if(confirmPassword == user.senha) {
      registerUser(`/usuarios/cadastrar`, user, setUserResult);
      alert("Usuário cadastrado com sucesso");
    } else {
      alert(
        "Dados inconsistentes. Favor verificar as informações de cadastro."
      );
    }
  }

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
          <form onSubmit={onSubmit}>
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
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="email"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
              type="email"
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              fullWidth
              type="password"
            />
            <TextField
              value={confirmPassword}
              onChange={(e: ChangeEvent<HTMLInputElement>) => confirmPasswordHandle(e)}
              id="confirmarSenha"
              label="confirmar senha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btnCancel"
                >
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
