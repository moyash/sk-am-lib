import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkLoginEmailComponent } from './sk-login-email.component';

describe('SkLoginEmailComponent', () => {
  let component: SkLoginEmailComponent;
  let fixture: ComponentFixture<SkLoginEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkLoginEmailComponent]
    });
    fixture = TestBed.createComponent(SkLoginEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
