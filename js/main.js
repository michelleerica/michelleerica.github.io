$(document).ready(function() {



if (document.documentElement.clientWidth > 712) {
    $('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		sectionsColor: ['#fbd2d7', '#9ABCA7', '#AF9FA5', '#C0B9DD', '#b8cfdd']
    })
} else {
	$('#typeit')
		.css('min-height', '100vh')
		.css('font-size', '20px');

	$('.menu').remove()
	}

	new TypeIt("#typeit", {
    speed: 50,
    autoStart: true,
  })
    .pause(500)
    .delete(1)
    .type("Under construction")
    .pause(1000)
}); //doc ready
