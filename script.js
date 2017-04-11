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

	//create the array that will be used in functions
	var integerArray = [];
	
	//changing variables as the code runs
	var integer = 0;

	var answer = 0;

	//have event listeners to store data in the arrays above
	
	//Numbers
	$('#one').click(function(){
		var integer = 1;
		integerArray.push(integer);
	})
	$('#two').click(function(){
		var integer = 2;
		integerArray.push(integer);
	})
	$('#three').click(function(){
		var integer = 3;
		integerArray.push(integer);
	})
	$('#four').click(function(){
		var integer = 4;
		integerArray.push(integer);
	})
	$('#five').click(function(){
		var integer = 5;
		integerArray.push(integer);
	})
	$('#six').click(function(){
		var integer = 6;
		integerArray.push(integer);
	})
	$('#seven').click(function(){
		var integer = 7;
		integerArray.push(integer);
	})
	$('#eight').click(function(){
		var integer = 8;
		integerArray.push(integer);
	})
	$('#nine').click(function(){
		var integer = 9;
		integerArray.push(integer);
	})

	console.log(integerArray);


	//functions for + - * / using integerArray
	
	//add them
	
	

});