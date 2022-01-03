import { useContext } from 'react';
import CartContext from '../../stores/CartContext';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = props => {
	const cartCtx = useContext(CartContext);

	const addItemHandler = item => {
		item = { ...item, amount: 1 };
		cartCtx.onAddToCart(item);
	};

	const removeItemHandler = id => {
		cartCtx.onRemoveFromCart(id);
	};

	const cartItems = cartCtx.items.map(item => {
		return (
			<CartItem
				key={item.id}
				name={item.name}
				amount={item.amount}
				price={item.price}
				addItem={addItemHandler.bind(null, item)}
				removeItem={removeItemHandler.bind(null, item.id)}
			/>
		);
	});

	const totalAmount = cartCtx.totalAmount.toFixed(2);

	return (
		<Modal onClick={props.onHideCart}>
			{!cartCtx.items.length && <p className={classes.empty}>Your cart is empty.</p>}
			<ul className={classes.items}>{cartItems}</ul>
			<div className={classes.amount}>
				<span>Total Amount</span>
				<span>{`$${totalAmount}`}</span>
			</div>
			<div className={classes['button-group']}>
				<button onClick={props.onHideCart}>Close</button>
				<button>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
