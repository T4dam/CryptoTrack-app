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
					</h1>
				</div>
			</div>
		</Link>
	);
};

export default Navbar;
