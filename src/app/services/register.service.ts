import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private ht: HttpClient) {}
  addCandidat(obj) {
    return this.ht.post("http://localhost:8007/register/addCandidat", obj);
  }
  /*addCandidatToElastic(obj) {
    return this.http.post("http://localhost:999/candidat/add", obj);
  }
  addRecruteur(obj) {
    return this.http.post("http://localhost:8001/register/add/recruteur", obj);
  }
  addRecruteurToElastic(obj) {
    return this.http.post("http://localhost:999/recruteur/add", obj);
  }*/
  addC(obj) {
    return this.ht.post("http://localhost:8005/candidat/add", obj);
  }
}
