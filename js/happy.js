
var ball = 20;
var TV = 25;
var playing = 30;

function happy(doing){
    
    //是否玩耍
    if(doing === ball || doing === TV || doing === playing){
        play(doing); 
        tamago.isHappying = 0;
    }
}



function reduceHappy(){//每分钟下降心情值
    if(tamago.happy > 0){
        tamago.happy --;
    }else{
        tamago.happy = 0;
    }
}
// setInterval(reduceHappy(), 1000 * 60);

function play(doing){
    if(doing === ball){
        if(tamago.happy <= 80){
            tamago.happy += 20;
            tamago.isHappying = 1;
        }else{
            tamago.happy = 100;
        }
    }

    if(doing === TV){
        if(tamago.happy <= 75){
            tamago.happy += 25;
            tamago.isHappying = 1;
        }else{
            tamago.happy = 100;
        }
    }

    if(food === rice){
        if(tamago.happy <=65 ){
            tamago.happy += 35;
            tamago.isHappying = 1;
        }else{
            tamago.happy = 100;
        }
    }

}