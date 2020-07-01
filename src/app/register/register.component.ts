import { Component, OnInit } from "@angular/core";
import { RegisterService } from "../services/register.service";
import { CandidatElastic } from "../models/candidat-elactic";
import { Candidat } from "../models/candidat";
import { CrudService } from "../services/crud.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  getcandidat;
  candidatE: CandidatElastic = {
    username: "",
    password: "",
    repassword: "",
  };
  candidat: Candidat = {
    id: null,
    nom: "",
    prenom: "",
    email: "",
  };

  constructor(private http: RegisterService, private crudsevice: CrudService) {}
  add(value) {
    console.log(value);
    console.log(this.candidatE);

    this.http.addCandidat(this.candidatE).subscribe(
      (data) => console.log("data", data),
      (error) => console.log(error)
    );
    //add to the second database
    this.candidat.id = this.getcandidat.length;
    this.http.addC(this.candidat).subscribe(
      (data) => console.log("data", data),
      (error) => console.log(error)
    );
  }
  get() {
    this.crudsevice.getAll("candidat/get").subscribe((data) => {
      console.log("data", data);
      this.getcandidat = data.content;
      console.log(this.getcandidat.length);
    });
  }
  /* addCandidatToElastic(value) {
    this.candidatE = new CandidatElastic(
      value.nom,
      value.password,
      value.repassword
    );
    this.http.addCandidatToElastic(this.candidatE).subscribe();
  }*/
  ngOnInit() {
    this.get();
  }
}
