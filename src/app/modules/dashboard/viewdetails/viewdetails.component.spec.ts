import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailsComponent } from './viewdetails.component';

describe('ViewdetailsComponent', () => {
  let component: ViewdetailsComponent;
  let fixture: ComponentFixture<ViewdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewdetailsComponent]
    });
    fixture = TestBed.createComponent(ViewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
