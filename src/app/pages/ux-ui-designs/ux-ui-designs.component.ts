import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ux-ui-designs',
  templateUrl: './ux-ui-designs.component.html',
  styleUrls: ['./ux-ui-designs.component.scss']
})
export class UxUiDesignsComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('UX/UI - Rubén Bojórquez');
  }

}
