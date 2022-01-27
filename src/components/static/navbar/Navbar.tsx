import * as React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

function Navbar() {


  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let history = useHistory();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    alert("Usuário deslogado")
    history.push("/login")
  }

  var navBarComponent;

  if (token != "") {
    navBarComponent = <AppBar
      position="static"
      className="appbar"
    >
      <Toolbar variant="dense">
        <Box className="cursor">
          <Typography variant="h5" color="inherit">
            BlogPessoal
          </Typography>
        </Box>

        <Box width="100%" display="flex" justifyContent="end">
          <Box></Box>
          <Box display="flex" position="relative">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Inicio
                </Typography>
              </Box>
            </Link>

            <Link to="/posts" className="text-decorator-none">
              <Box mx={1} className="cursor">

                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
            </Link>
            <Link to="/temas" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
            </Link>
            <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar tema
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box mx={1} className="cursor" onClick={goLogout}>
            <Typography variant="h6" color="inherit">
              Sair
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  }

  return (
    <>
      {navBarComponent}
    </>
  );
}

export default Navbar;
