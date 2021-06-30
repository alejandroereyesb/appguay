import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import Products from '../Products'
import Staff from '../Staff'
import Contact from '../Contact'

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Products}/>
                    <Route path="/staff" component={Staff} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </main>
        )
    }
}
