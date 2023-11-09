let themearr = ["charcoal.css", "midnight.css", "embers.css", "marble.css", "calcite.css", "tomato.css", "pumpkin.css", "canary.css", "lemon.css", "highlighter.css", "sprout.css", "forest.css"];
let themeind = 0;



let dayabbrs = [
    ["S","M","T","W","T","F","S"],
    ["Su","M","Tu","W","Th","F","Sa"],
    ["Su","Mo","Tu","We","Th","Fr","Sa"],
    ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
]

let settings = {
    dayabbr:0
}

function updsettings(){
    for(let i = 0; i < 7; i++){
        document.querySelector("body > div.fullcalendargrid > div.calendardaygrid > div:nth-child("+(i+1)+")").
        innerHTML = dayabbrs[settings.dayabbr][i]
    }
}

function daup(){
    if(settings.dayabbr > dayabbrs.length - 1){
        settings.dayabbr = 3;
    }else{
        settings.dayabbr = settings.dayabbr + 1;
    }
    document.getElementById("dayabbrindicator").innerHTML = 
        dayabbrs[settings.dayabbr][1] + ", "+ 
        dayabbrs[settings.dayabbr][2] + ", "+
        dayabbrs[settings.dayabbr][3];
    
    updsettings();
}

function dadown(){
    if(settings.dayabbr < 1){
        settings.dayabbr = 0;
    }else{
        settings.dayabbr = settings.dayabbr - 1;
    }
    document.getElementById("dayabbrindicator").innerHTML = 
        dayabbrs[settings.dayabbr][1] + ", "+ 
        dayabbrs[settings.dayabbr][2] + ", "+
        dayabbrs[settings.dayabbr][3];
    
    updsettings();
}

function modeup(){
    themeind = themeind + 1;
    themeind = themeind % themearr.length;

    document.getElementById("themeindicator").innerHTML = themearr[themeind].split(".css")[0];

    document.querySelector("head > link:nth-child(1)").href = "themes/"+themearr[themeind];
}
function modedown(){
    themeind = themeind - 1;
    if(themeind < 0){themeind = themearr.length - 1}
    themeind = themeind % themearr.length;

    document.getElementById("themeindicator").innerHTML = themearr[themeind].split(".css")[0];

    document.querySelector("head > link:nth-child(1)").href = "themes/"+themearr[themeind];
}

function openmenu(){
    document.getElementById("menu").showModal()
    document.getElementById("menu").classList.remove("dialog-closed")
    document.getElementById("menu").classList.add("dialog-open")
}

function closemenu(){
    document.getElementById("menu").close()
    document.getElementById("menu").classList.remove("dialog-open")
    document.getElementById("menu").classList.add("dialog-closed")
}