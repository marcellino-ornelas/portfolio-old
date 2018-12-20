import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

/**
 * Components
 */
import Background from '@lino/components/Background/';

const Home = inject('userStore')(
	observer(props => {
		const userStore = props.userStore;
		return (
			<div className="root home">
				<Background img="/images/computer.jpg">
					{!userStore.hasLoaded ? (
						<div>Loading...</div>
					) : (
						<div className="home-into">
							<h1 className="home-into__name">{userStore.fullname}</h1>
							<h2 className="home-into__role">{userStore.profile.caption}</h2>
						</div>
					)}
				</Background>
				<div className="section">
					<div className="container">
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
			</div>
		);
	})
);

export default Home;

/*
<h1 className="home-into__name">
<span className="code__keyword">let </span>
{userStore.fullname}
<span className="code__operator">: </span>
<span className="code__keyword">user </span>
<span className="code__operator"> =</span> &#123;
</h1>
<h2 className="home-into__role code__string">
<span className="code__string">'role'</span>
<span className="code__operator">:</span> '{
	userStore.profile.caption
}'
</h2>
<h1>&#125;</h1>

 */
