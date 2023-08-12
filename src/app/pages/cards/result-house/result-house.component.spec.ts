import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultHouseComponent } from './result-house.component';

describe('ResultHouseComponent', () => {
  let component: ResultHouseComponent;
  let fixture: ComponentFixture<ResultHouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultHouseComponent]
    });
    fixture = TestBed.createComponent(ResultHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
