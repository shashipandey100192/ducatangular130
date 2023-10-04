import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistorpageComponent } from './registorpage.component';

describe('RegistorpageComponent', () => {
  let component: RegistorpageComponent;
  let fixture: ComponentFixture<RegistorpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistorpageComponent]
    });
    fixture = TestBed.createComponent(RegistorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
