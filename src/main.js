import { AgeCalculator } from './super-galactic-age-calculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $("form#inputPlanetAge").submit(function(event){
    event.preventDefault();
    const userAge = parseInt($("#inputAge").val());
    const newAge = new AgeCalculator(userAge);
    const mercuryAge = newAge.mercuryAge();
    const venusAge = newAge.venusAge();
    const marsAge = newAge.marsAge();
    const jupiterAge = newAge.jupiterAge();

    $("#mercuryAge").text(mercuryAge);
    $("#venusAge").text(venusAge);
    $("#marsAge").text(marsAge);
    $("#jupiterAge").text(jupiterAge);
  });

  $('select[name="region"]').change(function (e) {
    const userAge = parseInt($("#inputAge").val()); 
    const newAge = new AgeCalculator(userAge, e.target.value);
    const expectedAge = newAge.lifeExpectancy();
    const lifeYears = new AgeCalculator(expectedAge, e.target.value); 

    $("#result").text("Life expectancy on each planet!");
    $("#earthYears").text(expectedAge);
    $("#mercuryYears").text(lifeYears.mercuryAge());
    $("#venusYears").text(lifeYears.venusAge());
    $("#marsYears").text(lifeYears.marsAge());
    $("#jupiterYears").text(lifeYears.jupiterAge());
  });

});    