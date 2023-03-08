function itsTimeToDuel(){
    let p1 = $("#name1").val();
    if(p1 == "" || p1 == undefined){
        p1 = "Joueur 1";
    }
    let p2 = $("#name2").val();
    if(p2 == "" || p2 == undefined){
        p2 = "Joueur 2";
    }
    let lp = $("#lps").val();
    let type = $('input[name="count"]:checked').val();
    let cnt = undefined;
    switch (type){
        case "timer":
            cnt = $("#timerv").val();
            break;
        case "chess":
            cnt = [$("#nexussv").val(),$("#nexuspv").val()];
            break;
        case "chrono":
            cnt = 0;
            break;
        default:
            console.log("ERR - unknown value");
            break;
    }
    console.log(p1,p2,lp,type,cnt);
    window.location.href = "fight";
    return false;
}