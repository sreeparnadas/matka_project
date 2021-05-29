import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lttle-dummy',
  templateUrl: './lttle-dummy.component.html',
  styleUrls: ['./lttle-dummy.component.scss']
})
export class LttleDummyComponent implements OnInit {
  @Input() helloText = '';
  constructor() { }

  ngOnInit(): void {
  }

}
