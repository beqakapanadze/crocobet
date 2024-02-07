import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsSliderComponent } from './slots-slider.component';

describe('SlotsSliderComponent', () => {
  let component: SlotsSliderComponent;
  let fixture: ComponentFixture<SlotsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotsSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlotsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
