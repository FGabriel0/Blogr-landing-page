import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import SecondMain from "./components/pages/SecondMain";
import ThirdMain from "./components/pages/ThirdMain";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Home/>
      <Main/>
      <SecondMain/>
      <ThirdMain/>
        <Routes>
          <Route path="#" exact component={Home} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
