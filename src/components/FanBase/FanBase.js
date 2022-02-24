import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import './FanBase.css';

function FanBase(props) {
	return (
		<div className='box'>
			<Link className='container' to='/fanbase'>
				<h1 id='fan' className='animate__animated animate__bounceInUp'>
					Fan
				</h1>
				<h1
					id='base'
					className='animate__animated animate__slideInRight animate__slow'>
					Base
				</h1>
			</Link>
		</div>
	);
}

export default FanBase;
