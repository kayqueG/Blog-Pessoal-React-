import * as React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        color="primary"
        style={{ background: "#FDBB30" }}
      >
        <Toolbar variant="dense">
          <Box style={{ cursor: "pointer" }} color="black">
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box width="100%" display="flex" justifyContent="space-between">
        <Box></Box>
          <Box display="flex" position="relative">
            <Box mx={1} style={{ cursor: "pointer" }} color="black">
              <Typography variant="h6" color="inherit">
                Inicio
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }} color="black">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }} color="black">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }} color="black">
              <Typography variant="h6" color="inherit">
                Cadastrar tema
              </Typography>
            </Box>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }} color="black">
              <Typography variant="h6" color="inherit">
                Sair
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
