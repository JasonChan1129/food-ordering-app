import { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const existingItemIndex = state.items.findIndex(item => {
			return item.id === action.item.id;
		});
		let existingItem = state.items[existingItemIndex];

		let updatedItems;
		if (existingItem) {
			const currentAmount = +existingItem.amount;
			const updatedAmount = currentAmount + +action.item.amount;
			existingItem.amount = updatedAmount;

			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = existingItem;
		} else {
			updatedItems = [...state.items];
			updatedItems.push(action.item);
		}

		let updatedTotalAmount = state.totalAmount;
		updatedTotalAmount = updatedTotalAmount + action.item.price * action.item.amount;

		return { items: updatedItems, totalAmount: updatedTotalAmount };
	} else if (action.type === 'REMOVE') {
		const existingItemIndex = state.items.findIndex(item => {
			return item.id === action.id;
		});

		let updatedItem = state.items[existingItemIndex];
		let updatedItems = state.items;
		let updatedTotalAmount = state.totalAmount;
		updatedTotalAmount = updatedTotalAmount - updatedItem.price;
		const itemAmount = updatedItem.amount;
		if (itemAmount > 1) {
			updatedItem.amount = +itemAmount - 1;
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			updatedItems.splice(existingItemIndex, 1);
		}

		return { items: updatedItems, totalAmount: updatedTotalAmount };
	}
	return defaultCartState;
};

const CartProvider = props => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	const addToCartHandler = item => {
		dispatchCartAction({
			type: 'ADD',
			item: item,
		});
	};

	const removeFromCartHandler = id => {
		dispatchCartAction({
			type: 'REMOVE',
			id: id,
		});
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		onAddToCart: addToCartHandler,
		onRemoveFromCart: removeFromCartHandler,
	};

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
