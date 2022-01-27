import React,{useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Theme from "../../../models/Theme";
import "./ThemeList.css";
import useLocalStorage from "react-use-localstorage";
import { search } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";


function ThemeList() {

  const [themes,setThemes] = useState<Theme[]>([]);
  let history = useHistory();
  const token = useSelector<TokenState,TokenState["tokens"]>(
    (state)=> state.tokens
  );
  
  useEffect(()=>{
    if(token==""){
      alert("Você precisa estar logado!")
      history.push("/login");
    }
  },[token])

  async function getTheme(){
    await search("/temas",setThemes,{
      headers: {
        "Authorization": token
      }
    })
  }

  useEffect(()=>{
    getTheme()
  },[themes.length])

    return (
      <>
      {
        themes.map(theme=>(
        <Box m={2}  >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tema
              </Typography>
              <Typography variant="h5" component="h2">
               {theme.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}
               >
  
                <Link to={`formularioTema/${theme.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft button" size='small' color="primary" >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`deletarTema/${theme.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary"
                    className="btnCancel">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
        ))
        }
      </>
    );
  }
  
  
  export default ThemeList;