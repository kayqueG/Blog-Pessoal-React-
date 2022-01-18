import React from "react";
import "./Home.css";
import { Grid, Paper, Box, Button, Typography} from "@material-ui/core";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "#860038" }}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Seja bem vindo(a)!!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              style={{ color: "black", fontWeight: "bold" }}
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button
              variant="contained"
              style={{
                borderColor: "white",
                backgroundColor: "#FDBB30",
                color: "black",

              }}
            >
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://imgur.com/5tfOCds.png"
            alt="Lebron James"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
