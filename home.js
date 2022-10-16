let toogleState = false;

let toogleNav = function (){
    let element = document.getElementById ('navbar-nav')
    if(toogleState == false){
        element.style.display= 'flex';
        toogleState = true;
    }else{
        element.style.display= 'none';
        toogleState = false;
    }
}