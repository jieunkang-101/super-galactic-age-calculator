import { AgeCalculator } from './../src/super-galactic-age-calculator';

describe('AgeCalculator', () => {
  let userAge;

  beforeEach(() => {
    userAge = new AgeCalculator(30, "this.planet");
  });

  test('should correctly create a ageCalculaaor object with a age and a planet', () => {
    expect(userAge.age).toBe(30);
    expect(userAge.planet).toBe("this.planet");
  });

  test('should correctly determine user age in Mercury years.', () => {
    expect(userAge.mercuryAge()).toBe(125);
  });

  test('should correctly determine user age in Venus years.', () => {
    expect(userAge.venusAge()).toBe(48);
  });

});