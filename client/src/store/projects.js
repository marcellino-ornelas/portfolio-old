import { observable, computed, action, runInAction } from 'mobx';
import axios from 'axios';

export default class ProjectStore {
	@observable projects = [];

	@action
	fetchProjects() {
		axios('/api/projects')
			.then(res => {
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
