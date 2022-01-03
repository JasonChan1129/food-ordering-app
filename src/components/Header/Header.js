import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';
import background from '../../assets/meals.jpeg';
import { Fragment } from 'react';

const Header = props => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>A Food Order App</h1>
				<HeaderCartButton showCart={props.onShowCart} />
			</header>
			<div className={classes.image}>
				<img src={background} alt="a table of food" />
			</div>
		</Fragment>
	);
};

export default Header;
