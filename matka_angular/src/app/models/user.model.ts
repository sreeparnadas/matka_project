

export class User{
  // tslint:disable-next-line:variable-name
  constructor(public id: number,
              public userName: string,
              private _authKey: string,
              public userTypeId: number,
              public userTypeName: string
  ){}



  get authKey(){
    if (this._authKey){
      return this._authKey;
    }else {
      return null;
    }
  }
  get isAuthenticated(){
    if (this._authKey){
      return true;
    }else{
      return false;
    }
  }
  get isOwner(){
    // tslint:disable-next-line:triple-equals
     return this.userTypeId == 1;
  }
  get isManager(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 2;
  }
  get isWorkshopManager(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 3;
  }
  get isSalesManager(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 4;
  }
  get isAccountManager(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 5;
  }
  get isOfficeStaff(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 6;
  }
  get isAgent(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 7;
  }
  get isWorker(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 8;
  }
  get isDeveloper(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 9;
  }
  get isCustomer(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 10;
  }
  get isKarigarh(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 11;
  }
}
