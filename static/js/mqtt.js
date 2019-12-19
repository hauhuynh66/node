$("#publish").on('click',function () {
    var topic = $("#topic").val();
    var message = $("#message").val();
    $.ajax({
        type : "POST",
        url : "/mqtt/publish",
        contentType : "application/json",
        data : JSON.stringify({
            topic : topic,
            message : message
        }),
        success : function (data) {
            console.log(data);
        },
        error : function (e) {
            console.log(e);
        }
    })
});