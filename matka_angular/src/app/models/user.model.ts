

export class User{
  // tslint:disable-next-line:variable-name
  constructor(public id: number,
              public personName: string,
              // tslint:disable-next-line:variable-name
              private _authKey: string,
              public personTypeId: number
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
     return this.personTypeId == 1;
  }
  get isManager(){
    // tslint:disable-next-line:triple-equals
    return this.personTypeId == 2;
  }
  get isWorkshopManager(){
    // tslint:disable-next-line:triple-equals
    return this.personTypeId == 3;
  }
  get isSalesManager(){
    // tslint:disable-next-line:triple-equals
    return this.personTypeId == 4;
  }
  get isAccountManager(){
    // tslint:disable-next-line:triple-equals
    return this.personTypeId == 5;
  }
  get isOfficeStaff(){
    // tslint:disable-next-line:triple-equals
    return this.personTypeId == 6;
  }
  get isAgent(){
    // tslint:disable-next-line:triple-equals
    return this.personTypeId == 7;
  }
  get isWorker(){
    // tslint:disable-next-line:triple-equals
    return this.personTypeId == 8;
  }
  get isDeveloper(){
    // tslint:disable-next-line:triple-equals
    return this.personTypeId == 9;
  }
  get isCustomer(){
    // tslint:disable-next-line:triple-equals
    return this.personTypeId == 10;
  }
  get isKarigarh(){
    // tslint:disable-next-line:triple-equals
    return this.personTypeId == 11;
  }
}
