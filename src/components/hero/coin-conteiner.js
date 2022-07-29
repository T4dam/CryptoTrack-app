import React from 'react';
import './hero.css';
import CoinCard from './coin-card';

const CoinConteiner = ({ coins, number, title }) => {
	return (
		<div className="wrapper">
			<div className="title-flex">
				<h3>{title}</h3>
				<h3 className="opacity">Price/BTC</h3>
			</div>
			<div className="flex-map">
				{coins.coins &&
					coins.coins.slice(number).map((item) => {
						// prettier-ignore
						return (<>
                        <CoinCard key={item.item.id}

                        number={item.item.market_cap_rank}
                        image={item.item.small}
                        name={item.item.name}
                        ticker={item.item.symbol}
                        price={item.item.price_btc.toFixed(6)}
                        />
                        
                        
                        </>
                        )
					})}
			</div>
		</div>
	);
};

export default CoinConteiner;
