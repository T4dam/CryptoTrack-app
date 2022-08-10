import React, { useState, useEffect } from 'react';
import './coin.css';
import DOMPurify from 'dompurify';

const CoinDetailPage = ({ coin }) => {
	const { detail } = coin;
	console.log(detail);
	const renderData = () => {
		if (detail) {
			return (
				<div>
					<div className="coin-container">
						<div className="content">
							<h1>{detail.name}</h1>
						</div>
						<div className="content">
							<div className="rank">
								<span className="rank-btn">
									Rank # {detail.market_cap_rank}
								</span>
							</div>
							<div className="info">
								<div className="coin-heading">
									{detail.image ? (
										<img src={detail.image.small} alt="" />
									) : null}
									<p>{detail.name}</p>
									{detail.symbol ? (
										<p>{detail.symbol.toUpperCase()}/EUR</p>
									) : null}
								</div>
								<div className="coin-price">
									{detail.market_data?.current_price ? (
										<h1>
											{detail.market_data.current_price.eur.toLocaleString()} €
										</h1>
									) : null}
								</div>
							</div>
						</div>
						<div className="hide-mobile">
							<div className="content">
								<table>
									<thead>
										<tr>
											<th>1h</th>
											<th>24h</th>
											<th>7d</th>
											<th>14d</th>
											<th>30d</th>
											<th>1yr</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												{detail.market_data
													?.price_change_percentage_1h_in_currency ? (
													detail.market_data
														.price_change_percentage_1h_in_currency < 0 ? (
														<p className="red">
															{detail.market_data.price_change_percentage_1h_in_currency.eur.toFixed(
																1,
															)}
															%
														</p>
													) : (
														<p className="green">
															{detail.market_data.price_change_percentage_1h_in_currency.eur.toFixed(
																1,
															)}
															%
														</p>
													)
												) : null}
											</td>
											<td>
												{detail.market_data
													?.price_change_percentage_24h_in_currency ? (
													detail.market_data
														.price_change_percentage_24h_in_currency.eur < 0 ? (
														<p className="red">
															{detail.market_data.price_change_percentage_24h_in_currency.eur.toFixed(
																1,
															)}
															%
														</p>
													) : (
														<p className="green">
															{detail.market_data.price_change_percentage_24h_in_currency.eur.toFixed(
																1,
															)}
															%
														</p>
													)
												) : null}
											</td>
											<td>
												{detail.market_data
													?.price_change_percentage_7d_in_currency ? (
													detail.market_data
														.price_change_percentage_7d_in_currency.eur < 0 ? (
														<p className="red">
															{detail.market_data.price_change_percentage_7d_in_currency.eur.toFixed(
																1,
															)}
															%
														</p>
													) : (
														<p className="green">
															{detail.market_data.price_change_percentage_7d_in_currency.eur.toFixed(
																1,
															)}
															%
														</p>
													)
												) : null}
											</td>
											<td>
												{detail.market_data
													?.price_change_percentage_14d_in_currency ? (
													detail.market_data
														.price_change_percentage_14d_in_currency.eur < 0 ? (
														<p className="red">
															{detail.market_data.price_change_percentage_14d_in_currency.eur.toFixed(
																1,
															)}
															%
														</p>
													) : (
														<p className="green">
															{detail.market_data.price_change_percentage_14d_in_currency.eur.toFixed(
																1,
															)}
															%
														</p>
													)
												) : null}
											</td>
											<td>
												{detail.market_data
													?.price_change_percentage_30d_in_currency ? (
													detail.market_data
														.price_change_percentage_30d_in_currency.eur < 0 ? (
														<p className="red">
															{detail.market_data.price_change_percentage_30d_in_currency.eur.toFixed(
																1,
															)}
															%
														</p>
													) : (
														<p className="green">
															{detail.market_data.price_change_percentage_30d_in_currency.eur.toFixed(
																1,
															)}
															%
														</p>
													)
												) : null}
											</td>
											<td>
												{detail.market_data
													?.price_change_percentage_30d_in_currency ? (
													detail.market_data
														.price_change_percentage_1y_in_currency.usd < 0 ? (
														<p className="red">
															{detail.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
																1,
															)}
															%
														</p>
													) : (
														<p className="green">
															{detail.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
																1,
															)}
															%
														</p>
													)
												) : null}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="content">
							<div className="stats">
								<div className="left">
									<div className="row">
										<h4>24 Hour Low</h4>
										{detail.market_data ? (
											<p>{detail.market_data.low_24h.eur.toLocaleString()}€</p>
										) : null}
									</div>
									<div className="row">
										<h4>24 Hour High</h4>
										{detail.market_data ? (
											<p>{detail.market_data.high_24h.eur.toLocaleString()}€</p>
										) : null}
									</div>
								</div>

								<div className="right">
									<div className="row">
										<h4>Market Cap</h4>
										{detail.market_data ? (
											<p>
												{detail.market_data.market_cap.eur.toLocaleString()}€
											</p>
										) : null}
									</div>
									<div className="row">
										<h4>Circulating supply</h4>
										{detail.market_data ? (
											<p>
												{detail.market_data.circulating_supply.toLocaleString()}
												€
											</p>
										) : null}
									</div>
								</div>
							</div>
						</div>
						<div className="content">
							<div className="about">
								<h3 className="aboutstyle">About</h3>
								<p
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(
											detail.description ? detail.description.en : '',
										),
									}}
								></p>
							</div>
						</div>
					</div>
				</div>
			);
		}
	};

	return <div>{renderData()}</div>;
};
export default CoinDetailPage;
