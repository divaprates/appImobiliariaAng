import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameHouseComponent } from './frame-house.component';

describe('FrameHouseComponent', () => {
  let component: FrameHouseComponent;
  let fixture: ComponentFixture<FrameHouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameHouseComponent]
    });
    fixture = TestBed.createComponent(FrameHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
