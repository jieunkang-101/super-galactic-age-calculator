export class AgeCalculator {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  mercuryAge() {
    this.planet = 0.24;
    const userAge = Math.round(this.age / this.planet);
    return userAge;
  }

};