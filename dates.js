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

    for(let i = 0; i > 42; i++){
        if(i<7){}
    }

    document.getElementById("calendargrid").innerHTML = 
}

calendar.refreshall = function(){
    calendar.refreshdaymonths();
    calendar.refreshdisplay();
    //calendar.genmonths();
}

calendar.refreshall();