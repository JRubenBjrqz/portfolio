import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToNavbar() {
    const navbarElement = document.getElementById('navbar');
    if (navbarElement) {
      navbarElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
