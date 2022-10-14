import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductListComponent } from './prduct-list.component';

describe('PrductListComponent', () => {
  let component: PrductListComponent;
  let fixture: ComponentFixture<PrductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
