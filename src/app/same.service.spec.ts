import { TestBed } from '@angular/core/testing';

import { SameService } from './same.service';

describe('SameService', () => {
  let service: SameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
