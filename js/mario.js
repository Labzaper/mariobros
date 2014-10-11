$(document).ready(function(){
	$(document).keydown(function(key){
		switch(parseInt(key.which,10)){
			case 38:
				// Arriba
				$(".caja_mario").animate({top:"-=90px"},"fast");
				$(".caja_mario").animate({top:"+=90px"},"slow");
				$(".caja_mario").addClass("resaltar");
				break;
			case 39:
				// Derecha
				$(".caja_mario").animate({left:"+=35px"},"fast");
				$(".caja_mario").removeClass("resaltar");
				$(".caja_mario").removeClass("flipped");
				break;
			//case 40:
				// Abajo
				//$(".caja_mario").animate({top:"+=35px"},"fast");
				//$(".caja_mario").removeClass("resaltar");
				//break;
			case 37:
				// Izquierda
				$('.caja_mario').animate({left:'-=35px'},"fast");
				$(".caja_mario").removeClass("resaltar");
				$(".caja_mario").addClass("flipped");
				break;
			case 13: // tecla Enter
				$(".caja_mario").removeClass("flipped");
				$(".caja_mario").animate({top:"-=220px", left:'+=50px', opacity:'0.8', width:'50px'},"fast");
				$(".caja_mario").animate({top:"+=220px", left:'+=35px', opacity:'1', width:'55px'},"slow");		
				break;	
			case 65: //letra a
				$('#fireball').fadeIn('fast');
				$('#fireball').animate({left:'+=200px'},'fast');
				$('#fireball').fadeOut('slow');
				$('#fireball').css({"left":"13px","top":"22px"});
				break;
		}
	});
	$(".caja_mario").dblclick(function(){
		$("mario").removeClass("flipped");
		$(this).animate({top:"-=200px", opacity:'0.7', width:'50px'},"fast");
		$(this).animate({top:"+=200px", left:'+=45px', opacity:'1', width:'55px'},"slow");
	});
});