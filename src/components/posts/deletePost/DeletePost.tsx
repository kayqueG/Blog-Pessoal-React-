import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletePost.css';
import { useHistory, useParams } from 'react-router-dom';
import Post from '../../../models/Post';
import useLocalStorage from 'react-use-localstorage';
import { deleteId, searchId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from "react-toastify"

function DeletePost() {

  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState,TokenState["tokens"]>(
    (state)=> state.tokens
  );
  const [post, setPosts] = useState<Post>()

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

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    searchId(`/postagens/${id}`, setPosts, {
      headers: {
        "Authorization": token
      }
    })
  }

  function yes() {
    history.push('/posts')
    deleteId(`/postagens/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success("Postagem deletada com sucesso",{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false, 
      theme: "colored",
      progress: undefined
    });;
  }

  function no() {
    history.push('/posts')
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Tem certeza que deseja deletar a postagem: {post?.titulo} ?
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={yes} variant="contained" className="marginLeft button" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box>
                <Button onClick={no} variant="contained" size='large' color="secondary" className="btnCancel">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletePost;