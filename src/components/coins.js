import React from 'react';
import { Link } from 'react-router-dom';
// import CoinItem from './coinItem';
import './coins.css';
import Hero from './hero';

const Coins = (props) => {
	return (
		<div className="container">
			<Hero />
			<div>
				<div className="tablehead">
					{/* <div className="bar">
						<p>#</p>
						<p className="coin-name">Coin</p>
						<p>Price</p>
						<p>24h</p>
						<p className="hide-mobile">Volume</p>
						<p className="hide-mobile">Mkt Cap</p>
					</div>
					<hr className="opacity"></hr> */}
					<table className="fullwidth">
						<thead>
							<tr>
								<th>#</th>
								<th>Coin</th>
								<th>Price</th>
								<th>24h</th>
								<th>Volume</th>
								<th>Mkt Cap</th>
							</tr>
						</thead>
						<hr />
						<tbody>
							{props.coins &&
								props.coins.map((item) => {
									return (
										<Link
											to={`/coin/${item.id}`}
											element={<item />}
											key={item.id}
										>
											<tr className="maincoinhover">
												<td>{item.market_cap_rank}</td>
												<td className="img-symbol">
													<img src={item.image} alt="" />
													<p>{item.symbol.toUpperCase()}</p>
												</td>
												<td>{item.current_price.toLocaleString()} €</td>
												{item.price_change_percentage_24h < 0 ? (
													<td className="red">
														{item.price_change_percentage_24h.toFixed(2)}
													</td>
												) : (
													<td className="green">
														{item.price_change_percentage_24h.toFixed(2)}
													</td>
												)}

												<td className="hide-mobile">
													{item.total_volume.toLocaleString()}
												</td>
												<td className="hide-mobile">
													{item.market_cap.toLocaleString()}
												</td>
												{/* <CoinItem
													coins={item}
													rank=
													color={index % 2 ? '#F9FAF9' : '#ffffff'}
												/> */}
											</tr>
										</Link>
									);
								})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Coins;
