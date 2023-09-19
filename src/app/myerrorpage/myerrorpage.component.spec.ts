import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyerrorpageComponent } from './myerrorpage.component';

describe('MyerrorpageComponent', () => {
  let component: MyerrorpageComponent;
  let fixture: ComponentFixture<MyerrorpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyerrorpageComponent]
    });
    fixture = TestBed.createComponent(MyerrorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
