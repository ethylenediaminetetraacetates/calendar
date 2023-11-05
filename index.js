function togglemode(){
    if(document.querySelector("head > link:nth-child(1)").href.split("/")[document.querySelector("head > link:nth-child(1)").href.split("/").length - 1] == "darkmode.css"){
        document.querySelector("head > link:nth-child(1)").href = "lightmode.css";
    }else{
        document.querySelector("head > link:nth-child(1)").href = "darkmode.css";
    }
}

function openmenu(){
    document.querySelector("body > dialog").showModal()
    document.querySelector("body > dialog").classList.remove("dialog-closed")
    document.querySelector("body > dialog").classList.add("dialog-open")
}