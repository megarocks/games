import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navLinks = [
    { path: '/brick-game-phaser', label: 'Bricks Game (Phaser)' },
    { path: '/brick-game-pure-js', label: 'Bricks Game (Vanilla JS)' },
    { path: '/sin', label: 'Rainbow Sin Wave Visualization' }
  ];
}
