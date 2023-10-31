import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkPrimaryButtonComponent } from './sk-primary-button.component';

describe('SkPrimaryButtonComponent', () => {
  let component: SkPrimaryButtonComponent;
  let fixture: ComponentFixture<SkPrimaryButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkPrimaryButtonComponent]
    });
    fixture = TestBed.createComponent(SkPrimaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
