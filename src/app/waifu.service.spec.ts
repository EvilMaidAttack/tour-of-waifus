import { TestBed } from '@angular/core/testing';

import { WaifuService } from './waifu.service';

describe('WaifuService', () => {
  let service: WaifuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaifuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
