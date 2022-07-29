import React from 'react';
import { Link } from 'react-router-dom';
import CoinItem from './coinItem';
import './coins.css';
import Hero from './hero';

const Coins = (props) => {
	return (
		<div className="container">
			<Hero />
			<div>
				<div className="heading">
					<div className="bar">
						<p>#</p>
						<p className="coin-name">Coin</p>
						<p>Price</p>
						<p>24h</p>
						<p className="hide-mobile">Volume</p>
						<p className="hide-mobile">Mkt Cap</p>
					</div>
					<hr className="opacity"></hr>
					{props.coins &&
						props.coins.map((item, index) => {
							return (
								<Link to={`/coin/${item.id}`} element={<item />} key={item.id}>
									<CoinItem
										coins={item}
										color={index % 2 ? '#F9FAF9' : '#ffffff'}
									/>
								</Link>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Coins;
