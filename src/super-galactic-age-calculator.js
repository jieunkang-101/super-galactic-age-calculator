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
    const userAge = Math.round(this.age / 1.88);
    return userAge;
  }

  jupiterAge() {
    const userAge = Math.round(this.age / 11.86);
    return userAge;
  }

  lifeExpectancyAtBirth() {
    for(var i = 0; i < 10; i++) {
      if(this.age >= 100) {
        this.age = 50;
      } else if(this.age >= i*10 && this.age < (i+1)*10) {
        return this.age = 72 - ( i * 2);
      } 
    }
    
  }
};