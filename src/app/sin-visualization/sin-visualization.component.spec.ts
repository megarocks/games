import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinVisualizationComponent } from './sin-visualization.component';

describe('SinVisualizationComponent', () => {
  let component: SinVisualizationComponent;
  let fixture: ComponentFixture<SinVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
