import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="container">
                    <h1 className="mh-logo">
                        <img className="logo" src="http://flexbox.ninja/assets/images/logo.svg"  alt="Flexbox.ninja"/>
		            </h1>
                    <Nav />
                </div>
            </header>
        )
    }
}
