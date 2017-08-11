$(document).ready(function() {
	$('#fullpage').fullpage();

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
