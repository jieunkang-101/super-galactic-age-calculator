import { AgeCalculator } from './../src/super-galactic-age-calculator';

describe('AgeCalculator', () => {

  test('should correctly create a ageCalculaaor object with a age and a planet', () => {
    let ageCalculator = new AgeCalculator(30, "Earth");
    expect(ageCalculator.age).toBe(30);
    expect(ageCalculator.planet).toBe("Earth");
  });
});