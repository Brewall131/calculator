var a = 2;

var operand1 = "";

var operator = "";

var operand2 = "";
	
var answer = "";

var equals = "=";

function setVariables (integer) {

		if (operator == "") {
			operand1 += integer;
			$('#results').html(operand1);
		}
		else {
			operand2 += integer;
			$('#results').html(operand1.concat(operator, operand2));
		}

}

//next step, have calculator show results all the time

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

	//event listeners to store data in the variables above
	//Numbers
	$('#zero').click(function(){
		var integer = "0";
		setVariables (integer);
	})
	$('#one').click(function(){
		var integer = "1";
		setVariables (integer);
	})
	$('#two').click(function(){
		var integer = "2";
		setVariables (integer);
	})
	$('#three').click(function(){
		var integer = "3";
		setVariables (integer);
	})
	$('#four').click(function(){
		var integer = "4";
		setVariables (integer);
	})
	$('#five').click(function(){
		var integer = "5";
		setVariables (integer);
	})
	$('#six').click(function(){
		var integer = "6";
		setVariables (integer);
	})
	$('#seven').click(function(){
		var integer = "7";
		setVariables (integer);
	})
	$('#eight').click(function(){
		var integer = "8";
		setVariables (integer);
	})
	$('#nine').click(function(){
		var integer = "9";
		setVariables (integer);
	})


	//add operators to the operator variable string
	//push operator to results screen for viewing
	$('#plus').click(function(){
		 operator = "+";
		 $('#results').html(operand1.concat(operator));
	})
	$('#minus').click(function(){
		 operator = "-";
		 $('#results').html(operand1.concat(operator));
	})
	$('#multiply').click(function(){
		 operator = "*";
		 $('#results').html(operand1.concat(operator));
	})
	$('#divide').click(function(){
		 operator = "/";
		 $('#results').html(operand1.concat(operator));
	})

	//show current answer when = is hit
	$('#equals').click(function(){
		 answer = operand1.concat(operator, operand2);
		 answer = eval(answer);
		 console.log(answer);

		 //push results to the screen
		 $('#results').html(operand1.concat(operator, operand2, equals, answer));
	})

	//clear the variables when clear is clicked
	$('#clear').click(function(){
		operand1 = "";
		operator = "";
		operand2 = "";
		answer = "";
		
		 $('#results').html(answer);

	})
	

});