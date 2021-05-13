import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-sncak-bar',
  templateUrl: './sncak-bar.component.html',
  styleUrls: ['./sncak-bar.component.scss']
})
export class SncakBarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
