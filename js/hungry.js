
var apple = 15;
var cake = 25;
var rice = 35;

function hungry(food) {
    
    var hungry = 100;


    //是否喂食
    if(food === apple || food === cake ||food ===rice){
        addFood(food); 
        tamago.isEating = 0;
    }
}

function reduceHungry() {//每分钟减少饥饿值
    if(tamago.hungry > 15){
        tamago.hungry --;
    }else{
        tamago.hungry = 15;
    }
}
// setInterval(reduceHungry(),1000*60);

function addFood(food) {
    if(food === apple){
        if(tamago.hungry <= 85){
            tamago.hungry += 15;
            tamago.isEating = 1;
        }else{
            tamago.hungry = 100;
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
