function TestCode(){
	var Code = document.getElementById("Code").value;
	try  {
			eval(Code);
	}

	catch(exception) {
		alert(exception);
	}
}
		
function CleanAll(){
	var Code = document.getElementById("Code");
	Code.value="";
}

function $(n){
	return document.getElementById(n);
}

function getContext(){
	return $("canvas").getContext("2d");
}

function init(){//初始化屏幕
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
	
	
	/*
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
	*/
	var pic = new Image();
	//pic.src = "pic.png";
	
	pic.onload = function(){
	
		/*
			img	规定要使用的图像、画布或视频。
			sx	可选。开始剪切的 x 坐标位置。
			sy	可选。开始剪切的 y 坐标位置。
			swidth	可选。被剪切图像的宽度。
			sheight	可选。被剪切图像的高度。
			x	在画布上放置图像的 x 坐标位置。
			y	在画布上放置图像的 y 坐标位置。
			width	可选。要使用的图像的宽度。（伸展或缩小图像）
			height	可选。要使用的图像的高度。（伸展或缩小图像）
		*/
	
		//co.drawImage(pic,70,70,70,70,70,70,140,140);
		//co.drawImage(pic,0,0,70,70,150,150,280,280);
	}
	
}