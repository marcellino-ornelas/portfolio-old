import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

/**
 * Components
 */
import SocialLinks from '@lino/components/SocialLinks/';

@inject('userStore')
@observer
class AboutMe extends Component {
	render() {
		const { fullname, profile } = this.props.userStore;
		const resume = profile.resume || {};

		return (
			<div className="about-me row">
				<div className="col s12 m12 l3">
					<div className="center-align section">
						<img
							src="/images/portrait.jpg"
							alt=""
							className="profile-pic circle"
						/>
						<h6 className="profile-name">{fullname}</h6>
					</div>
					<ul className="collection">
						<a href={resume.url} className="collection-item" target="_blank">
							Resume
						</a>
						<NavLink to="/contact-me" className="collection-item">
							Contact Me
						</NavLink>
					</ul>
					<div className="center-align">
						<SocialLinks profile={profile} />
					</div>
				</div>
				<div className="col s12 m12 l9">
					<div className="row">
						<div className="fx header">
							<h3>{fullname}</h3>
							{/*<SocialLinks profile={this.props.profile} />*/}
						</div>
					</div>
					<div className="divider" />
					<div className="row">
						<div className="s12">
							<p className="flow-text">{profile.description}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutMe;
