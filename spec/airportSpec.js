'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
     airport = new Airport();
     plane = jasmine.createSpy('plane', ['land']);
  });

  it('responds to land_a_plane', function() {
       plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([plane]);
  });
});
