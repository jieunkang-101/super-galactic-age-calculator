const LIFE_EXPECTANCY_VALUE = 72;

export class AgeCalculator {
  constructor(age, region) {
    this.age = age || 0;
    this.region = region;
  }

  //to calculate galactic years
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

  //to calculate the life expectancy by first condition(age)
  lifeExpectancyAtBirth() {
    let expectedAgeBirth = 0;

    if (this.age >= 100) {
      expectedAgeBirth = 50;
    } else {
      for (var i = 0; i < 10; i++) {
        if (this.age >= i*10 && this.age < (i+1) * 10) {
          expectedAgeBirth = LIFE_EXPECTANCY_VALUE - (i * 2);
          
          return expectedAgeBirth;
        }
      }
    }
    
    return expectedAgeBirth;
  }

  //to calculate the final life expectancy 
  lifeExpectancyByRegoin() {
    let expectedAge = this.lifeExpectancyAtBirth(this.age);
 
    if(this.region === "NA" || this.region === "EU" || this.region === "OC") {
      expectedAge += 5;
    } else if(this.region === "LA") {
      expectedAge += 3;
    } else if(this.region === "AS") {
       expectedAge += 1;
    } else {
      expectedAge -= 5;
    }
    
    return expectedAge;
  }

  //to calculate the how many years left of surpassed the life expectany
  lifeExpectancy() {
    let expectedAge = this.lifeExpectancyByRegoin();
    let result = 0;

    if (this.age <= expectedAge) {
      result = expectedAge - this.age;
    } else {
      result = this.age - expectedAge;
    }
    
    return result;
  }  
}