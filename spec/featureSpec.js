'use strict';

describe('Feature Tests:', function(){
var plane;
var airport;
var weather;

beforeEach(function(){
  plane = new Plane();
  airport = new Airport();
  weather = new Weather();
})

it('planes can be instructed to land at an airport', function(){
  plane.land(airport);
  expect(airport.planes()).toContain(plane);
});

  it('planes can be instructed to take off', function(){
    plane.land(airport)
    plane.takeOff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('blocks takeoff when weather is stormy', function() {
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function() { plane.takeOff();}).toThrowError('cannot take off during storm');
    expect(airport.planes()).toContain(plane);
  });
});
