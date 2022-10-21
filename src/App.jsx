// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import HomeComp from './Components/Home';
import FuncComp from './Components/Functional';
import ClassComp from './Components/ClassComponent';
import PageNotFound from './Components/PageNotFound';

import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      {/* <a className="App-link" href="https://dreams-be73a.web.app" target="_blank" rel="noopener noreferrer"> Buy now!!! </a> */}
      <NavBar/>

     <Routes>
      <Route path="home" element={<HomeComp/>}></Route>
      <Route path="funcom" element={<FuncComp/>}></Route>
      <Route path="classcom" element={<ClassComp/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
     </Routes>
    </div>
  );
  
}

export default App;
