import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private element: ElementRef,
  ) { }

  ngOnInit(): void {
  }

  openNav() {
    const mobileMenu = this.element.nativeElement.querySelector('#mobile-menu');
    mobileMenu.style.width = '100%';
  }

  closeNav() {
    const mobileMenu = this.element.nativeElement.querySelector('#mobile-menu');
    mobileMenu.style.width = '0%';
  }


}
