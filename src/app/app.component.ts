import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'This is the PROMISES app';
  username: string = 'angular';
  info = {};

  constructor(private githubService: GithubService){

  }

  ngOnInit(){
    /*
    this.githubService.getInfo()
      .then(result => this.info = result)
      .catch(error => console.log(error));
      */
  }

  simplest(){
    console.log('Start simplest()');

    let myPromise = new Promise(function(resolve, reject){

      console.log('My Promise is executing...');
      setTimeout(() => {
        console.log('Resolving my Promise...');
        resolve('Successful result');
      }, 2000);

    });

    myPromise.then(result => console.log('Promise resolve result: ' + result));

    console.log('End simplest()');
  }

  searchUser(username){
    this.githubService.getUserInfo(username)
      .then(result => this.info = result)
      .catch(error => console.log(error));
  }
}
