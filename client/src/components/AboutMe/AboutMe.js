import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import SocialLinks from '../SocialLinks/';
import { observer, inject } from 'mobx-react';

@inject('userStore')
@observer
class AboutMe extends Component {
	render() {
		const store = this.props.userStore;

		return (
			<div className="about-me row">
				<div className="col s12 m12 l3">
					<div className="center-align section">
						<img
							src="/images/portrait.jpg"
							alt=""
							className="profile-pic circle"
						/>
						<h6 className="profile-name">{store.fullname}</h6>
					</div>
					<ul className="collection">
						<a href="/Resume.pdf" className="collection-item" target="_blank">
							Resume
						</a>
						<a href="/Resume.pdf" className="collection-item" download>
							Download Resume
						</a>
						<NavLink to="/contact-me" className="collection-item">
							Contact Me
						</NavLink>
					</ul>
					<div className="center-align">
						<SocialLinks profile={store.profile} />
					</div>
				</div>
				<div className="col s12 m12 l9">
					<div className="row">
						<div className="fx header">
							<h3>{store.fullname}</h3>
							{/*<SocialLinks profile={this.props.profile} />*/}
						</div>
					</div>
					<div className="divider" />
					<div className="row">
						<div className="s12">
							<p className="flow-text">{store.profile.description}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutMe;
