import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dasana',
  templateUrl: './dasana.component.html',
  styleUrls: ['./dasana.component.scss'],
})
export class DasanaComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Dasana - Rubén Bojórquez');
  }
}
