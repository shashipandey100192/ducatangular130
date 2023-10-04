import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullComponent } from './full.component';

describe('FullComponent', () => {
  let component: FullComponent;
  let fixture: ComponentFixture<FullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullComponent]
    });
    fixture = TestBed.createComponent(FullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
