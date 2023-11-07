let themearr = ["charcoal.css", "midnight.css", "marble.css", "calcite.css", "tomato.css"];
let themeind = 0;

function togglemode(){
    themeind++;
    themeind = themeind % themearr.length;

    document.getElementById("themeindicator").innerHTML = "current theme: "+themearr[themeind].split(".css")[0]

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
