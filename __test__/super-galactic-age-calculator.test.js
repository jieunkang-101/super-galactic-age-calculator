import { AgeCalculator } from './../src/super-galactic-age-calculator';

describe('AgeCalculator', () => {

  test('should correctly create a ageCalculaaor object with a age and a planet', () => {
    let ageCalculator = new AgeCalculator(30, 0.24);
    expect(ageCalculator.age).toBe(30);
    expect(ageCalculator.planet).toBe(0.24);
  });

  test('should correctly determine user age in Mercury years.', () => {
    const userAge = new AgeCalculator(30);
    expect(userAge.mercuryAge()).toBe(48);
  });

});