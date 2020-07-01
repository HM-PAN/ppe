import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../services/auth-service.service";
import { Router } from "@angular/router";
import { decode } from "punycode";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  nomUser;
  roleUser;
  mode: number = 0;
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {}
  onLogin(user) {
    console.log(user);
    this.authService.login(user).subscribe(
      (resp) => {
        console.log(resp);
        let jwt = resp.toString();
        // console.log(resp.headers.get("Authorization"));
        // console.log(user);
        this.authService.saveToken(jwt);
        console.log(this.authService.decoded.roles[0].authority);
        this.nomUser = this.authService.decoded.sub;
        this.roleUser = this.authService.decoded.roles[0].authority;
        // console.log(jwt);
        this.router.navigateByUrl("/home");
      },
      (error) => {
        this.mode = 1;
      }
    );
  }
}
