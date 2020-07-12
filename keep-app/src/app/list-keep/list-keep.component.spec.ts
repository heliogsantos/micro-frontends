import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKeepComponent } from './list-keep.component';

describe('ListKeepComponent', () => {
  let component: ListKeepComponent;
  let fixture: ComponentFixture<ListKeepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKeepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
