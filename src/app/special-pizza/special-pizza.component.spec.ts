import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPizzaComponent } from './special-pizza.component';

describe('SpecialPizzaComponent', () => {
  let component: SpecialPizzaComponent;
  let fixture: ComponentFixture<SpecialPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
