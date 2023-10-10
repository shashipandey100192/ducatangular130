import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysidebarComponent } from './mysidebar.component';

describe('MysidebarComponent', () => {
  let component: MysidebarComponent;
  let fixture: ComponentFixture<MysidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MysidebarComponent]
    });
    fixture = TestBed.createComponent(MysidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
