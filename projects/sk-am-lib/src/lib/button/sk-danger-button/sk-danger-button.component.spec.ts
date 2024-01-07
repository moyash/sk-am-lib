import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkDangerButtonComponent } from './sk-danger-button.component';

describe('SkDangerButtonComponent', () => {
  let component: SkDangerButtonComponent;
  let fixture: ComponentFixture<SkDangerButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkDangerButtonComponent]
    });
    fixture = TestBed.createComponent(SkDangerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
