import React,{useState}from "react";
import {connect} from 'react-redux';
import { writeMessage } from "../../redux";

const MessageContainer = ({message,writeMessage}) => {

const [text, setText] = useState("") // guarda lo que pongas en el input de texto

  return <div>
    <h2>Mensaje recibido:{message}</h2>
    <input type="text" onChange={e=>setText(e.target.value)} />
    <button onClick={()=>writeMessage(text)}>Enviar mensaje</button>
  </div>;
};

const mapStateToProps = state => {
  console.log("*****************")
  console.log(state.messageReducer.message)
  return {message:state.messageReducer.message}
}


const mapDispatchToProps = dispatch => {
  return {
      writeMessage: (message) => dispatch(writeMessage(message))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageContainer)
