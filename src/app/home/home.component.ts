import { Component, OnInit } from "@angular/core";
import { WebScrapingService } from "../services/web-scraping.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public webData = [];
  constructor(private _WebScrapingService: WebScrapingService) {}

  ngOnInit() {
    this._WebScrapingService
      .getData()
      .subscribe((data) => (this.webData = data));
  }
}
