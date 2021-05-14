import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import { faUserEdit, faUserAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() deviceXs: boolean;
  userSub: Subscription;
  isAuthenticated = false;
  isAdmin = false;
  isDeveloper = false;
  isStockist = false;
  isTerminal = false;
  router: Router;
  faUserEdit = faUserEdit;
  faUserAlt = faUserAlt;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      if (user){
        this.isAuthenticated = user.isAuthenticated;
        this.isAdmin = user.isAdmin;
        this.isDeveloper = user.isDeveloper;
        this.isStockist = user.isStockist;
        this.isTerminal = user.isTerminal;
      }else{
        this.isAuthenticated = false;
        this.isAdmin = false;
        this.isDeveloper = false;
        this.isStockist = false;
        this.isTerminal = false;
      }
    });
    this.authService.autoLogin();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

  myStyle(){
    // return {'background-color': '#e83d44'};
    return {
      // 'background-color': 'rgba(255,0,0,' + (10 / 100) + ')',
      color: 'white !important',
      'background-color': 'rgba(251,254,255,0.8)'
    };
  }
}
