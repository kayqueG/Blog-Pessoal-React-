import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import "./Footer.css";

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="text"
              >
                Siga-nos nas redes sociais
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.github.com/kayqueG" target="_blank">
                <GitHub className="net" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <LinkedIn  className="net" />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
               className="text"
              >
                © 2022 Copyright:
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                className="text"
                  align="center"
                >
                  Kayque Gonçalves
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
