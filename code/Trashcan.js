function showTrashcan(){
    var style = document.querySelector("#trashcan")
    var trashcan = document.getElementById("trashcan");
    var trashcanStyle =getComputedStyle(style);
    if(trashcanStyle.right==="-300px"){
        trashcan.style.right="0";
    }
    else{
        trashcan.style.right="-300px";
    }
    trashcan.style.transition="1s";
}