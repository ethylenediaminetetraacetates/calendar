let notif = {};

notif.html = {};

notif.html.default = ""; // expand later 

notif.stack = [];
notif.config = {};
notif.config.showtime = 2000;

notif.add = function(msg){

    document.getElementById("notifstack").appendChild()

    notif.stack.push(
        {msg:msg, time: new Date()}
    );

}