// ------- GETTING AND SETTING CONTENT --------
// Get/change content of elements, attributes, text nodes

// .html()
$('h1').html("Hello I'm changed");

// .attr()
$('img').attr('src', 'images/moto.jpeg');
// .css()
$('p').css('color', 'pink');

// .addClass()
$('h1').addClass('fun');

// .removeClass()
$('.special').removeClass('special');


// ------- EFFECTS/ANIMATION --------
// Get/change content of elements, attributes, text nodes

// .show()
// $('h1').show();

// .hide()
$('p').hide();
// .fadeIn()
$('h1').fadeIn(3500);

// .fadeOut()

// .slideUp()
// $('ul').slideUp(1000);

// .slideDown()

// .slideToggle()
$('button').on('click', slideMenu);

$('h1').on('mouseover', slideMenu);


function slideMenu () {
	$('ul').slideToggle(500);
}

