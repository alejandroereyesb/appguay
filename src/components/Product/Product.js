import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             brand:"Fictizia S.A",
             url:"https://ep01.epimg.net/elcomidista/imagenes/2017/07/05/articulo/1499278653_525806_1499279334_noticia_normal.jpg"
        }
    }
    
    render() {

        let {name,price,brand,url} = this.props.details //Destructuring

        return (
            <section>
                <div>
                    <h3>OFERTA</h3>
                    <p>Producto:{name}</p>
                    <p>Precio: {price} €</p>
                    <p>Marca: { brand || this.state.brand }</p>
                    <img src={url || this.state.url} class="img" alt="" />
                </div>
                <button onClick={this.props.remove}>Borrar</button>
            </section>
        )
    }
}
