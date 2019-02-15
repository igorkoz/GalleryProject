import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      if (this.auth.authenticate(this.username, this.password)) {
        this.router.navigateByUrl("/images");
      }

      else {
        this.errorMessage = "Authentication Failed";
      }
    }
    else {
      this.errorMessage = "Form Data Invalid";
    }
  }

}
