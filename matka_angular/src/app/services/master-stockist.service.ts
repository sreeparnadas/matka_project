import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class MasterStockistService {

  masterStockistForm: FormGroup;
  constructor() {
    this.masterStockistForm = new FormGroup({
      id : new FormControl(null),
      stockistName : new FormControl(null, [Validators.required]),
      loginId : new FormControl(null),
    });
   }
}
