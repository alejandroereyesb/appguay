import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import Products from '../Products'
import Staff from '../Staff'
import Contact from '../Contact'
import PokeList from '../PokeList'
import HooksUseState from '../HooksUseState';
import HooksUseEffect from '../HooksUseEffect';
import Topic from '../Topic';
import Login from '../Login';

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Products}/>
                    <Route path="/staff" component={Staff} />
                    <Route path="/pokelist" component={PokeList} />
                    <Route path="/usestate" component={HooksUseState} />
                    <Route path="/useeffect" component={HooksUseEffect} />
                    <Route path="/topic" component={Topic} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />
                </Switch>
            </main>
        )
    }
}
