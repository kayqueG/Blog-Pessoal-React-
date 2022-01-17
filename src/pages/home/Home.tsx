import React from "react";
import "./Home.css";
import { Grid, Paper,Box,Button } from "@material-ui/core";

function Home() {
  return (
    <>
        <Paper>
            <Box p={2}>
                <Box display="flex" justifyContent="center">
                    <h1>Título</h1>
                </Box>
                <img src="" alt="" style={{width:"100%",height:"100%"}}/>
                <Box display="flex" justifyContent="center" p={2}>
                    <Button color="primary" variant="contained">Texto1</Button>
                    <Button color="secondary" variant="contained" > Texto2</Button></Box>
            </Box>
        </Paper>
    </>
  );
}

export default Home;
