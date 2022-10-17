// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import FuncComp from './Components/Functional';
import ClassComp from './Components/ClassComponent';
import PageNotFound from './Components/PageNotFound';
import {Route, Routes} from 'react-router-dom';


function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       {/* <img src={logo} className="App-logo" alt="logo" /> */}
  //       <a className="App-link" href="https://dreams-be73a.web.app" target="_blank" rel="noopener noreferrer">
  //         Buy now!!!
  //       </a>
  //     </header>
  //     <NavBar/>
  //    <Routes>
  //     <Route path="funcom" element={<FuncComp/>}></Route>
  //     <Route path="classcom" element={<ClassComp/>}></Route>
  //     <Route path="*" element={<PageNotFound/>}></Route>
  //    </Routes>
  //   </div>
  // );
  return (
    <div>
      {/* <a className="App-link" href="https://dreams-be73a.web.app" target="_blank" rel="noopener noreferrer"> Buy now!!! </a> */}
      <NavBar/>
     <Routes>
      <Route path="funcom" element={<FuncComp/>}></Route>
      <Route path="classcom" element={<ClassComp/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
     </Routes>
    </div>
  );
  
}

export default App;
