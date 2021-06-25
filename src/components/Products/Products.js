import React, { Component } from 'react'
import Product from '../Product/Product'

export default class Products extends Component {
    
    render() {
        // Viene de un "fetch".....
        let data = [{name:"botella", price:"10"},
                    {name:"cosa", price:"3"},
                    {name:"Silla", price:"20", brand:"Ikea"},
                    {name:"queso", price:"4", brand:"Garcia Vaquero"}]

        return (
            <article>
                <Product details={data[0]}/>
                <Product details={data[1]}/>
                <Product details={data[2]}/>
                <Product details={data[3]}/>
            </article>
        )
    }
}
