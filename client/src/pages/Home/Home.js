import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

/**
 * Components
 */
import Background from '@lino/components/Background/';
import { Pillars, Pillar } from '@lino/components/Pillars/';

const Home = inject('userStore')(
	observer(props => {
		const userStore = props.userStore;
		return (
			<div className="root home">
				<Background img="/images/computer.jpg">
					{!userStore.hasLoaded ? (
						<div>Loading...</div>
					) : (
						<div className="home-intro">
							<h1 className="home-intro__name">{userStore.fullname}</h1>
							<h2 className="home-intro__role">{userStore.profile.caption}</h2>
						</div>
					)}
				</Background>
				<div className="section container">
					<Pillars>
						<Pillar
							icon="graduation-cap"
							title="Experince"
							description="Graduate of Full Stack Web Developer courses from Hack Reactor and General Assembly"
						/>
						<Pillar
							icon="code"
							title="Quality"
							description="Build fast, reliable web applications in the newest technologies"
						/>
						<Pillar
							icon="people-carry"
							title="Integrity"
							description="Customer needs always before our own. Your not just a client to us but our teammate."
						/>
					</Pillars>
				</div>
				<div className="section container">
					<div className="valign home-contact">
						<div className="home-contact__intro">
							<h3> Want your own website?</h3>
							<p>
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
		);
	})
);

export default Home;
