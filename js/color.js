var getRandomColor = function(){
	return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6); 
}

var usedColor = 0;
function getGradientColor(){
	
	var r = 255;
	var g = 0;
	var b = 0;
	
	var step = 96;
	var max = 223;
	
	var result = [];
	
	//r->g->b
	
	//r->r+g->
	//g->g+b->
	//b->b+r
	
	for(g=0;g<max;g+=step){//r+g
		result.push("rgb("+r+","+g+","+b+")")
	//	console.log("%cHello world,欢迎您！","color:rgb("+r+","+g+","+b+")" );
	}
	for(r=max+1;r>0;r-=step){//g
		result.push("rgb("+r+","+g+","+b+")")
	//	console.log("%cHello world,欢迎您！","color:rgb("+r+","+g+","+b+")" );
	}
	
	for(b=0;b<max;b+=step){//g+b
		result.push("rgb("+r+","+g+","+b+")")
	//	console.log("%cHello world,欢迎您！","color:rgb("+r+","+g+","+b+")" );
	}
	for(g=max+1;g>0;g-=step){//b
		result.push("rgb("+r+","+g+","+b+")")
	//	console.log("%cHello world,欢迎您！","color:rgb("+r+","+g+","+b+")" );
	}
	
	for(r=0;r<max;r+=step){//b+r
		result.push("rgb("+r+","+g+","+b+")")
	//	console.log("%cHello world,欢迎您！","color:rgb("+r+","+g+","+b+")" );
	}
	for(b=max+1;b>0;b-=step){//r
		result.push("rgb("+r+","+g+","+b+")")
	//	console.log("%cHello world,欢迎您！","color:rgb("+r+","+g+","+b+")" );
	}
	
	if(usedColor===((223+1)/step*6)-1){
		usedColor = 0;
	}
	
	usedColor++;
	
	return result[usedColor];
	
}