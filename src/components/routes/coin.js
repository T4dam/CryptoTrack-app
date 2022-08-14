import React from 'react';
import './coindetail.css';
import DOMPurify from 'dompurify';
import Cryptochart from '../chart/cryptochart';
import { MdArrowDropDown } from 'react-icons/md';
import { IoMdArrowDropup } from 'react-icons/io';

const CoinDetailPage = ({ coin }) => {
	const { detail } = coin;
	console.log(detail);

	const renderData = () => {
		if (detail) {
			const data = [
				{
					hour: detail.market_data.price_change_percentage_1h_in_currency.eur,
				},
				{
					day: detail.market_data.price_change_percentage_24h_in_currency.eur,
				},
				{
					week: detail.market_data.price_change_percentage_7d_in_currency.eur,
				},
				{
					twoWeeks:
						detail.market_data.price_change_percentage_14d_in_currency.eur,
				},
				{
					month: detail.market_data.price_change_percentage_30d_in_currency.eur,
				},
				{
					year: detail.market_data.price_change_percentage_1y_in_currency.eur,
				},
			];
			return (
				<div>
					<div className="coin-container">
						<div className="content background">
							<h1 className="headertext">{detail.name}</h1>
						</div>
						<div className="content">
							<div className="rank">
								<span className="rank-btn">
									Rank # {detail.market_cap_rank}
								</span>
							</div>
							<div className="info">
								<div className="coin-heading headertext">
									{detail.image ? (
										<img src={detail.image.small} alt="" />
									) : null}
									<p>{detail.name}</p>
									{detail.symbol ? (
										<p>{detail.symbol.toUpperCase()}/EUR</p>
									) : null}
								</div>
								<div className="coin-price headertext">
									{detail.market_data?.current_price ? (
										<h1>
											{detail.market_data.current_price.eur.toLocaleString()} €
										</h1>
									) : null}
								</div>
							</div>
						</div>
						<div className="content">
							<Cryptochart />
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
											{data.map((item) => {
												console.log({ mapas: item.day });
												return (
													<td
														className={
															Number(Object.keys(item)[1]) < 0 ? 'red' : 'green'
														}
													>
														{data.forEach((x) => {
															console.log({ x: x });
															return Number(x);
														}) < 0 ? (
															<MdArrowDropDown />
														) : (
															<IoMdArrowDropup />
														)}
														{Number(item.hour).toFixed(1)} %
													</td>
												);
											})}
										</tr>
										<tr>
											<td
												className={
													detail.market_data
														.price_change_percentage_1h_in_currency.eur < 0
														? 'red'
														: 'green'
												}
											>
												{detail.market_data
													.price_change_percentage_1h_in_currency.eur < 0 ? (
													<MdArrowDropDown />
												) : (
													<IoMdArrowDropup />
												)}
												{detail.market_data.price_change_percentage_1h_in_currency.eur.toFixed(
													1,
												)}{' '}
												%
											</td>
											<td
												className={
													detail.market_data
														.price_change_percentage_24h_in_currency.eur < 0
														? 'red'
														: 'green'
												}
											>
												{detail.market_data
													.price_change_percentage_24h_in_currency.eur < 0 ? (
													<MdArrowDropDown />
												) : (
													<IoMdArrowDropup />
												)}
												{detail.market_data.price_change_percentage_24h_in_currency.eur.toFixed(
													1,
												)}{' '}
												%
											</td>
											<td
												className={
													detail.market_data
														.price_change_percentage_7d_in_currency.eur < 0
														? 'red'
														: 'green'
												}
											>
												{detail.market_data
													.price_change_percentage_7d_in_currency.eur < 0 ? (
													<MdArrowDropDown />
												) : (
													<IoMdArrowDropup />
												)}
												{detail.market_data.price_change_percentage_7d_in_currency.eur.toFixed(
													1,
												)}{' '}
												%
											</td>
											<td
												className={
													detail.market_data
														.price_change_percentage_14d_in_currency.eur < 0
														? 'red'
														: 'green'
												}
											>
												{detail.market_data
													.price_change_percentage_14d_in_currency.eur < 0 ? (
													<MdArrowDropDown />
												) : (
													<IoMdArrowDropup />
												)}
												{detail.market_data.price_change_percentage_14d_in_currency.eur.toFixed(
													1,
												)}{' '}
												%
											</td>
											<td
												className={
													detail.market_data
														.price_change_percentage_30d_in_currency.eur < 0
														? 'red'
														: 'green'
												}
											>
												{detail.market_data
													.price_change_percentage_30d_in_currency.eur < 0 ? (
													<MdArrowDropDown />
												) : (
													<IoMdArrowDropup />
												)}
												{detail.market_data.price_change_percentage_30d_in_currency.eur.toFixed(
													1,
												)}{' '}
												%
											</td>
											<td
												className={
													detail.market_data
														.price_change_percentage_1y_in_currency.eur < 0
														? 'red'
														: 'green'
												}
											>
												{detail.market_data
													.price_change_percentage_1y_in_currency.eur < 0 ? (
													<MdArrowDropDown />
												) : (
													<IoMdArrowDropup />
												)}
												{detail.market_data.price_change_percentage_1y_in_currency.eur.toFixed(
													1,
												)}{' '}
												%
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
									className="cryptotext"
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
