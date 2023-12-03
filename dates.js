let calendar = {};

calendar.currentdate = new Date();
calendar.selecteddate = new Date();

calendar.month = {};
calendar.month.days = 0;
calendar.month.firstday = 0;

calendar.monthlookup = [
    "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"
]

calendar.refreshdaymonths = function(){

    let date = calendar.selecteddate;

    date.setMonth(date.getMonth()+1)
    date.setDate(0)

    calendar.month.days = date.getDate();

    date.setDate(1)

    calendar.month.firstday = date.getDay(); 

}

calendar.refreshdisplay = function(){

    let date = calendar.selecteddate;
    document.getElementById("yeardisplay").innerHTML = date.getFullYear();
    document.getElementById("monthdisplay").innerHTML = calendar.monthlookup[date.getMonth()];
    
}

calendar.monthshiftdown = function(){
    calendar.selecteddate.setMonth(calendar.selecteddate.getMonth() - 1)
    calendar.refreshall();
}

calendar.monthshiftup = function(){
    calendar.selecteddate.setMonth(calendar.selecteddate.getMonth() + 1)
    calendar.refreshall();
}

calendar.genmonths = function(){
    temp = "";

    while(calendar.month.firstday < 0){
        calendar.month.firstday += 7
    }
    while(calendar.month.firstday > 6){
        calendar.month.firstday -= 7
    }

    for(let i = 0; i < 42; i++){
        if(calendar.month.firstday > i){
            temp += "<div style = \"animation-delay:"+(5*i)+"ms\" class = \"calendargrid-inactive-element\"></div>";
        }else if((calendar.month.firstday+calendar.month.days) > i){
            if((1+i-calendar.month.firstday) == calendar.currentdate.getDate() && calendar.currentdate.getMonth() == calendar.selecteddate.getMonth()  && calendar.currentdate.getYear() == calendar.selecteddate.getYear()){
                temp += "<div style = \"animation-delay:"+(5*i)+"ms\" onclick = \"calendar.dayclick("+(1+i-calendar.month.firstday)+");\" class = \"calendargrid-element-today\">"+(1+i-calendar.month.firstday)+"</div>";
            }else{
                temp += "<div style = \"animation-delay:"+(5*i)+"ms\" onclick = \"calendar.dayclick("+(1+i-calendar.month.firstday)+");\" class = \"calendargrid-element\">"+(1+i-calendar.month.firstday)+"</div>";
            }
        }else{
            temp += "<div style = \"animation-delay:"+(5*i)+"ms\" class = \"calendargrid-inactive-element\"></div>";
        }
    }

    document.getElementById("calendargrid").innerHTML = temp;
}

//Shift Starting Day LEFT
calendar.ssdleft = function(){
    calendar.month.firstday--;
}
calendar.ssdright = function(){
    calendar.month.firstday++;
}
calendar.ssdreset = function(){
    calendar.refreshdaymonths();
}

calendar.dayclick = function(day){
    dialog("warning-wide",calendar.monthlookup[calendar.selecteddate.getMonth()]+" "+day+", "+calendar.selecteddate.getFullYear());
}

calendar.refreshall = function(){
    calendar.refreshdaymonths();
    calendar.refreshdisplay();
    calendar.genmonths();
    dastart(dasval);
}

window.onload = function(){
    calendar.refreshall();
}