// 主函数
function hungry(food) {
    //每分钟减少饥饿值1
    setInterval(reduceHungry(),1000*60);

    //是否喂食
    if(food === apple || food === cake ||food ===rice){
        addFood(food); 
        tamago.isEating = 0;
    }
}

function reduceHungry() {
    if(tamago.hungry > 15){
        tamago.hungry --;
    }else{
        tamago.hungry = 15;
    }
}

function addFood(food) {
    if(food === apple){
        if(tamago.hungry <= 85){
            tamago.hungry += 15;
            tamago.isEating = 1;
        }else{
            tamago.hungryy = 100;
        }
    }

    if(food === cake){
        if(tamago.hungry <= 75){
            tamago.hungry += 25;
            tamago.isEating = 1;
        }else{
            tamago.hungry = 100;
        }
    }

    if(food === rice){
        if(tamago.hungry <=65 ){
            tamago.hungry += 35;
            tamago.isEating = 1;
        }else{
            tamago.hungry = 100;
        }
    }

}