import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCusineComponent } from './select-cusine.component';

describe('SelectCusineComponent', () => {
  let component: SelectCusineComponent;
  let fixture: ComponentFixture<SelectCusineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCusineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
