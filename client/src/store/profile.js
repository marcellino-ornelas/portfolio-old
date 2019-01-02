import { observable, computed, action, runInAction } from 'mobx';
import axios from 'axios';

/**
 * Take a sting and makex first character upper case
 * @param  {String} s - single word
 * @return {String}   word capitalize
 */
const capitalize = s => s[0].toUpperCase() + s.slice(1);

export default class ProfileStore {
	@observable profile = {};
	@observable hasLoaded = false;

	@action
	fetchProfile() {
		axios('/api/profile')
			.then(res => {
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
