import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsFilterProvidersComponent } from './slots-filter-providers.component';

describe('SlotsFilterProvidersComponent', () => {
  let component: SlotsFilterProvidersComponent;
  let fixture: ComponentFixture<SlotsFilterProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotsFilterProvidersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlotsFilterProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
