import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFrameComponent } from './result-frame.component';

describe('ResultFrameComponent', () => {
  let component: ResultFrameComponent;
  let fixture: ComponentFixture<ResultFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultFrameComponent]
    });
    fixture = TestBed.createComponent(ResultFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
