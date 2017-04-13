var a = 2;

var operand1 = "";

var operator = "";

var operand2 = "";
	
var answer = "";

$(document).ready(function(){

	//center the calculator
	$(function() {
	    $('.center').css({
	        'position' : 'absolute',
	        'left' : '50%',
	        'top' : '50%',
	        'margin-left' : -$('.center').outerWidth()/2,
	        'margin-top' : -$('.center').outerHeight()/2
	    });
	});

	//variables to plaace the integers and operators into 
	//changing variables as the code runs
	
	
	//CURRENT PROBLEM: numbers are not seperating out when an operator is entered.

	//will need to destringify next.

	//event listeners to store data in the variables above
	//Numbers
	$('#zero').click(function(){
		var integer = "0";

		if (operator == "") {
			operand1 += integer;
		}
		else {
			operand2 += integer;
		}
		
	})
	$('#one').click(function(){
		var integer = "1";

		if (operator == "") {
			operand1 += integer;
		}
		else {
			operand2 += integer;
		}
		
	})
	$('#two').click(function(){
		var integer = "2";

		if (operator == "" ){
			operand1 += integer;
		}
		else {
			operand2 += integer;
		}
		
	})
	$('#three').click(function(){
		var integer = "3";

		if (operator == "" ){
			operand1 += integer;
		}
		else {
			operand2 += integer;
		}
		
	})
	$('#four').click(function(){
		var integer = "4";

		if (operator == "" ){
			operand1 += integer;
		}
		else {
			operand2 += integer;
		}
		
	})
	$('#five').click(function(){
		var integer = "5";

		if (operator == "" ){
			operand1 += integer;
		}
		else {
			operand2 += integer;
		}
		
	})
	$('#six').click(function(){
		var integer = "6";

		if (operator == "" ){
			operand1 += integer;
		}
		else {
			operand2 += integer;
		}
		
	})
	$('#seven').click(function(){
		var integer = "7";

		if (operator == "" ){
			operand1 += integer;
		}
		else {
			operand2 += integer;
		}
		
	})
	$('#eight').click(function(){
		var integer = "8";

		if (operator == "" ){
			operand1 += integer;
		}
		else {
			operand2 += integer;
		}
		
	})
	$('#nine').click(function(){
		var integer = "9";

		if (operator == "" ){
			operand1 += integer;
		}
		else {
			operand2 += integer;
		}
		
	})


	//add operators to the operator variable string
	$('#plus').click(function(){
		 operator = "+";
	})
	$('#minus').click(function(){
		 operator = "-";
	})
	$('#multiply').click(function(){
		 operator = "*";
	})
	$('#divide').click(function(){
		 operator = "/";
	})

	//show current answer when = is hit
	$('#equals').click(function(){
		 answer = operand1.concat(operator, operand2);
		 answer = eval(answer);
		 console.log(answer);
	})
	

});