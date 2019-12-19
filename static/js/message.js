var socket = io();
$("#post").on('click',function () {
    var message = $("#message");
    socket.emit("message",message.val());
    message.val("");
});
socket.on("message",function (message) {
    console.log(message);
    $("#messages").append($("<p>").text(message));
});