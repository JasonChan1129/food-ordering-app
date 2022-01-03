import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from '../UI/Card';

import classes from './Modal.module.css';

const Backdrop = props => {
	return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = props => {
	return <Card className={classes.modal}>{props.children}</Card>;
};

const Modal = props => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClick} />,
				document.getElementById('backdrop')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				document.getElementById('overlaid')
			)}
		</Fragment>
	);
};

export default Modal;
