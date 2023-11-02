function togglemode(){
    if(document.querySelector("head > link:nth-child(1)").href.split("/")[document.querySelector("head > link:nth-child(1)").href.split("/").length - 1] == "darkmode.css"){
        document.querySelector("head > link:nth-child(1)").href = "lightmode.css";
        document.querySelector("body > h1:nth-child(4) > a").innerText = "change to dark mode";
    }else{
        document.querySelector("head > link:nth-child(1)").href = "darkmode.css";
        document.querySelector("body > h1:nth-child(4) > a").innerText = "change to light mode";
    }
}