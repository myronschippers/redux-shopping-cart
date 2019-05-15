import React, { Component } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductList from '../ProductList/ProductList';

// Redux dependencies
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class Products extends Component {
    // TODO: Use the productReducer instead of state
    // state = {
    //     products: [
    //         { name: 'Marshmallow Mateys', price: 6.98 },
    //         { name: `Golden Honney O's`, price: 6.48 },
    //         { name: `Frosted Flakes`, price: 3.98 },
    //     ],
    // }

    // addNewProduct = (product) => {
    //     console.log(product);
    //     // TODO: Switch from using local state to dispatching an action
    //     this.props.dispatch({
    //         type: 'ADD_NEW_PRODUCT',
    //         payload: product,
    //     });
    //     // this.setState({
    //     //     products: [...this.state.products, product],
    //     // })
    // }

    render() {
        return (
            <div>
                <h2>Products</h2>
                <ProductForm />
                <ProductList products={this.props.reduxState.productReducer} />
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Products);