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
    if(this.age >= 100) {
      this.age = 50;
    } else {
      for(var i = 0; i < 10; i++) {
        if(this.age >= i*10 && this.age < (i+1)*10) {
          this.age = 72 - ( i * 2);
          return this.age;  
        }   
      }  
    } return this.age;  
  }

  // lifeExpectancyByRegoin() {
  //   let _this = this;
  //   this.expectedAge = _this.lifeExpectancyAtBirth(this.age);

  //   if(this.region === "NA" || this.regionAge === "EU") {
  //     this.expectedAge += 5;
  //   } else if(this.region === "LA") {
  //     this.expectedAge += 3;
  //   } else if(this.region === "Asia") {
  //     this.expectedAge += 1;
  //   } else {
  //     this.expectedAge -= 5;
  //   } 

  //   if(this.age <= this.expectedAge){
  //     this.age = this.expectedAge - this.age;
  //   } else if(this.age > this.expectedAge){
  //     this.age = this.age - this.expectedAge;
  //   } return this.age;
  
  // }

  // lifeExpectancy() {
  //   // let _this = this;
  //   // this.a = _this.lifeExpectancyByRegoin(this.age);
  //   let newAge = new AgeCalculator();
  //   if(this.age <= newAge.lifeExpectancyByRegoin()){
  //     this.age = newAge.lifeExpectancyByRegoin() - this.age;
  //   } else {
  //     this.age = this.age - newAge.lifeExpectancyByRegoin();
  //   } return this.age;
  
  // }

};