var sensorTable = $("#sensorTable").DataTable({});
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/sensor/list",
        success: function (data) {
            var res = JSON.parse(data);
            jQuery.each(res,function (i, key) {
                sensorTable.row.add(convert(key));
            });
            sensorTable.draw(true);
        },
        error: function (e) {
            console.log(e);
        }
    })
});

function convert(key) {
    var row = [];
    row.push(key.id);
    row.push(key.temp);
    row.push(key.humid);
    row.push(moment(key.time).format("DD-MM-YYYY hh:mm:ss"));
    return row;
}