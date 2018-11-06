function l(x,y,option,rgb){//x行y列
	var co = getContext();
	co.fillStyle = rgb?rgb:"rgb(90,102,66)";
	blockX = x * 10+1;
	blockY = y * 10+1;
	
	if(option===-1){
		co.fillRect(blockX,blockY,9,9);
	}
	else{
		co.fillRect(blockX,blockY+50,9,9);
	}
	
}

function p(x,rgb){//画斜对角线
	var co = getContext();
	var color = rgb?rgb:getGradientColor();//getRandomColor()
	for(var a = x-1; a >= 0;a--){
		l(a,x-a-1,-1,color);
	}
}

function q(x,rgb){//画横线
	var co = getContext();
	var color = rgb?rgb:getGradientColor();//getRandomColor()
	for(var a = 0; a <x;a++){//每列从上到下
		
		for(var b=0;b<27;b++){//从左到右
			l(b,a,-1,color);
		}
		color = getGradientColor();//getRandomColor()
		
	}
}

var t = 0;



function strokeColorScreen(){
	
	setInterval(function(){
	
		if(t<=54){
			p(t)
		}
		
		t++
	
	},10);
	
	//clearInterval(timer);
	
}
strokeColorScreen()


var z = 0;
function strokeScreen(speed,rgb){//清屏
	
	if(z<=54){
	
		if(rgb==="random"){
			p(z);
		}
		else{
			rgb = rgb?rgb:"rgb(90,102,66)";
			p(z,rgb);
		}
		
		
		z++;
		var timer = setTimeout(function(){
			strokeScreen(speed,rgb)
		}, speed);
		
	
	}
	else{
		z = 0;
		clearTimeout(timer);
	}
	
}
//strokeScreen(10,"random");
//strokeScreen(20,"rgb(140,188,176)");
//strokeScreen(20);