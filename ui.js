let themearr = ["charcoal.css", "midnight.css", "embers.css", "marble.css", "calcite.css", "tomato.css", "pumpkin.css", "canary.css", "lemon.css", "highlighter.css", "sprout.css", "forest.css"];
let themeind = 0;

let fontarr = ["rounded.css","sans-serif I.css","sans-serif II.css","sans-serif III.css","sans-serif IV.css","serif.css", "monospace.css", "playful.css"]
let fontind = 0;

let totaldayabbrs = [
    ["S","M","T","W","T","F","S"],
    ["Su","M","Tu","W","Th","F","Sa"],
    ["Su","Mo","Tu","We","Th","Fr","Sa"],
    ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
]

let dayabbrs = [
    ["S","M","T","W","T","F","S"],
    ["Su","M","Tu","W","Th","F","Sa"],
    ["Su","Mo","Tu","We","Th","Fr","Sa"],
    ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
]

let dasval = 0;

let loaded = false;

function checkload(){
    if(loaded){
        document.getElementById("loaderdialog").classList.remove("loaderdialog");
        document.getElementById("loaderdialog").classList.add("loaderdialogremove");
        document.body.classList.remove("small");
        document.body.classList.add("tempbodyzoom");
        setTimeout(function(){
            document.getElementById("loaderdialog").close();
        },500);
        return;
    }else{
        setTimeout(checkload, 100);
    }
}

function loading(){
    document.body.classList.add("small");
    document.getElementById("loaderdialog").showModal();
    checkload();
}
loading();



function dastart(i){

    dasval = i;

    dayabbrs = JSON.parse(JSON.stringify((totaldayabbrs))); //workaround to copy without refs

    console.log(dayabbrs);

    document.getElementById("dayabbrindicator").innerHTML = 
    dayabbrs[settings.dayabbr][1] + ", "+ 
    dayabbrs[settings.dayabbr][2] + ", "+
    dayabbrs[settings.dayabbr][3];

    j=0;

    calendar.ssdreset();
    while(j!=i){
        if(j>i){
            calendar.ssdright();
            j--;
            for(let x = 0; x < 4; x++){
                dayabbrs[x].push(dayabbrs[x].shift())
            }
        }else if(j<i){
            calendar.ssdleft();
            j++;
            for(let x = 0; x < 4; x++){
                dayabbrs[x].unshift(dayabbrs[x].pop())
            }
        }
    }
    updsettings();
    calendar.genmonths()
}

let settings = {
    dayabbr:0,
    lssave:true,
    font:"rounded.css",
    palette:"charcoal.css"
}

function lssavetoggle(){
    settings.lssave = !settings.lssave;
    document.getElementById("lssavetoggle").classList.remove("active")
    document.getElementById("lssavetoggle").classList.remove("inactive")

    settings.lssave ? temp="active" : temp="inactive"

    document.getElementById("lssavetoggle").classList.add(temp)

    
}

function updsettings(){
    for(let i = 0; i < 7; i++){
        document.querySelector("body > div.fullcalendargrid > div.calendardaygrid > div:nth-child("+(i+1)+")").
        innerHTML = dayabbrs[settings.dayabbr][i]
    }
}

function daup(){
    if(settings.dayabbr > dayabbrs.length - 2){
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

function fontup(){
    fontind = fontind + 1;
    fontind = fontind % fontarr.length;

    document.getElementById("fontindicator").innerHTML = fontarr[fontind].split(".css")[0];

    document.getElementById("fontcss").href = "themes/fonts/"+fontarr[fontind];
}
function fontdown(){
    fontind = fontind - 1;
    if(fontind < 0){fontind = fontarr.length - 1}
    fontind = fontind % fontarr.length;

    document.getElementById("fontindicator").innerHTML = fontarr[fontind].split(".css")[0];

    document.getElementById("fontcss").href = "themes/fonts/"+fontarr[fontind];
}

function modeup(){
    themeind = themeind + 1;
    themeind = themeind % themearr.length;

    document.getElementById("themeindicator").innerHTML = themearr[themeind].split(".css")[0];

    document.getElementById("palettecss").href = "themes/palettes/"+themearr[themeind];
}
function modedown(){
    themeind = themeind - 1;
    if(themeind < 0){themeind = themearr.length - 1}
    themeind = themeind % themearr.length;

    document.getElementById("themeindicator").innerHTML = themearr[themeind].split(".css")[0];

    document.getElementById("palettecss").href = "themes/palettes/"+themearr[themeind];
}

function openmenu(){
    document.getElementById("menu").classList.replace("dialog-closed", "dialog-open")
    document.getElementById("menu").showModal()
}

function closemenu(){
    document.getElementById("menu").classList.replace("dialog-open", "dialog-closed")
    setTimeout(function(){
        document.getElementById("menu").close()
    },100)

}

function scareshake(ms,amplitude){
    var temp = []
    shaker = 1

    a=setInterval(function(){
        document.body.style.rotate = shaker*(Math.random()*amplitude)+"deg"
        document.getElementById("menu").style.rotate = shaker*(Math.random()*amplitude)+"deg"
        shaker = shaker * -1
    },20)
    
    console.log("pushing " + a)
    temp.push(a)

    setTimeout(function(){

        console.log("clearing " + temp[temp.length-1])

        clearInterval(temp[temp.length-1])

        temp.shift();
        document.body.style.rotate = "0deg"
        document.getElementById("menu").style.rotate = "0deg";
    },ms)
}

function dialog(id,title){
    document.getElementById(id+"-title").innerHTML = title
    document.getElementById(id).showModal()
}

function dialogclose(id){
    document.getElementById(id).close()
}

//RELative DiaLoG CLose
function reldlgcl(e){
    console.log(e.target);
    dialogclose(e.target.parentElement.id);
}