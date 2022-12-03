import logo from "./logo.svg";
import React from "react";
import "./App.css";
import {BrowserRouter, Route , path} from 'react-router-dom'
import Homescreen from "./screens/Homescreen";
import Navbar from "./components/Navbar";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import 'antd/dist/antd.css';
import Bookingscreen from "./screens/Bookingscreen";
import Profilescreen from "./screens/Profilescreen";
import Landingscreen from "./screens/Landingscreen";
import Hero from "./screens/Hero";
import Adminscreen from "./screens/Adminscreen";
import Travel from "./components/travel";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      
         <Route path="/" exact component={Hero}/>
         <Route path="/home" exact component={Homescreen}/>
         <Route path="/login" component={Loginscreen}/>
         <Route path="/register" component={Registerscreen}/>
         <Route path="/book/:roomid/:fromdate/:todate" component={Bookingscreen}/>
         <Route path="/profile" component={Profilescreen}/>
         <Route path="/admin" component={Adminscreen}/>
         <Route path="/travel" component={Travel}/>
         <Route path="/testimonials" component={Testimonials}/>
         <Route path="/footer" component={Footer}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
