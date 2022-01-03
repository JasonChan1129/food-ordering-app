import classes from './MealsItemForm.module.css';
import { useContext, useRef } from 'react';
import CartContext from '../../stores/CartContext';

const MealsItemForm = props => {
	const cartCtx = useContext(CartContext);
	const amountInputRef = useRef();

	const addToCart = event => {
		event.preventDefault();
		const item = {
			id: props.id,
			name: props.name,
			price: props.price,
			amount: amountInputRef.current.value,
		};
		cartCtx.onAddToCart(item);
	};

	return (
		<form className={classes.form} onSubmit={addToCart}>
			<label>Amount</label>
			<input type="number" defaultValue="1" min="1" max="5" ref={amountInputRef} />
			<button>+ Add</button>
		</form>
	);
};

export default MealsItemForm;
