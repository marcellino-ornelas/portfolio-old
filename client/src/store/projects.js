import { observable, computed, action, runInAction } from 'mobx';
import axios from 'axios';

// const capitalize = s => s[0].toUpperCase() + s.slice(1);

export default class ProjectStore {
	@observable projects = [];

	@action
	fetchProjects() {
		axios('/api/projects')
			.then(res => {
				console.log(res.data);

				runInAction(() => {
					this.projects.replace(res.data.projects);
				});
			})
			.catch(err => console.log(err));
	}

	isEmpty() {
		return !this.projects.length;
	}
}
