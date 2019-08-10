import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapNgforComponent } from './baitap-ngfor.component';

describe('BaitapNgforComponent', () => {
  let component: BaitapNgforComponent;
  let fixture: ComponentFixture<BaitapNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
