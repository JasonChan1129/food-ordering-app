import classes from './CartItem.module.css';

const CartItem = props => {
	return (
		<li className={classes.item}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.summary}>
					<div className={classes.price}>{`$${props.price}`}</div>
					<div className={classes.amount}>{`x${props.amount}`}</div>
				</div>
			</div>
			<div className={classes.buttons}>
				<button onClick={props.removeItem}>-</button>
				<button onClick={props.addItem}>+</button>
			</div>
		</li>
	);
};

export default CartItem;
