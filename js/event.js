function setEvent(){
	
	document.onkeydown = function(e){
		switch(e.keyCode){
			case 65:
				$("select").className="button-active";
				break;
			case 83:
				$("confirm").className="active";
				break;
			case 68:
				$("cancel").className="active";
				break;
		}
	}
	
}

