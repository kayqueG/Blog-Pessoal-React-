import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Theme from "../../../models/Theme";
import { useHistory, useParams } from "react-router-dom";
import { post, put, searchId } from "../../../services/Service";
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from "react-toastify"


function RegisterTheme() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    const [theme, setTheme] = useState<Theme>({
        id: 0,
        descricao: ""
    })


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
        searchId(`/temas/${id}`, setTheme, {
            headers: {
                "Authorization": token
            }
        })
    }

    function updatedTheme(e: ChangeEvent<HTMLInputElement>){
        setTheme({
            ...theme,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(theme))

        if (id !== undefined) {
            console.log(theme)
            put(`/temas`, theme, setTheme, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Tema atualizado com sucesso",{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false, 
                theme: "colored",
                progress: undefined
              });
        } else {
            post(`/temas`, theme,setTheme, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Tema cadastrado com sucesso",{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false, 
                theme: "colored",
                progress: undefined
              });
        }
        back()

    }

    function back() {
        history.push('/temas')
    }

    return (
        <Container maxWidth="sm" className="top">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastro de tema</Typography>
                <TextField value={theme.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTheme(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" className="button">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default RegisterTheme;