import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLibtesteComponent } from './ng-libteste.component';

describe('NgLibtesteComponent', () => {
  let component: NgLibtesteComponent;
  let fixture: ComponentFixture<NgLibtesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgLibtesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLibtesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
