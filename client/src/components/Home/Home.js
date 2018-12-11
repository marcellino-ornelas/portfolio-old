import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import Background from '../Background/';
import { observer, inject } from 'mobx-react';

const Home = inject('userStore')(
	observer(props => {
		const userStore = props.userStore;
		return (
			<div className="root home">
				<Background img="/images/computer.jpg">
					{!userStore.hasLoaded ? (
						<div>Loading...</div>
					) : (
						<React.Fragment>
							<h1 className="header">{userStore.fullname}</h1>
							<h4>{userStore.profile.caption}</h4>
						</React.Fragment>
					)}
				</Background>
				<div className="section">
					<div className="container">
						<div className="valign contact-me">
							<div className="contact-me-intro">
								<h3> Want your own website?</h3>
								<p className="flow-text">
									Get your dreams to come to life and contact me today for your
									free quote
								</p>
							</div>
							<div className="center-align container">
								<NavLink
									to="/contact-us"
									className="btn waves-effect waves-light"
								>
									Contact Me
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	})
);

export default Home;
