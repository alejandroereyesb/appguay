import React, {useContext}  from "react";
import {ColorContext} from '../../context/ColorContext';

const Login = () => {
  const ctx = useContext(ColorContext);
  console.log(ctx.user.login);
  console.log(ctx.user.name)
  return <div>
    <button onClick={()=>{
        ctx.user.login("Alex")
        alert(ctx.user.name+" Se ha logado")
      }
    }>Login</button>
  </div>;
};

export default Login;
