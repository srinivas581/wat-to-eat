import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusineModeldialogComponent } from './cusine-modeldialog.component';

describe('CusineModeldialogComponent', () => {
  let component: CusineModeldialogComponent;
  let fixture: ComponentFixture<CusineModeldialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusineModeldialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusineModeldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
