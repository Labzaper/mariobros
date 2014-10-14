$(document).ready(function(){
	$(document).keydown(function(key){
		switch(parseInt(key.which,10)){
			case 38:
				// Arriba
				$(".caja_mario").animate({top:"-=110px"},"fast");
				$(".caja_mario").effect("shake",{distance:6},{direction:"down"},250);
				$(".caja_mario").animate({top:"+=110px"},"slow");
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
				$(".caja_mario").animate({top:"-=240px", left:'+=60px', opacity:'0.8', width:'50px'},"fast");
				$(".caja_mario").animate({top:"+=240px", left:'+=40px', opacity:'1', width:'55px'},"slow");		
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

	$(".caja_mario").draggable({
		cursor:'move',
		containment:'.escena',
		stop: handleDragStop
	});

	function handleDragStop(event, ui){
		var offsetXPos = parseInt( ui.offset.left );
  		var offsetYPos = parseInt( ui.offset.top );

  		$(".caja_mario").animate( {
  			top: '360px',
  			left: offsetXPos
  		}, 1500 );
  		$(".caja_mario").toggle("explode");
  		
  		var styles = {
  			// border: "1px solid black",
  			// background: "#FF0000",
  			animation: "spin 1s linear infinite"
  		};
  		$(".caja_mario").css(styles);

  		// $(".caja_mario").css("border","1px solid black");
  		
  		//alert("Game Over!");
	};

});