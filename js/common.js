
var picState = 0;

//isPicLoaded=0(loader.js)
window.onload = function(){
	
	var past = Date.now();
	while(!isPicLoaded){//等待图片加载完毕
		if(isPicLoaded){
			break;
		}
		else if( (Date.now()-past)/1000 > 4 ){//防止等待时间过长
			break;
		}
	}
	
	init();
	
}


var mainDrawingTimer = null;
function init(){//初始化屏幕
	
	setEvent();
	draw();
	
	mainDrawingTimer = setInterval(function(){//启动动画
		draw();
		
	},20);
	
	setInterval(function(){
		
		reduceHungry()
		reduceClean()
		reduceHappy()
	}, 1000*60);
	
	setInterval(function(){
		if(picState === 1){
			picState = 0;
		}
		else{
			picState++;
		}
	}, 1000);
	
}

function drawMatrix(){
	
	var c = $("canvas");
	var co = getContext();
	
	co.fillStyle = "rgb(140,188,176)";
	co.fillRect(0,0,c.width,c.height);
	co.fill();
	
	co.strokeStyle = "rgb(153,153,153)";
	co.lineWidth = 1;
	co.lineCap = 'square';
	co.beginPath();
	for(var t = 0;t <c.width;t+=10){
		co.moveTo(t, 0);
		co.lineTo(t, c.height);
	}
	for(var t = 0;t <c.height;t+=10){
		co.moveTo(0,t);
		co.lineTo(c.width,t);
	}
	co.closePath();
	co.stroke();
	
}

function $(n){
	return document.getElementById(n);
}

function getContext(){
	return $("canvas").getContext("2d");
}