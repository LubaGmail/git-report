import * as request from 'request';
import { User } from './User';

export class GitService {
    options: any = {
        headers: {
            "User-Agent": 'request'
        }
    };
    getUsers () {
        request.get('https://api.github.com/users', this.options, (error: any, response: any, body: any) => {
            console.log("error", error);
            console.log("response", response);
            console.log("body", body);
        });
    }
    getUser (userName:string)  {
        let user:User ;
        request.get('https://api.github.com/users/'+ userName, this.options, (error: any, response: any, body: any) => {
            console.log("error", error);
            console.log("response", response);
            console.log("body", body);

            user = new User(JSON.parse(body));
            console.log("user", user);
        });
        
    }

}