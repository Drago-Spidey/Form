import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellperiodComponent } from './wellperiod.component';

describe('WellperiodComponent', () => {
  let component: WellperiodComponent;
  let fixture: ComponentFixture<WellperiodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellperiodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
