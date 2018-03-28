import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubService{
    githubUrl: string = 'https://api.github.com/users/';

    constructor(private http: Http){

    }

    getInfo(): any{
        return this.http.get(this.githubUrl + 'angular')
            .map(response => response.json())
            .toPromise();
    }

    getUserInfo(name: string): any{
        return this.http.get(this.githubUrl + name)
            .map(response => response.json())
            .toPromise();
    }
}