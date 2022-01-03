import React from 'react';

const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	onAddToCart: item => {},
	onRemoveFromCart: id => {},
});

export default CartContext;
