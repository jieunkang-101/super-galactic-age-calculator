export function AgeCalculator(age, planet) {
  this.age = age;
  this.planet = planet;
}

AgeCalculator.prototype.mercuryAge = function() {
  this.planet = 0.24;
  const userAge = Math.round(this.age / this.planet);
  return userAge;
}