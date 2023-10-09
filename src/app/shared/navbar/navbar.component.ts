import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private element: ElementRef,
  ) { }

  openNav() {
    const mobileMenu = this.element.nativeElement.querySelector('#mobileMenu');
    mobileMenu.style.width = '100%';
  }

  closeNav() {
    const mobileMenu = this.element.nativeElement.querySelector('#mobileMenu');
    mobileMenu.style.width = '0%';
  }
}
