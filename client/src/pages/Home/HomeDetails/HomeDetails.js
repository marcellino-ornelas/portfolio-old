import React, { Component } from 'react';

/**
 * Components
 */

import { Pillars, Pillar } from '@lino/components/Pillars/';

const HomeDetails = () => (
	<div className="section container home-details">
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
);

export default HomeDetails;
