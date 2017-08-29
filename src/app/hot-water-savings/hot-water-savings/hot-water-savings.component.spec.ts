import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotWaterSavingsComponent } from './hot-water-savings.component';

describe('HotWaterSavingsComponent', () => {
  let component: HotWaterSavingsComponent;
  let fixture: ComponentFixture<HotWaterSavingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotWaterSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotWaterSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
