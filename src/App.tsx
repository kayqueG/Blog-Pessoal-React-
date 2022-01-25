import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/static/navbar/Navbar";
import Footer from "./components/static/footer/Footer";
import RegisterUser from "./pages/registerUser/RegisterUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import ThemeList from "./components/themes/themelist/ThemeList";
import PostList from "./components/posts/postlist/PostList"
import RegisterTheme from "./components/themes/registerTheme/RegisterTheme";
import RegisterPost from "./components/posts/registerPost/RegisterPost";
import DeletePost from "./components/posts/deletePost/DeletePost";
import DeleteTheme from "./components/themes/deleteTheme/DeleteTheme";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: "100vh" }}>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/cadastrousuario">
            <RegisterUser />
          </Route>
          <Route path="/temas">
            <ThemeList />
          </Route>
          <Route path="/posts">
            <PostList/>
          </Route>

          <Route exact path='/formularioPostagem'>
            <RegisterPost />
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            <RegisterPost />
          </Route>
          <Route exact path='/formularioTema'>
            <RegisterTheme />
          </Route>
          <Route exact path='/formularioTema/:id'>
            <RegisterTheme />
          </Route>
          <Route path='/deletarPostagem/:id'>
            <DeletePost />
          </Route>
          <Route path='/deletarTema/:id'>
            <DeleteTheme />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
