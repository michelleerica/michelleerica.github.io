$(document).ready(function() {

	$('#fullpage').fullpage({
    sectionsColor: ['#fbd2d7', '#9ABCA7', '#AF9FA5', '#C0B9DD']
  });

	new TypeIt('#typeit', {
     speed: 50,
     autoStart: false
		})
		.type('Hey')
		.pause(500)
		.delete(1)
		.type('llo, ')
		.pause(1000)
		.type("my name is Michelle Erica Lo")
		.break()
		.type("(or <i>Milo</i>, for short)")
		.break() .pause(750)
		.type("I'm a junior web developer from Sydney")
		.break() .pause(750)
		.type("and teaching assistant for General Assembly's Web Development Immersive.")
		.break() .pause(750)
		// .options({speed: 1000})
		.type('...')
		.pause(1000)
		.delete(4)
		.break()
		.break().pause(1000)
		// .options({speed: 500})
		.type('I\'m an <a href="#project-div" span class="underline--magical">avid list maker</a></span>, <a href="#project-div" span class="underline--magical">question asker</a></span> and <a href="#project-div" span class="underline--magical">intermittent foodie</a> </span>')
		.break() .pause(1000)
		// .options({speed: 700})
		.type('and my projects reflect that.')
		.pause(1000)
		.break()
		.type("But there's so much more to my story than that ...")
		.break()
		.break()
		.pause(750)
		.type('<i class="fa fa-hand-o-down" aria-hidden="true"></i>')
		.break()
		.pause(750)
		.type('<i class="fa fa-hand-o-down" aria-hidden="true"></i>')
		.break()
		.pause(750)
		.type('<i class="fa fa-hand-o-down" aria-hidden="true"></i>')
		.break()
		.pause(750)
		.type('<i class="fa fa-hand-o-down" aria-hidden="true"></i>')
		.break()
		.pause(750)




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


}); //doc ready
