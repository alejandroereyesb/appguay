import React from 'react'
import CounterContainer from '../CounterContainer'
import HooksCounterContainer from '../HooksCounterCointainer'
import MessageContainer from '../MessageContainer'
import UserContainer from '../UserContainer'

function PruebaRedux() {
    return (
        <div>
            <CounterContainer/>
            <HooksCounterContainer/>
            <MessageContainer/>
            <UserContainer/>
        </div>
    )
}

export default PruebaRedux