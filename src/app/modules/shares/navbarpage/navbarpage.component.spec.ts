import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarpageComponent } from './navbarpage.component';

describe('NavbarpageComponent', () => {
  let component: NavbarpageComponent;
  let fixture: ComponentFixture<NavbarpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarpageComponent]
    });
    fixture = TestBed.createComponent(NavbarpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
