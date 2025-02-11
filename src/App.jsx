import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import {Header} from "./components/Header"
import Footer from "./components/Footer";
import { Content } from "./components/Content";
import { ArrayDemo1 } from "./components/ArrayDemo1";
import { ArrayDemo2 } from "./components/ArrayDemo2";
import { ArrayDemo3 } from "./components/ArrayDemo3";
import { ArrayDemo4 } from "./components/ArrayDemo4";
import { UseStateDemo } from "./components/UseStateDemo";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { InputDemo1 } from "./components/InputDemo1";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { HotstarHome } from "./components/hotstar/HotstarHome";
import { HotstarMovies } from "./components/hotstar/HotstarMovies";
import { HotstarWelcome } from "./components/hotstar/HotstarWelcome";
import { Error404 } from "./components/hotstar/Error404";

function App() {
  //js



  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path ="/" element = {<HotstarWelcome/>}></Route>
        <Route path="/home" element= {<HotstarHome/>}></Route>
        <Route path="/movies" element = {<HotstarMovies></HotstarMovies>}></Route>
        {/* <Route path="/*" element = {<h1>NO PAGE</h1>}></Route> */}
        <Route path="/*" element ={<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
