import React, { Component } from 'react';
import classnames from 'classnames';
import { Link as NavLink } from 'react-router-dom';

/**
 * Components
 */

import Background from '@lino/components/Background/';

const HomeInspire = props => {
	return (
		<div className="home-inspire">
			<Background img="/images/skys-the-limit.jpg" center={false}>
				<div className="center-align">
					<h3 className="home-inspire__headline animate-reveal animate-first">
						The Sky is the Limit
					</h3>
					<p className="home-inspire__slogan animate-reveal animate-second">
						Have a business? Have an idea that might grow? Get your dreams to
						come to life and build a website
					</p>
					<div className="container home-inspire__link animate-reveal animate-third">
						<NavLink to="/contact-me" className="hover hover-inward">
							Contact Me
						</NavLink>
					</div>
				</div>
			</Background>
		</div>
	);
};

export default HomeInspire;
