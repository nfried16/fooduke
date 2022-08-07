import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../assets/duke.svg';

const NavBar = props => {

	return (
		<div style={{ position: 'relative', height: '10vh', width: '100%', background: '#30C5FF', display: 'flex', alignItems: 'center'}}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '20%' }}>
                Fooduke
                <span className='home-button'>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: '6vh', width: '6vh', display: 'inline-block' }}
                    />
                </span>
            </div>
		</div>
	);
}

export default withRouter(NavBar);