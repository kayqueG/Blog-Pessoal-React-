import React, { useEffect } from "react";
import "./Home.css";
import { Grid, Box, Button, Typography } from "@material-ui/core";
import { useHistory,Link} from "react-router-dom";
import PostTab from "../../components/posts/posttab/PostTab";
import ModalPost from "../../components/posts/modalPost/ModalPost";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import {toast} from "react-toastify";

function Home() {


  let history = useHistory();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado",{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false, 
        theme: "colored",
        progress: undefined
      });
      history.push("/login")

    }
  }, [token])

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="box"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={10}>
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
            <Box marginRight={1}>
              <ModalPost />
            </Box>
            <Link to="/posts" className="text-decorator-none">
              <Button variant="contained" className="button">
                Ver Postagens
              </Button>
            </Link>

          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src="https://i.imgur.com/u3ItEzu.png" alt="" width="400px" height="400px" />
        </Grid>
        <Grid xs={12} className="posts">
          <PostTab />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
