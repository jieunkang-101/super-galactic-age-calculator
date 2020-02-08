import { AgeCalculator } from './super-galactic-age-calculator';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("#inputAgeBtn").submit(function(event){
    event.preventDefault();
    const userAge = parseInt($("#inputAge").val());
    console.log(userAge);
    const newAge = new AgeCalculator(userAge);
    $("#mercuryAge").text(newAge.mercuryAge());
    $("#venusAge").text(newAge.venusAge());
    $("#marsAge").text(newAge.marsAge());
    $("#jupiterAge").text(newAge.jupiterAge());




    //var userRegion = $('option:selected', this).attr('class');



  });
});    