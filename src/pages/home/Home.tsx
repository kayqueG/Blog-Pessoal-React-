import React from "react";
import "./Home.css";
import { Grid, Paper, Box, Button, Typography,TextField } from "@material-ui/core";
import Cards from "../../components/cards/Cards";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="box"
      >
        <Grid alignItems="center" item xs={7}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="title"
            >
              Seja bem vindo(a)!!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="title"
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button variant="contained" className="button">
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <img src="https://imgur.com/5tfOCds.png" alt="Lebron James" />
        </Grid>
        <Grid xs={12} className="posts"></Grid>
      </Grid>
    </>
  );
}

export default Home;
