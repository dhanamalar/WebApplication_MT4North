import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string>;
  public firstName: Observable<string>;

  constructor(private authorizeService: AuthorizeService, private http: HttpClient) { }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
    this.firstName = this.authorizeService.getUser().pipe(map(u => { console.log(u); return u && u.firstName; }));

   this.authorizeService.getUser().pipe(map(u => u && u.name))
    console.log('user name: ', this.userName);
    this.authorizeService.getUser()
      .subscribe(data => {
        console.log(data); //You will get all your user related information in this field
      });

    /*
    this.http.get<string[]>(endpoint).
      subscribe(result => {
        this.currentRole = result[0];
        console.log("this.currentRole ", this.currentRole); //prints "admin"
        this.IsAdmin == result.includes("admin");
        console.log("this.IsAdmin", this.IsAdmin); //prints "undefined"
      }, error => console.error(error));
      */
  }
}
