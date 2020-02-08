export class AgeCalculator {
  constructor(age, region) {
    this.age = age;
    this.region = region;
    this.expectedAge = this.expectedAge;
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
    let expectedAgeBirth = 0;
    if(this.age >= 100) {
      expectedAgeBirth += 50;
    } else {
      for(var i = 0; i < 10; i++) {
        if(this.age >= i*10 && this.age < (i+1)*10) {
          expectedAgeBirth += 72 - ( i * 2);
          return expectedAgeBirth;  
        }   
      }  
    } return expectedAgeBirth;  
  }

  lifeExpectancyByRegoin() {
    let _this = this;
    this.expectedAgeRegion = _this.lifeExpectancyAtBirth(this.age);
    if(this.region === "NA" || this.regionAge === "EU" || this.regionAge === "OC") {
      this.expectedAgeRegion += 5;
    } else if(this.region === "LA") {
      this.expectedAgeRegion += 3;
    } else if(this.region === "AS") {
      this.expectedAgeRegion += 1;
    } else {
      this.expectedAgeRegion -= 5;
    } return this.expectedAgeRegion;
  }

  lifeExpectancy() {
    let _this = this;
    this.expectedAge = _this.lifeExpectancyByRegoin();
    if(this.age <= this.expectedAge) {
      this.age = this.expectedAge - this.age;
    } else {
      this.age = this.age - this.expectedAge;
    } return this.age;
  }  
}