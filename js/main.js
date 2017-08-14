$(document).ready(function() {
	// $('#fullpage').fullpage();
	// $('#fullpage').fullpage({
	//      scrollOverflowOptions: {
	//           click: true
	//      }
	// });
	if (document.documentElement.clientWidth > 1023) {
	    $('#fullpage').fullpage({
	        // we need to enable scrolling on desktop version
	        scrollOverflow: true
	        // the rest setting can goes below here
	    });
	}
	if (document.documentElement.clientWidth < 1024) {
	    $('#fullpage').fullpage({
	        // we need to disable scrolling not on desktop version
	        scrollOverflow: false
	        // the rest setting can goes below here
	    });

			// $('#about-long').css("font-size","12px");

	}


	// var quoteChange = function(){
	// 	$('#home-info').css("display","none");
	// 	$('#funny').css("display","block");
	//
	// }
	//
	// function myFunction() {
	//     setInterval(function(){ alert("Hello"); }, 3000);
	// }
	// setInterval(function(){
	// 	$('#home-info').css("display","none");
	// 	$('#funny').css("display","block");
	// }, 2000);

	setInterval(function(){
		$('#funny').css("display","none");
		$('#home-info').css("display","block");
	}, 2000, setInterval(function(){
		$('#home-info').css("display","none");
		$('#funny').css("display","block");
	}, 6000));


	$('.bujoco-info').click(function(){
    $('.bujoco-modal').modal('show');
  });
  $(".bujoco-modal").modal({
  closable: true
  });


		$('.fraga-info').click(function(){
	    $('.fraga-modal').modal('show');
	  });
	  $(".fraga-modal").modal({
	  closable: true
	  });

	$('.figgie-info').click(function(){
    $('.figgie-modal').modal('show');
  });
  $(".figgie-modal").modal({
  closable: true
  });

	$('.tic-info').click(function(){
    $('.tic-modal').modal('show');
  });
  $(".tic-modal").modal({
  closable: true
  });

});
