import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {from, interval, Observable, of, timer} from "rxjs";
import {filter, map, mergeMap, concatAll, mapTo } from "rxjs/operators";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: []
})
export class LoginPageComponent implements OnInit {

  constructor(public logServ: LoginService) { }


  ngOnInit(): void {
  }

  login() {
    window.location.href = `${this.logServ.SP_AUTH_EP}?client_id=${this.logServ.CLIENT_ID}&redirect_uri=${this.logServ.RER_AFTER_LOG}&scope=${this.logServ.SC_URL_PARAM}&response_type=token&show_dialog=true`
  }
}
