$('#grayButton').on('click',switchGray);
$('#whiteButton').on('click',switchWhite);

function switchGray(){
  $('body').css('backgroundColor', 'grey');
  $('body').css('color', 'white');
}

function switchWhite() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}