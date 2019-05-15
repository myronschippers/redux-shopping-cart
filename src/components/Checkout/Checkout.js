import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class Checkout extends Component {

    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page
        this.props.dispatch({
            type: 'CHECKOUT',
        })
    }

    render() {
        const htmlCheckoutItems = this.props.reduxState.checkoutReducer.map((item, index) => {
            return <li key={index}>{item.name}: {item.price}</li>
        });

        return (
            <div>
                <h2>Checkout</h2>
                {/* TODO: Display items in the cart */}
                <ul>
                    {htmlCheckoutItems}
                </ul>
                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Checkout);