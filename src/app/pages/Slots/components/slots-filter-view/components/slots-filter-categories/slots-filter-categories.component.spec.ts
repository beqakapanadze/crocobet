import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsFilterCategoriesComponent } from './slots-filter-categories.component';

describe('SlotsFilterCategoriesComponent', () => {
  let component: SlotsFilterCategoriesComponent;
  let fixture: ComponentFixture<SlotsFilterCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotsFilterCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlotsFilterCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
