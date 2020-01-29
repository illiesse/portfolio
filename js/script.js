var typed = new Typed('.typed_one', {
	strings: ["I am"],
	startDelay : 700,
	typeSpeed: 50,
	loop : false,
	showCursor : false,
  });

var typed = new Typed('.typed_two', {
	strings: ["Magical Princess.","Gigi."],
	typeSpeed: 30,
	startDelay : 1200,
	loop : true,
	showCursor : false
  });

$(".fa-bars").on("click", function(){
hamburger_menu()})

function hamburger_menu(){
	$("#menu").toggleClass("hide_menu")
	$("#menu").toggleClass("show_menu")
}

$(function() {
	$.scrollIt({
		easing: 'ease',
		scrollTime: 1500,
		// topOffset: 100,
	});
});

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({items:1});
});

$grid = $('.container').isotope({
  itemSelector: '.portfolio_image',
  layoutMode: 'fitRows'
});

$("#all-filter").on("click", function() {
	$grid.isotope({ filter: '*'});
	$("li").removeClass("active");
	$("#all-filter").addClass("active");
});

$("#js-filter").on("click", function() {
	$grid.isotope({ filter: '.js'});
	$("li").removeClass("active");
	$("#js-filter").addClass("active");
});

$("#css-filter").on("click", function() {
	$grid.isotope({ filter: '.css'});
	$("li").removeClass("active");
	$("#css-filter").addClass("active");
})

$("#php-filter").on("click", function() {
	$grid.isotope({ filter: '.php'});
	$("li").removeClass("active");
	$("#php-filter").addClass("active");
})