import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  height = 0;

  constructor() {}

  ngOnInit() {
    window.addEventListener('keyboardWillShow', (event: any) => {
      this.height = event.keyboardHeight;
    });
  }
}
