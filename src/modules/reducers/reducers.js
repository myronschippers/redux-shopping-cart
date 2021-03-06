// Default set of products
const products = [
    { name: `Marshmallow Mateys`, price: 6.98 },
    { name: `Golden Honney O's`, price: 6.48 },
    { name: `Frosted Flakes`, price: 3.98 },
];

// Array of products, this reducer is complete
export const productReducer = (state = products, action) => {
    if (action.type === 'ADD_NEW_PRODUCT') {
        return [...state, action.payload];
    } else if (action.type === 'REMOVE_PRODUCT') {
        return state.filter((product, index) => {
            return index !== action.payload;
        });
    }
    return state;
};

// Items in the cart, this reducer is incomplete
export const checkoutReducer = (state = [], action) => {
    // TODO: Products added to the cart
    if (action.type === 'ADD_TO_CART') {
        return [
            ...state,
            action.payload,
        ];
    } else if (action.type === 'CHECKOUT') {
        return [];
    } else if (action.type === 'REMOVE_FROM_CART') {
        const removeIndex = parseInt(action.payload);
        return state.filter((item, index) => {
            return index !== removeIndex;
        });
    }
    return state;
};