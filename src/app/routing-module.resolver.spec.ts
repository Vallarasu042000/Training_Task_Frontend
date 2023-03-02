import { TestBed } from '@angular/core/testing';

import { RoutingModuleResolver } from './routing-module.resolver';

describe('RoutingModuleResolver', () => {
  let resolver: RoutingModuleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RoutingModuleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
