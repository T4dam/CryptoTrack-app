import React from 'react';
import './coins.css';

const Skeleton = () => {
	return (
		<div
			className="container loading"
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyConent: 'center',
				gap: '1rem',
				border: '1px solid rgba(255, 255, 255, 0.18);',
				borderRadius: '10px',
			}}
		>
			<div className="card loading">
				<div className="description"></div>
			</div>
			<div className="card loading">
				<div className="description"></div>
			</div>
			<div className="card loading">
				<div className="description "></div>
			</div>
			<div className="card loading">
				<div className="description"></div>
			</div>
			<div className="card loading">
				<div className="description"></div>
			</div>
		</div>
	);
};

export default Skeleton;
