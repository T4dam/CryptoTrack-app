import React from 'react';
import './hero.css';

const CoinCard = ({ number, image, name, ticker, price }) => {
	return (
		// <Link to={`/coin/${item.id}`} key={item.item.id}>
		<div className="coin-wrapper coinshover padd text-style ">
			<div className="grid ">
				<div className="center hide-mobile">{number}</div>
				<img className="center scale" src={image} alt="" />
				<div className="center">{name}</div>
				<div className="center opacity hide-mobile">{ticker}</div>
			</div>
			<div className="flexSide">
				{price} <span className="padding-left">₿</span>
			</div>
		</div>
		// </Link>
	);
};

export default CoinCard;
