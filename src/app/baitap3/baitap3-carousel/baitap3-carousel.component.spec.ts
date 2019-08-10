import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3CarouselComponent } from './baitap3-carousel.component';

describe('Baitap3CarouselComponent', () => {
  let component: Baitap3CarouselComponent;
  let fixture: ComponentFixture<Baitap3CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap3CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
