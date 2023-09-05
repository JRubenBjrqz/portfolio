import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-uiprojects',
  templateUrl: './uiprojects.component.html',
  styleUrls: ['./uiprojects.component.scss']
})
export class UiprojectsComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('UI Projects - Rubén Bojórquez');
  }

}
