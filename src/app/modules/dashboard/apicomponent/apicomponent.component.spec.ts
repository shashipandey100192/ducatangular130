import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicomponentComponent } from './apicomponent.component';

describe('ApicomponentComponent', () => {
  let component: ApicomponentComponent;
  let fixture: ComponentFixture<ApicomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApicomponentComponent]
    });
    fixture = TestBed.createComponent(ApicomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
