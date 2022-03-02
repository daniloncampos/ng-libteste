import { TestBed } from '@angular/core/testing';

import { NgLibtesteService } from './ng-libteste.service';

describe('NgLibtesteService', () => {
  let service: NgLibtesteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLibtesteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
