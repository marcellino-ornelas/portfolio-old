import { observable, computed, action, runInAction } from 'mobx';
import axios from 'axios';

export default class UserStore {
    @observable profile = {};
    @observable projects = [];

    @action
    fetchProfile() {
        this.profile = {};
        this.projects = [];
        axios('/my-profile')
            .then(res => {
                console.log(res.data);

                runInAction(() => {
                    this.projects.replace(res.data.projects);
                    this.profile = res.data.profile;
                });
            })
            .catch(err => console.log(err));
    }
}
