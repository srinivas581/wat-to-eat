import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreditsComponent } from './account-credits.component';

describe('AccountCreditsComponent', () => {
  let component: AccountCreditsComponent;
  let fixture: ComponentFixture<AccountCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
