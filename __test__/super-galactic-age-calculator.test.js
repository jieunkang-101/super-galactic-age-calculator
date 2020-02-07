import { AgeCalculator } from './../src/super-galactic-age-calculator';

describe('AgeCalculator', () => {
  let userAge;

  beforeEach(() => {
    userAge = new AgeCalculator(30, "Af");
  });

  test('should correctly create a ageCalculaaor object with a age and a planet', () => {
    expect(userAge.age).toBe(30);
  });

  test('should correctly determine user age in Mercury years.', () => {
    expect(userAge.mercuryAge()).toBe(125);
  });

  test('should correctly determine user age in Venus years.', () => {
    expect(userAge.venusAge()).toBe(48);
  });

  test('should correctly determine user age in Mars years.', () => {
    expect(userAge.marsAge()).toBe(16);
  });

  test('should correctly determine user age in Jupiter years.', () => {
    expect(userAge.jupiterAge()).toBe(3);
  });

  test('should correctly determine user life expectancy at birth.', () => {
    expect(userAge.lifeExpectancyAtBirth()).toBe(66);
  });

  // test('should correctly determine user life expectancy by region.', () => {
  //   expect(userAge.lifeExpectancyByRegoin()).toBe(61);
  // });

  // test('should correctly display either how many years they have left or how many years they have surpassed the average life expectancy', () => {
  //   let userAge = new AgeCalculator(100);
  //   expect(userAge.lifeExpectancyByRegoin()).toBe(31);
  // });

});