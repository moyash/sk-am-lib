import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkPasswordFormComponent } from './sk-password-form.component';

describe('SkPasswordFormComponent', () => {
  let component: SkPasswordFormComponent;
  let fixture: ComponentFixture<SkPasswordFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkPasswordFormComponent]
    });
    fixture = TestBed.createComponent(SkPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
