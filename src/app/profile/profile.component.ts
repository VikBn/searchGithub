import {Component} from '@angular/core';
import {GithubService} from "../shared/github.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public user: any;
  public repos: Array<any>;
  public searchString: string = '';
  minLength: number = 3;
  isLoaded: boolean = false;

  constructor(private gitService: GithubService) {
    this.user = false;
  }

  searchUser() {

      this.gitService.getUser(this.searchString)
        .subscribe(resp => {
        this.user = resp;
        this.isLoaded = true;
      });

      this.gitService.getRepos(this.searchString)
        .subscribe(resp => {
          this.repos = resp;
        });
  }

}
