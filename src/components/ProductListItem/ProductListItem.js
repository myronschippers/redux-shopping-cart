import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class ProductListItem extends Component {

    addProductToCart = () => {
        console.log(this.props.product);
        // TODO: Dispatch here
        this.props.dispatch({
            type: 'ADD_TO_CART',
            payload: {
                ...this.props.product,
            },
        });
    }

    removeProduct = (productIndex) => {
        return (event) => {
            this.props.dispatch({
                type: 'REMOVE_PRODUCT',
                payload: productIndex,
            })
        };
    }

    render() {
        return (
            <li>
                {this.props.product.name}: {this.props.product.price}&nbsp;
                <button onClick={this.addProductToCart}>Add to Cart</button>&nbsp;
                <button onClick={this.removeProduct(this.props.productIndex)}>Remove Product</button>
            </li>
        )
    }
}

export default connect(mapReduxStateToProps)(ProductListItem);