import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-topspin',
  templateUrl: './topspin.component.html',
  styleUrls: ['./topspin.component.scss'],
})
export class TopspinComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('TopSpin Music - Rubén Bojórquez');
  }
}
