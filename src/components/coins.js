import React from 'react';
import { Link } from 'react-router-dom';
import CoinItem from './coinItem';
import './coins.css';

const Coins = (props) => {
	return (
		<div className="container">
			<div>
				<div className="heading">
					<p>#</p>
					<p className="coin-name">Coin</p>
					<p>Price</p>
					<p>24h</p>
					<p className="hide-mobile">Volume</p>
					<p className="hide-mobile">Mkt Cap</p>
				</div>
			</div>
			{props.coins.map((item) => {
				return (
					<Link to={`/coin/${item.id}`} element={<item />} key={item.id}>
						<CoinItem coins={item} />
					</Link>
				);
			})}
		</div>
	);
};

export default Coins;
