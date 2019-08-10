import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3PromotionComponent } from './baitap3-promotion.component';

describe('Baitap3PromotionComponent', () => {
  let component: Baitap3PromotionComponent;
  let fixture: ComponentFixture<Baitap3PromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap3PromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3PromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
