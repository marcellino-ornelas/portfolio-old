import { observable, computed, action, runInAction } from 'mobx';
import axios from 'axios';

export default class SessionStore {
	@observable signedIn = false;
	@observable currentLocation = window.location.pathname;

	constructor() {
		this.isSignedIn();
	}

	@action
	isSignedIn() {
		axios('/api/auth/status').then(res => {
			if (res.data.signedIn) {
				runInAction(() => {
					console.log('welcome memeber');
					this.signedIn = true;
				});
			}
		});
	}
}
