import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapNgifComponent } from './baitap-ngif.component';

describe('BaitapNgifComponent', () => {
  let component: BaitapNgifComponent;
  let fixture: ComponentFixture<BaitapNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
