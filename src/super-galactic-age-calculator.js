export class AgeCalculator {
  constructor(age, region) {
    this.age = age;
    this.region = region;
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

  lifeExpectancyByRegoin() {
    let _this = this;
    let regionAge = _this.lifeExpectancyAtBirth(this.age);

    if(this.region === "NA" || this.regionAge === "EU") {
      regionAge += 5;
    } else if(this.region === "LA") {
      regionAge += 3;
    } else if(this.region === "Asia") {
      regionAge += 1;
    } else {
      regionAge -= 5;
    } return regionAge;
  }

  lifeExpectancy() {
    
  }

};