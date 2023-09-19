import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MynavbarComponent } from './mynavbar.component';

describe('MynavbarComponent', () => {
  let component: MynavbarComponent;
  let fixture: ComponentFixture<MynavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MynavbarComponent]
    });
    fixture = TestBed.createComponent(MynavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
