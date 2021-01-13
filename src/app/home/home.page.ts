import { Component, OnInit, NgZone } from '@angular/core';
import { KeyboardInfo, Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  height = 0;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    const { Keyboard } = Plugins;
    Keyboard.addListener('keyboardWillShow', (info: KeyboardInfo) =>
      this.zone.run(() => (this.height = info.keyboardHeight))
    );
  }
}
