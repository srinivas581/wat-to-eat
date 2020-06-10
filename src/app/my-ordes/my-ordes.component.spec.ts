import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdesComponent } from './my-ordes.component';

describe('MyOrdesComponent', () => {
  let component: MyOrdesComponent;
  let fixture: ComponentFixture<MyOrdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
