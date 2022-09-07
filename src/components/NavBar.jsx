import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../assets/duke_logo.svg';

const NavBar = props => {

	return (
		<div style={{ position: 'relative', height: '12.7vh', width: '100%', display: 'flex', alignItems: 'center'}}>
            <div style = {{height: '100%', width: '100%'}}>
                <div style = {{height: '50px', width: '100%'}}>

                </div>
                <div style = {{height: '57px', width: '100%', display: 'flex'}}>
                    <div style = {{width: '100%', height: '100%', background: '#023188'}}/>
                    <div className='lefttriangle'/>
                </div>
            </div>
            <div style = {{width: '410px', height: '107px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style = {{marginTop: '-2.5px'}}>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: '86px', width: '107px', display: 'inline-block' }}
                        />
                    </div>
                </div>
            <div style = {{height: '100%', width: '100%'}}>
                <div style = {{height: '50px', width: '100%'}}>

                </div>
                <div style = {{height: '57px', width: '100%', display: 'flex'}}>
                    <div className='righttriangle'/>
                    <div style = {{width: '100%', height: '100%', background: '#023188'}}/>
                </div>
            </div>

            {/* <div style = {{height: '57px', width: '100%', display: 'flex'}}>
                <div style = {{width: '100%', height: '100%', background: '#023188'}}/>
                <div className='lefttriangle'/>
                <div style = {{width: '435px', height: '57px', display: 'flex', justifyContent: 'center'}}>
                    <div className='home-button'>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: '12vh', width: '12vh', display: 'inline-block' }}
                        />
                    </div>
                </div>
                <div className='righttriangle'/>
                <div style = {{width: '100%', height: '100%', background: '#023188'}}/>
            </div> */}
		</div>
	);
}

export default withRouter(NavBar);