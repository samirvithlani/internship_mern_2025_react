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
import { Play } from "./components/hotstar/Play";
import { FormDemo1 } from "./components/forms/FormDemo1";
import { FormDemo2 } from "./components/forms/FormDemo2";
import { FormDemo3 } from "./components/forms/FormDemo3";
import { FormDemo4 } from "./components/forms/FormDemo4";
import { FormDemo5 } from "./components/forms/FormDemo5";
import { LoginForm } from "./components/forms/LoginForm";
import { FormDemo6 } from "./components/forms/FormDemo6";
import { FormDemo7 } from "./components/forms/FormDemo7";
import { ApiDemo1 } from "./components/apis/ApiDemo1";
import { SearchMovie } from "./components/omdb/SearchMovie";
import { MovieDetail } from "./components/omdb/MovieDetail";
import { ApiDemo2 } from "./components/apis/ApiDemo2";
import { UserList } from "./components/apis/UserList";
import { PostDemo1 } from "./components/apis/PostDemo1";
import { PostDemo2 } from "./components/apis/PostDemo2";
import { UseEffectDemo } from "./components/UseEffectDemo";
import { StudentComp } from "./propsdemo/StudentComp";
import { CompoOne } from "./propsdemo/CompoOne";
import { EmployeeComp } from "./propsdemo2/EmployeeComp";
import { ChartDemo1 } from "./charts/ChartDemo1";
import { MyProducts } from "./components/MyProducts";
import { BankComponent } from "./components/BankComponent";

function App() {
  //js



  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path ="/" element = {<HotstarWelcome/>}></Route>
        <Route path="/home" element= {<HotstarHome/>}></Route>
        <Route path="/movies" element = {<HotstarMovies></HotstarMovies>}></Route>
        <Route path="/play/:id" element = {<Play/>}></Route>
        <Route path ="/formdemo1" element ={<FormDemo1/>}></Route>
        <Route path="/formdemo2" element ={<FormDemo2/>}></Route>
        <Route path ="/formdemo3" element ={<FormDemo3/>}></Route>
        <Route path ="/formdemo4" element ={<FormDemo4/>}></Route>
        <Route path="/formdemo5" element = {<FormDemo5/>}></Route>
        <Route path="/login" element = {<LoginForm/>}></Route>
        <Route path="/formdemo6" element ={<FormDemo6/>}></Route>
        <Route path="/formdemo7" element ={<FormDemo7/>}></Route>
        <Route path="/apidemo1" element ={<ApiDemo2/>}></Route>
        <Route path="/searchmovie" element ={<SearchMovie/>}></Route>
        <Route path="/moviedetail/:id" element ={<MovieDetail/>}></Route>
        <Route path="/userList" element ={<UserList/>}></Route>
        <Route path="/postdemo1" element ={<PostDemo1/>}></Route>
        <Route path="/postdemo2" element ={<PostDemo2/>}></Route>
        <Route path ="/useeffectdemo" element ={<UseEffectDemo/>}></Route>
        <Route path="/studentcomp" element ={<StudentComp/>}></Route>
        <Route path="/comp1" element = {<CompoOne/>}></Route>
        <Route path="/empcomp" element = {<EmployeeComp/>}></Route>
        <Route path="/chartdemo" element = {<ChartDemo1/>}></Route>
        <Route path="/myprod" element = {<MyProducts/>}></Route>
        <Route path="/bankcomp" element = {<BankComponent/>}></Route>
        {/* <Route path="/*" element = {<h1>NO PAGE</h1>}></Route> */}
        <Route path="/*" element ={<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
