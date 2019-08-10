import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3LaptopComponent } from './baitap3-laptop.component';

describe('Baitap3LaptopComponent', () => {
  let component: Baitap3LaptopComponent;
  let fixture: ComponentFixture<Baitap3LaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap3LaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3LaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
