import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './RegisterPost.css';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Theme from '../../../models/Theme';
import { post as post_method, put, search, searchId } from '../../../services/Service';
import Post from '../../../models/Post';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function RegisterPost() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [themes, setThemes] = useState<Theme[]>([])
    const token = useSelector<TokenState,TokenState["tokens"]>(
        (state)=> state.tokens
      );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    const [theme, setTheme] = useState<Theme>(
        {
            id: 0,
            descricao: ''
        })
    const [post, setPost] = useState<Post>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    })

    useEffect(() => {
        setPost({
            ...post,
            tema: theme
        })
    }, [theme])

    useEffect(() => {
        getThemes()
        if (id !== undefined) {
            findPostById(id)
        }
    }, [id])

    async function getThemes() {
        await search("/temas", setThemes, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findPostById(id: string) {
        await searchId(`postagens/${id}`, setPost, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPost(e: ChangeEvent<HTMLInputElement>) {

        setPost({
            ...post,
            [e.target.name]: e.target.value,
            tema: theme
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()


        if (id !== undefined) {
            put(`/postagens`, post, setPost, {
                headers: {
                    'Authorization': token
                }
            })
            
            alert('Postagem atualizada com sucesso');

        } else {
            post_method(`/postagens`, post, setPost, {
                headers: {
                    'Authorization': token
                }
            })
            console.log("postagem " + JSON.stringify(post))
            alert('Postagem cadastrada com sucesso');
        }
        back()

    }

    function back() {
        history.push('/posts')
    }

    return (
        <Container maxWidth="sm" className="top">
            <form  onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastro  de postagem</Typography>
                <TextField
                    value={post.titulo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPost(e)}
                    id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField
                    value={post.texto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPost(e)}
                    id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => searchId(`/temas/${e.target.value}`, setTheme, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            themes.map(theme => (
                                <MenuItem value={theme.id}>{theme.descricao}</MenuItem>
                            ))
                        }

                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary"
                    className='button'>
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default RegisterPost;