import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthServiceService } from "./services/auth-service.service";
import { HomeComponent } from "./home/home.component";
import { WebScrapingService } from "./services/web-scraping.service";
import { MaterialModule } from "./material/material.module";
import { LoginRComponent } from "./login/login-r/login-r.component";
import { OffresComponent } from "./offres/offres.component";
import { CompteRecruteurComponent } from "./compte-recruteur/compte-recruteur.component";
import { CompteCandidatComponent } from "./compte-candidat/compte-candidat.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoginRComponent,
    OffresComponent,
    CompteRecruteurComponent,
    CompteCandidatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [AuthServiceService, WebScrapingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
