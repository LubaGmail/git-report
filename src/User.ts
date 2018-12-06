import {Repo} from './Repo';

export class User {
    id: string = "";
    login: string = "";
    name: string ="";
    url: string = "";
    followers: number = 0;

    repos?: Repo[] = [];

    constructor (responseBody:any) {
        this.id = responseBody.id;
        this.login = responseBody.login;
        this.name = responseBody.name;
        this.url = responseBody.url;
        this.followers = responseBody.followers;
    }
}