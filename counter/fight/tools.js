document.getElementById("coin").addEventListener("click",coin);
document.getElementById("dice").addEventListener("click",dice);

function changeOpacity(way,elem,start,end,speed){
    let id = null;
    let pos = start;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame(){
        if(pos == end){
            clearInterval(id);
        }
        else {
            pos += speed * way;
            elem.style.opacity = pos;
        }
    }
}

function coin(){
    let val = Math.floor(Math.random() * 2);
    if(val == 0) {
        document.getElementById("coinv").innerHTML = "Pile";
    }else {
        document.getElementById("coinv").innerHTML = "Face";
    }
    document.getElementById("coini").src = "../../img/coin" + val + ".png"
}

function dice(){
    let val = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dicev").innerHTML = val;
    document.getElementById("dicei").src = "../../img/dice" + val + ".png"
}