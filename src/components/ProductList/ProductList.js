import React, { Component } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';

class ProductList extends Component {

    render() {
        return (
            <div>
                <ul>
                   {this.props.products.map((product, i) => {
                       return (
                           <ProductListItem key={i} product={product} productIndex={i} />
                       );
                   })} 
                </ul>
            </div>
        )
    }
}

export default ProductList;