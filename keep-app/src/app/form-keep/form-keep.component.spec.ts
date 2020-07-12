import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKeepComponent } from './form-keep.component';

describe('FormKeepComponent', () => {
  let component: FormKeepComponent;
  let fixture: ComponentFixture<FormKeepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormKeepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
