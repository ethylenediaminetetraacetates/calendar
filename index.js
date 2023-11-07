let themearr = ["charcoal.css", "midnight.css", "embers.css", "marble.css", "calcite.css", "tomato.css", "pumpkin.css", "lemon.css", "highlighter.css", "sprout.css", "forest.css"];
let themeind = 0;

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
    document.querySelector("body > dialog").showModal()
    document.querySelector("body > dialog").classList.remove("dialog-closed")
    document.querySelector("body > dialog").classList.add("dialog-open")
}

function closemenu(){
    document.querySelector("body > dialog").close()
    document.querySelector("body > dialog").classList.remove("dialog-open")
    document.querySelector("body > dialog").classList.add("dialog-closed")
}
