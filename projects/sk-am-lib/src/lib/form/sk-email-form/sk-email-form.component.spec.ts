import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkEmailFormComponent } from './sk-email-form.component';

describe('SkEmailFormComponent', () => {
  let component: SkEmailFormComponent;
  let fixture: ComponentFixture<SkEmailFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkEmailFormComponent]
    });
    fixture = TestBed.createComponent(SkEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
