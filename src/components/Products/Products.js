import React, { Component } from 'react'
import Product from '../Product/Product'
import data from '../../data.json'


export default class Products extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            name:"--",
            products:data // [{},{},{},{},.....{}.....{}]
        }
    }
    
    renderProducts = () => 
        this.state.products.map((product,i)=> <Product details={product} key={i}/>)

    addProduct = () => {
        let name = prompt("Introduce nombre de producto")
        let price = prompt("Introduce precio")

        let product = {name,price}; // Nuevo JSON

        this.setState({name})
        this.setState({products:[...this.state.products,product]})

        alert(`Producto añadido: ${name}. Precio: ${price} €`)
    }


    removeAllProducts = () => this.setState({name:"--",products:[]})

    
    
    render() {  
        return (
            <article>
                {this.renderProducts()}

                <button onClick={this.addProduct}>Añadir producto</button>
                <button onClick={this.removeAllProducts}>Borrar todo</button>
                <p>Último añadido: {this.state.name}</p>
                
            </article>
        )
    }
}
