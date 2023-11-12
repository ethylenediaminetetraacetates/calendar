let calendar = {};

calendar.currentdate = new Date();
calendar.selecteddate = new Date();

calendar.month = {};
calendar.month.days = 0;
calendar.month.firstday = 0;

calendar.refreshdaymonths = function(){

    let date = calendar.selecteddate;

    date.setMonth(date.getMonth()+1)
    date.setDate(0)

    calendar.month.days = date.getDate();

    date.setDate(1)

    calendar.month.firstday = date.getDay(); 

}

calendar.refreshdaymonths();