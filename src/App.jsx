// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import { Services } from './Components/Services';
import Contact from './Components/Contact';
import { Footer } from './Components/Footer';
import { Map } from './Components/map';


import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar/>
      <Home/>
     <Services></Services>
     <Contact/>
     <Map/>
     <Footer/>
     {/* <Routes>
      <Route path="home" element={<HomeComp/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
     </Routes> */}
    </>
  );
  
}

export default App;
