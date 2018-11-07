function setEvent(){
	
	document.onkeydown = function(e){
		switch(e.keyCode){
			case 65:
				$("select").style.background = "url('" + "img/button.png" + "') -64px 0px no-repeat";
				break;
			case 83:
				$("confirm").style.background = "url('" + "img/button.png" + "') -64px 0px no-repeat";
				break;
			case 68:
				$("cancel").style.background = "url('" + "img/button.png" + "') -64px 0px no-repeat";
				break;
		}
	}
	
	document.onkeyup = function(e){
		
		switch(e.keyCode){
			case 65:
				$("select").style.background = "url('" + "img/button.png" + "') 0px 0px no-repeat";
				break;
			case 83:
				$("confirm").style.background = "url('" + "img/button.png" + "') 0px 0px no-repeat";
				break;
			case 68:
				$("cancel").style.background = "url('" + "img/button.png" + "') 0px 0px no-repeat";
				break;
		}
		
	}
	
	$("select").onclick = function(){
		clearInterval(mainDrawingTimer);
		strokeColorScreen()
	}
	
	$("confirm").onclick = function(){
		clearInterval(mainDrawingTimer);
		strokeScreen(20);
	}
	
	$("cancel").onclick = function(){
		
	}
	
}

