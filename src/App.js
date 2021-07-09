import {BrowserRouter} from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { ColorContext } from "./context/ColorContext";
import { UserContext } from "./context/UserContext";

function App() {
  // Colores
  const [colors, setColors] = useState({
    color:"pink",
    "changeColor":changeColor
  }); // estado de colores
  // Usuario
  const [user, setUser] = useState({
    name:"",
    "login":login,
    "logout":logout
  }) 
  // user --> {name:"alex",logout:logout()}

  function login(name){
    setUser({...user,name}); // Cambia nombre de usuario
  }

  function logout(){
    setUser({...user,"name":""}); // Borra nombre de usuario
  }
  function changeColor(newColor){
    setColors({...colors,color:newColor});
  }


  return (
    <div className="App">
      <BrowserRouter>
      <ColorContext.Provider value={colors}>
        <UserContext.Provider value={user}>
          <Header/>
          <Main/>
        </UserContext.Provider>
      </ColorContext.Provider>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
