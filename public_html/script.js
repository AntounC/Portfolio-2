



$("document").ready(function(){
    $(".youtypewhatitis").css("background-color", "yellow");
 
    $('p:last').css({"background-color": "green", "color": "white"});
    $('#oneButton').bind('click', alertButtonClick);
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $('h1').bind('click', mouseClick);
            
}); 

function mouseOverMe() {
    $("h1").html("IT'S JOOSE N JAM TIME");
}

function mouseOutMe() {
    $('h1').html('SPR MLG WOOWWWWM SPR SANIC SPDDD');
}

function mouseClick() {
    $('p').html('SPR SMASH BORS 4 WIE YU N TREE D ES');

}

function alertButtonClick() {
    
}