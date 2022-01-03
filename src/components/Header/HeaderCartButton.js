import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classes from './HeaderCartButton.module.css';
import { useContext, useState, useEffect } from 'react';
import CartContext from '../../stores/CartContext';

const HeaderCartButton = props => {
	const [cartChange, setCartChange] = useState(false);
	const cartCtx = useContext(CartContext);
	const items = cartCtx.items;
	const { totalAmount } = cartCtx;

	useEffect(() => {
		if (totalAmount === 0) {
			return;
		}

		setCartChange(true);

		const timer = setTimeout(() => {
			setCartChange(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [totalAmount]);

	const orderedItemsNumber = items.reduce((count, currentItem) => {
		return count + +currentItem.amount;
	}, 0);

	return (
		<button
			className={cartChange ? `${classes.button} ${classes.bump}` : classes.button}
			onClick={props.showCart}
		>
			<span>
				<FontAwesomeIcon icon={faShoppingCart} />
			</span>
			<span>Your Cart</span>
			<span className={classes.amount}>{orderedItemsNumber}</span>
		</button>
	);
};

export default HeaderCartButton;
