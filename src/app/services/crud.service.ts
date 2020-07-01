import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  host = "http://localhost:8005/";
  constructor(private http: HttpClient) {}
  getAll(url) {
    return this.http.get(this.host + url);
  }
  add(obj, url) {
    return this.http.post(this.host + url, obj);
  }
  delete(obj, url) {
    return this.http.delete(this.host + url, obj);
  }
  update(url, obj) {
    return this.http.put(this.host + url, obj);
  }
}
