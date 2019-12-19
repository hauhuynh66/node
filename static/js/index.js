$("#post").on('click',function () {
    var temp = $("#temp").val();
    var humid = $("#humid").val();
    $.ajax({
        type : "GET",
        url : "/sensor/add",
        data : {
            t : temp,
            h : humid
        },
        success : function (data) {
            console.log(data);
        },
        error : function (e) {
            console.log(e);
        }
    });
});