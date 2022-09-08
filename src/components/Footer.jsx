import React from 'react';
import { withRouter } from 'react-router-dom';
import './Footer.scss';

const Footer = props => {

	return (
		<div style={{ height: '8vh', width: '100%', background: '#023188', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div 
				className='about'
				onClick={() => props.history.push('/about')}
			>
				About Us
			</div>
		</div>
	);
}

export default withRouter(Footer);