import React from 'react';
import { Link } from 'react-router-dom';
// import CoinItem from './coinItem';
import './coins.css';
import Hero from './hero';
import { MdArrowDropDown } from 'react-icons/md';
import { IoMdArrowDropup } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Cryptochartsmall from './chart/cryptoChartSmall';

const Coins = (props) => {
	const navigate = useNavigate();
	const goRouteId = (item) => {
		navigate(`/coin/${item.id}`);
	};
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
					<table cellspacing="0" className="fullwidth">
						<thead>
							<tr>
								<th>#</th>
								<th>Coin</th>
								<th>Price</th>
								<th>24h</th>
								<th className="hide-mobile">Volume (24h)</th>
								<th className="hide-mobile">Market Cap</th>
								<th className="hide-mobile">Last 24 hours</th>
							</tr>
						</thead>
						<tbody>
							{props.coins &&
								props.coins.map((item) => {
									return (
										// <Link
										// 	to={`/coin/${item.id}`}
										// 	element={<item />}
										// 	key={item.id}
										// >
										<tr
											onClick={() => goRouteId(item)}
											key={item.id}
											className="maincoinhover"
										>
											<td>{item.market_cap_rank}</td>
											<td className="img-symbol">
												<img className="imgsize" src={item.image} alt="" />
												<p>{item.symbol.toUpperCase()}</p>
											</td>
											<td>{item.current_price.toLocaleString()} €</td>
											<td
												className={
													item.price_change_percentage_24h < 0 ? 'red' : 'green'
												}
											>
												{item.price_change_percentage_24h < 0 ? (
													<MdArrowDropDown />
												) : (
													<IoMdArrowDropup />
												)}
												{item.price_change_percentage_24h.toFixed(2)}
											</td>
											{/* {item.price_change_percentage_24h < 0 ? (
													<td className="red">
														{item.price_change_percentage_24h.toFixed(2)}
													</td>
												) : (
													<td className="green">
														{item.price_change_percentage_24h.toFixed(2)}
													</td>
												)} */}

											<td className="hide-mobile">
												{item.total_volume.toLocaleString()} €
											</td>
											<td className="hide-mobile">
												{item.market_cap.toLocaleString()} €
											</td>
											<td className="hide-mobile">
												<Cryptochartsmall item={item.id} />
											</td>
											{/* <CoinItem
													coins={item}
													rank=
													color={index % 2 ? '#F9FAF9' : '#ffffff'}
												/> */}
										</tr>
										// </Link>
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
