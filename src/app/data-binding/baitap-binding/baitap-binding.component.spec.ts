import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapBindingComponent } from './baitap-binding.component';

describe('BaitapBindingComponent', () => {
  let component: BaitapBindingComponent;
  let fixture: ComponentFixture<BaitapBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
