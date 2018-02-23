import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickGamePureJsComponent } from './brick-game-pure-js.component';

describe('BrickGamePureJsComponent', () => {
  let component: BrickGamePureJsComponent;
  let fixture: ComponentFixture<BrickGamePureJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrickGamePureJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickGamePureJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
