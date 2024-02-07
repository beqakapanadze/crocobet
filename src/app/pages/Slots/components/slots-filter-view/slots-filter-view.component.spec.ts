import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsFilterViewComponent } from './slots-filter-view.component';

describe('SlotsFilterViewComponent', () => {
  let component: SlotsFilterViewComponent;
  let fixture: ComponentFixture<SlotsFilterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotsFilterViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotsFilterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
