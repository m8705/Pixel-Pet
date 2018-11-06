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
	
	draw();
	
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