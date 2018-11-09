
var images = [];
var imagesName = [];
var isPicLoaded = 0;

function preLoad(){
	for (i = 0; i < arguments.length; i++) {
		
		images[i] = new Image()
		images[i].src = "img/" + arguments[i]
		imagesName.push(arguments[i]);
		
	}
}

preLoad(

	"banner.png",
	"pic.png",
	"play.png",
	"food.png",
	"clean.png",
	"rabbit.png"

)

function pic(name){
	
	return images[imagesName.indexOf(name)];
	
}

pic(imagesName[images.length-1]).onload = function(){//最后一张图片加载完成
	isPicLoaded  = 1;
}