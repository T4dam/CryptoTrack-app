import React from 'react';
import './hero.css';

const CoinCard = ({ number, image, name, ticker, price }) => {
	return (
		<div className="coin-wrapper">
			<div className="grid">
				<div className="center hide-mobile">{number}</div>
				<img className="center scale" src={image} alt="" />
				<div className="center">{name}</div>
				<div className="center opacity hide-mobile">{ticker}</div>
			</div>
			<div>{price}</div>
		</div>
	);
};

export default CoinCard;
