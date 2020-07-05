import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Offres } from "../models/offres";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OffresService {
  constructor(private http: HttpClient) {}
  public getOffres() {
    return this.http.get("http://localhost:8005/offre/get");
  }
}
