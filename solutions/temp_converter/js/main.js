$('#fahrenheit_to_celsius').on('click', function () {

	var fahrenheit = $('#temperature').val();

	fahrenheit = parseFloat(fahrenheit);

	var celsius = (fahrenheit - 32) / 1.8;

	// Cut down to two decimal places
	celsius = celsius.toFixed(2);

	$("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");

	$('#temperature').val('');

});


$('#celsius_to_fahrenheit').on('click', function () {

	var celsius = $('#temperature').val();

	celsius = parseFloat(celsius);

	var fahrenheit = 1.8 * celsius + 32;

	// Cut down to two decimal places
	fahrenheit = fahrenheit.toFixed(2);

	$("#result").html(celsius + "&deg;C = " + fahrenheit + "&deg;F");

	$('#temperature').val('');
	
});