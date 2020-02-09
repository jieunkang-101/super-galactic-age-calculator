import { AgeCalculator } from './super-galactic-age-calculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

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
    $(".hidden").hide();
  });

  $('select[name="region"]').change(function (e) {
    $(".hidden").show();
    const userAge = parseInt($("#inputAge").val()); 
    const newAge = new AgeCalculator(userAge, e.target.value);
    const lifeExpectancyAge = newAge.lifeExpectancyByRegoin();
    const leftAge = newAge.lifeExpectancy();
    const lifeYears = new AgeCalculator(leftAge); 

    if ( userAge < lifeExpectancyAge) {
      $("#outputYoung").show(); 
    } else {
      $("#outputOld").show(); 
    }

    $("#result").text(lifeExpectancyAge);
    $("#earthYears").text(leftAge);
    $("#mercuryYears").text(lifeYears.mercuryAge());
    $("#venusYears").text(lifeYears.venusAge());
    $("#marsYears").text(lifeYears.marsAge());
    $("#jupiterYears").text(lifeYears.jupiterAge());
  });
});    