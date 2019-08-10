import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3SmartphoneComponent } from './baitap3-smartphone.component';

describe('Baitap3SmartphoneComponent', () => {
  let component: Baitap3SmartphoneComponent;
  let fixture: ComponentFixture<Baitap3SmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap3SmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3SmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
