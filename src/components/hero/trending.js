import React from 'react';
import './hero.css';

const Trending = ({ coins }) => {
	console.log(coins.coins);
	return (
		<div>
			<div>
				<h3>Trending</h3>
			</div>
			<div>
				{coins.coins &&
					coins.coins.map((item) => {
						// prettier-ignore
						return <div key={item.item.id}>{item.item.name}</div>
					})}
			</div>
		</div>
	);
};

export default Trending;
