

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
  get isAdmin(){
    // tslint:disable-next-line:triple-equals
     return this.userTypeId == 1;
  }
  get isDeveloper(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 2;
  }
  get isStockist(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 3;
  }
  get isTerminal(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 4;
  }
}
