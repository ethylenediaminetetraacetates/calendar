let notif = {};

notif.html = {};

notif.stack = [];
notif.config = {};
notif.config.showtime = 2000;

notif.add = function(msg){

    n = document.getElementById("notifstack").appendChild(document.createElement("div"));
    n.classList.add("notification");
    n.classList.add("notif"+notif.stack.length);

    notif.stack.push(
        {msg:msg, time: new Date()}
    );

}