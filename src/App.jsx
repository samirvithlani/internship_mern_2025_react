import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import {Header} from "./components/Header"
import Footer from "./components/Footer";
import { Content } from "./components/Content";
import { ArrayDemo1 } from "./components/ArrayDemo1";
import { ArrayDemo2 } from "./components/ArrayDemo2";

function App() {
  //js



  return (
    <div>
      {/* <Header></Header> */}
      {/* <Content></Content> */}
      {/* <ArrayDemo1></ArrayDemo1> */}
      <ArrayDemo2></ArrayDemo2>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
