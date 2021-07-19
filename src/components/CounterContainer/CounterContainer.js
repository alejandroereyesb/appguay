import React from 'react'
import {connect} from 'react-redux';
import { increment,decrement,reset } from '../../redux'

function CounterContainer({counter,incrementOne,decrementOne,reset}) {
    return (
        <>
            <h1>Counter</h1>
            <button name='add' onClick={incrementOne} >+</button>
            <button name='sub' onClick={decrementOne} >-</button>
            <button name='reset' onClick={reset} >reset</button>
            <h3>The value is: {counter}</h3>
        </>
    );
}

const mapStateToProps = state => {
    // en este caso, el componente recibirá counter como prop
    console.log(state.counterR.counter)
    return {counter:state.counterR.counter}
}

const mapDispatchToProps = dispatch => {
    // nombre de las props para ejecutar y llamar a una action
    return {
        incrementOne: () => dispatch(increment()),
        decrementOne: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer)