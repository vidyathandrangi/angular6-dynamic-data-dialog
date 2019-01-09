import { TestBed, inject } from '@angular/core/testing';

import { DialogtableserviceService } from './dialogtableservice.service';

describe('DialogtableserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogtableserviceService]
    });
  });

  it('should be created', inject([DialogtableserviceService], (service: DialogtableserviceService) => {
    expect(service).toBeTruthy();
  }));
});
