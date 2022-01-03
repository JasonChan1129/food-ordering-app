import { useState } from 'react';
import CartProvider from './stores/CartProvider';

import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	return (
		<CartProvider>
			{cartIsShown && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<Meals />
		</CartProvider>
	);
}

export default App;
