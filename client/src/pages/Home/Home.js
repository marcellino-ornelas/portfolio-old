import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

/**
 * Components
 */
import Background from '@lino/components/Background/';

/*
 * Sections
 */
import HomeDetails from './HomeDetails';
import HomeInspire from './HomeInspire';

const Home = inject('userStore')(
	observer(props => {
		const userStore = props.userStore;
		return (
			<div className="root home">
				<Background img="/images/computer.jpg" className="home-intro">
					{!userStore.hasLoaded ? (
						<div>Loading...</div>
					) : (
						<div className="home-intro__details">
							<h1 className="home-intro__name">{userStore.fullname}</h1>
							<h2 className="home-intro__role">{userStore.profile.caption}</h2>
						</div>
					)}
				</Background>
				<HomeDetails />
				<HomeInspire />
			</div>
		);
	})
);

/*
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
*/
export default Home;
