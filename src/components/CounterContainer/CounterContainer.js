import React from 'react'
import {connect} from 'react-redux';
import { increment,decrement,reset } from '../../redux'

function CounterContainer({counter,increment,decrement,reset}) {
    return (
        <>
            <button name='add' onClick={increment} >+</button>
            <button name='sub' onClick={decrement} >-</button>
            <button name='reset' onClick={reset} >reset</button>
            <h1>The value is: {counter}</h1>
        </>
    );
}

const mapStateToProps = state => {
    // en este caso, el componente recibirá counter como prop
    console.log(state.counter)
    return {counter:state.counter}
}

const mapDispatchToProps = dispatch => {
    // nombre de las props para ejecutar y llamar a una action
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer)