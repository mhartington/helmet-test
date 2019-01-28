import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHelmetComponent } from './ngx-helmet.component';

describe('NgxHelmetComponent', () => {
  let component: NgxHelmetComponent;
  let fixture: ComponentFixture<NgxHelmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHelmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHelmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
