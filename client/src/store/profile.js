import { observable, computed, action, runInAction } from 'mobx';
import axios from 'axios';

const capitalize = s => s[0].toUpperCase() + s.slice(1);

export default class ProfileStore {
	@observable profile = {};
	@observable hasLoaded = false;

	@action
	fetchProfile() {
		axios('/api/profile')
			.then(res => {
				console.log(res.data);

				runInAction(() => {
					this.profile = res.data.profile;
					this.hasLoaded = true;
				});
			})
			.catch(err => console.log(err));
	}

	@computed
	get fullname() {
		if (!this.hasLoaded) {
			return '';
		}
		const name = this.profile.name || {};
		return [name.first, name.last].map(capitalize).join(' ');
	}
}
