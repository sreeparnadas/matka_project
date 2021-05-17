import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import { faUserEdit, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import {CommonService, VariableSettings} from '../../services/common.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  variableSettings: VariableSettings;

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
  constructor(private authService: AuthService,  private commonService: CommonService) { }

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

    this.variableSettings = this.commonService.getVariableSettings();
    this.commonService.getVariableSettingsListener().subscribe((response: VariableSettings) => {
      this.variableSettings = response;
    });

  } // end of ngOnInit

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



  onMatSliderInputChange($event: any) {
    let value = 'none';
    // tslint:disable-next-line:triple-equals
    if ($event.value == 1){
      value = 'dark-mode';
    }
    // tslint:disable-next-line:triple-equals
    if ($event.value == 2){
      value = 'green-mode';
    }
    // tslint:disable-next-line:triple-equals
    if ($event.value == 3){
      value = 'color-mode';
    }
    this.variableSettings.colorScheme = value;
    this.commonService.updateVariableSettings(this.variableSettings);
  }
}
