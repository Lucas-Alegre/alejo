import { TestBed } from '@angular/core/testing';

import { YourtubeService } from './yourtube.service';

describe('YourtubeService', () => {
  let service: YourtubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourtubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
