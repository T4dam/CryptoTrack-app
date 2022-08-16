import React from 'react';
import { RiCoinsFill } from 'react-icons/ri';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Link to="/">
			<div>
				<div className="navbar mb-2">
					<span className="size">
						<RiCoinsFill className="icon" />
					</span>
					<h1 className="">
						Coin<span className="color">Track</span>
						<div
							style={{ display: 'flex', alignItems: 'center' }}
							className="subtextsize"
						>
							<img
								style={{ width: '15px', height: '15px' }}
								src="/coingecko.png"
								alt="coingecko logo"
							/>
							<span>Powered by Coingecko</span>
						</div>
					</h1>
				</div>
			</div>
		</Link>
	);
};

export default Navbar;
