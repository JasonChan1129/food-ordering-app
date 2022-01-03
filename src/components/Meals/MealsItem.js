import classes from './MealsItem.module.css';

import MealsItemForm from './MealsItemForm';

const MealsItem = props => {
	return (
		<li className={classes.item}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{`$${props.price}`}</div>
			</div>
			<MealsItemForm id={props.id} name={props.name} price={props.price} />
		</li>
	);
};

export default MealsItem;
