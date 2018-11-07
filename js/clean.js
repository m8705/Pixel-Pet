//每分钟下降清洁度
// setInterval(reduceClean(), 1000 * 60);

function clean(object){
    // var bathe = 50;
    // var soap = 30;
    

    //是否洗澡
    if(object === bathe || object === soap){
        washing(object); 
        tamago.isCleaning = 0;
    }
}

function reduceClean(){
    if(tamago.clean > 0){
        let a = 0.5;
        tamago.clean = tamago.clean - a;
    }else{
        tamago.clean = 0;
    }
}

function washing(object){
    if(object === bathe){
        if(tamago.clean <= 50){
            tamago.clean += 50;
            tamago.isCleaning = 1;
        }else{
            tamago.clean = 100;
        }
    }

    if(object === soap){
        if(tamago.clean <= 70){
            tamago.clean += 30;
            tamago.isCleaning = 1;
        }else{
            tamago.clean = 100;
        }
    }

}