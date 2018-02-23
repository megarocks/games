import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickGamePhaserComponent } from './brick-game-phaser.component';

describe('BrickGamePhaserComponent', () => {
  let component: BrickGamePhaserComponent;
  let fixture: ComponentFixture<BrickGamePhaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrickGamePhaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickGamePhaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
