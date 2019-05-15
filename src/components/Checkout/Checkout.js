import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';

class Checkout extends Component {

    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page
        this.props.dispatch({
            type: 'CHECKOUT',
        });
        // navigate to the Products page after checkout
        this.props.history.push('/');
    }

    removeProduct = (productIndex) => {
        return (event) => {
            this.props.dispatch({
                type: 'REMOVE_FROM_CART',
                payload: productIndex,
            })
        };
    }

    render() {
        let totalPrice = 0;
        const htmlCheckoutItems = this.props.reduxState.checkoutReducer.map((item, index) => {
            totalPrice += item.price;
            return (
                <li key={index}>
                    {item.name}: {item.price}&nbsp;
                    <button onClick={this.removeProduct(index)}>Remove</button>
                </li>
            );
        });

        return (
            <div>
                <h2>Checkout</h2>
                {/* TODO: Display items in the cart */}
                <ul>
                    {htmlCheckoutItems}
                </ul>
                <p>Total Price: {totalPrice}</p>
                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        )
    }
}

export default withRouter(connect(mapReduxStateToProps)(Checkout));