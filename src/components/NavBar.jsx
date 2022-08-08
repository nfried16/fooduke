import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../assets/duke.svg';
import "./NavBar.scss";

const NavBar = props => {

	return (
		<div className="navBar" style={{ position: 'relative', height: '10vh', width: '100%', display: 'flex', alignItems: 'center'}}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: '4vw' }}>
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