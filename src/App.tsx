import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import { Grid } from "@material-ui/core";
import Navbar from "./components/static/navbar/Navbar";
import Footer from "./components/static/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
