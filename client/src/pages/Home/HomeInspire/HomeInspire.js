import React, { Component } from 'react';
import classnames from 'classnames';
import { Link as NavLink } from 'react-router-dom';

/**
 * Components
 */

import Background from '@lino/components/Background/';

class HomeInspire extends Component {
	constructor(props) {
		super(props);

		this._inspireAnimationStartPoint = React.createRef();

		this.state = {
			inView: false
		};

		this.activateAnimationWhenInView = this.activateAnimationWhenInView.bind(
			this
		);

		window.addEventListener('scroll', this.activateAnimationWhenInView);
	}

	get inspireStartPoint() {
		return this._inspireAnimationStartPoint.current;
	}

	isInView() {
		var rect = this.inspireStartPoint.getBoundingClientRect();
		var elemTop = rect.top;
		var elemBottom = rect.bottom;
		const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
		return isVisible;
	}

	activateAnimationWhenInView() {
		if (this.isInView()) {
			window.removeEventListener('scroll', this.activateAnimationWhenInView);
			this.setState({ inView: true });
		}
	}

	render() {
		const inspireClasses = classnames('home-inspire', {
			active: this.state.inView
		});
		return (
			<div className={inspireClasses}>
				<Background img="/images/skys-the-limit.jpg" center={false}>
					<div className="center-align home-inspire__content">
						<h3 className="home-inspire__headline animate-reveal animate-first">
							The Sky is the Limit
						</h3>
						<p className="home-inspire__slogan animate-reveal animate-second">
							Have a business? Have an idea that might grow? Get your dreams to
							come to life and build a website
						</p>
						<div
							className="container home-inspire__link animate-reveal animate-third"
							ref={this._inspireAnimationStartPoint}
						>
							<NavLink to="/contact-me" className="hover hover-inward">
								Contact Me
							</NavLink>
						</div>
					</div>
				</Background>
			</div>
		);
	}
}

export default HomeInspire;
