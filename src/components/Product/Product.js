import React, { Component } from 'react'

export default class Product extends Component {
    
    render() {

        let {name,price} = this.props.details //Destructuring

        return (
            <section>
                <h3>OFERTA</h3>
                <p>Producto:{name}</p>
                <p>Precio: {price} €</p>
            </section>
        )
    }
}
