import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/static/navbar/Navbar";
import Footer from "./components/static/footer/Footer";
import RegisterUser from "./pages/registerUser/RegisterUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import ThemeList from "./components/themes/themelist/ThemeList";
import PostList from "./components/posts/postlist/PostList"


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
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
