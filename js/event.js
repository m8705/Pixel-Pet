

function setEvent(){
	
	document.onkeydown = function(e){
		switch(e.keyCode){
			case 17://Ctrl
				
			
			case 65://A
				$("select").style.background = "url('" + "img/button.png" + "') -64px 0px no-repeat";
				selectEvent();
				
				
				break;
			case 83://S
				$("confirm").style.background = "url('" + "img/button.png" + "') -64px 0px no-repeat";
				confirmEvent();
				
				
				break;
			case 68://D
				$("cancel").style.background = "url('" + "img/button.png" + "') -64px 0px no-repeat";
				cancelEvent();
				
				
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
	
	$("select").onclick = selectEvent;
	$("confirm").onclick = confirmEvent;
	$("cancel").onclick = cancelEvent;
	
}

function changeMainSelection(){
	
	if(Game.blur === "Food"){
		Game.blur = "Clean";
	}
	else if(Game.blur === "Clean"){
		Game.blur = "Play";
	}
	else if(Game.blur === "Play"){
		Game.blur = "Food";
	}
	else{
		Game.blur = "Food";
	}
	
}

function selectEvent(){
	if(Game.scene === "Main"){
		changeMainSelection();
	}
	else{
		
		changeObjectSelection();
	}
}

function confirmEvent(){
	if(Game.scene === "Main" && Game.blur !== "None"){
		Game.scene = Game.blur;
	}
	else{
		var t = Game.pickObject
		switch(Game.scene){
			case "Food":
				if(t===0)hungry(food.apple);
				if(t===1)hungry(food.cake);
				if(t===2)hungry(food.rice);
				break;
			case "Clean":
				if(t===0)clean(object.bathe);
				if(t===1)clean(object.soap);
				break;
			case "Play":
				if(t===0)happy(doing.ball);
				if(t===1)happy(doing.TV);
				break;
		}
		
	}
}

function cancelEvent(){
	if(Game.scene !== "Main"){
		Game.scene = "Main";
	}
	else{
		Game.blur = "None";
	}
	Game.pickObject = 0;
}

function changeObjectSelection(){
	Game.pickObject++;
	
	if(Game.blur === "Food"){
		
		Game.pickObject = Game.pickObject % 3;
		console.log(Game.pickObject)
	}
	else if(Game.blur === "Clean"){

		Game.pickObject = Game.pickObject % 2;
		console.log(Game.pickObject)
	}
	else if(Game.blur === "Play"){

		Game.pickObject = Game.pickObject % 2;
		console.log(Game.pickObject)
	}
	
}



