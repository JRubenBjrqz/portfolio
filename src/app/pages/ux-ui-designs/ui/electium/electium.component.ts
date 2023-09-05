import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-electium',
  templateUrl: './electium.component.html',
  styleUrls: ['./electium.component.scss'],
})
export class ElectiumComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Electium - Rubén Bojórquez');
  }
}
