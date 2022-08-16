import React from 'react';
import './hero.css';
import CoinCard from './coin-card';
import { Link } from 'react-router-dom';
import { ImFire } from 'react-icons/im';

const CoinConteiner = ({ coins, number, title, startnumber, icon }) => {
	return (
		<div className="wrapper tablehead ">
			<table cellSpacing="0">
				<thead>
					<tr>
						<th className="title-flex text-style">
							<h3>
								<span style={{ paddingRight: '4px' }}>{icon}</span>
								{title}
							</h3>
							<h3 className="opacity">Price</h3>
						</th>
					</tr>
				</thead>
				<tbody>
					{/* <div className="mx"> */}
					{coins.coins &&
						coins.coins.slice(startnumber, number).map((item) => {
							// prettier-ignore
							return (<>
                        <Link to={`/coin/${item.item.id}`} key={item.item.id}>
							<CoinCard
							number={item.item.market_cap_rank}
							image={item.item.small}
							name={item.item.name}
							ticker={item.item.symbol}
							price={item.item.price_btc.toFixed(10)}
							/>
						</Link>
                        
                        
                        </>
                        )
						})}
					{/* </div> */}
				</tbody>
			</table>
		</div>
	);
};

export default CoinConteiner;
