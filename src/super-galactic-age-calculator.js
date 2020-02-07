export class AgeCalculator {
  constructor(age) {
    this.age = age;
  }

  mercuryAge() {
    const userAge = Math.round(this.age / 0.24);
    return userAge;
  }

  venusAge() {
    const userAge = Math.round(this.age / 0.62);
    return userAge;
  }

  marsAge() {
    //this.planet = 1.88;
    const userAge = Math.round(this.age / 1.88);
    return userAge;
  }

  jupiterAge() {
    //this.planet = 11.86;
    const userAge = Math.round(this.age / 11.86);
    return userAge;
  }

  
};