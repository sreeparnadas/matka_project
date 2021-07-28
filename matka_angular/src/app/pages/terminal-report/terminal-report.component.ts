import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-terminal-report',
  templateUrl: './terminal-report.component.html',
  styleUrls: ['./terminal-report.component.scss']
})
export class TerminalReportComponent implements OnInit {

  constructor( private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-image', 'none');
  }

  ngOnInit(): void {
  }

}
