import { TestBed } from '@angular/core/testing';

import { SkAmLibService } from './sk-am-lib.service';

describe('SkAmLibService', () => {
  let service: SkAmLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkAmLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
