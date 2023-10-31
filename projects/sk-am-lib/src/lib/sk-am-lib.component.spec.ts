import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkAmLibComponent } from './sk-am-lib.component';

describe('SkAmLibComponent', () => {
  let component: SkAmLibComponent;
  let fixture: ComponentFixture<SkAmLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkAmLibComponent]
    });
    fixture = TestBed.createComponent(SkAmLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
