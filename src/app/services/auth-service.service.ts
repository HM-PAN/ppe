import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  token;
  decoded;
  private host: string = "http://localhost:8007";
  constructor(private http: HttpClient) {}
  login(user) {
    return this.http.post(this.host + "/login", user);
  }
  saveToken(jwt: string) {
    localStorage.setItem("token", jwt);
    this.token = jwt;
    this.decoded = jwt_decode(this.token);
  }
}
