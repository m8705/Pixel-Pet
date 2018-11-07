


function draw(){
	
	drawMatrix();
	drawStateBanner();
	drawPet();

}


function drawStateBanner(){

	var co = getContext();
	
	co.drawImage(pic("banner.png"), 10, 10);
	
	co.font = "20px Arial";
    co.fillStyle = "black";
    co.textBaseline = "middle";
	
	//bug:间距未确定
    co.fillText(tamago.hungry,50,25);
	co.fillText(tamago.clean,140,25);
	co.fillText(tamago.happy,230,25);

}

function drawPet(){

	l(7,2)
	l(8,2)
	l(9,2)
	l(10,2)
	l(11,2)
	
	l(6,3)
	l(12,3)
	
	l(3,4)
	l(4,4)
	l(5,4)
	l(7,4)
	l(11,4)
	l(13,4)
	
	l(2,5)
	l(14,5)
	
	l(3,6)
	l(4,6)
	l(5,6)
	l(14,6)
	
	l(2,7)
	l(14,7)
	
	l(3,8)
	l(4,8)
	l(5,8)
	l(14,8)
	
	l(5,9)
	l(10,9)
	l(12,9)
	l(15,9)
	
	l(5,10)
	l(10,10)
	l(12,10)
	l(15,10)
	
	l(5,11)
	l(11,11)
	l(15,11)
	
	l(6,12)
	l(14,12)
	
	l(7,13)
	l(9,13)
	l(10,13)
	l(11,13)
	l(13,13)
	
	l(7,14)
	l(9,14)
	l(11,14)
	l(13,14)
	
	l(8,15)
	l(12,15)

}



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
//strokeColorScreen()


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