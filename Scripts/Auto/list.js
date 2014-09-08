$(document).ready(function () {
    // ページを読み込んでその値を設定する
    var url = "http://www.hiro3-soft.com/list.html";

    $.ajax({ url: url, dataType: "html" }).success(function (data) {
        var $html = $($.parseHTML(data));
        var title1 = $html.filter("#list-category1-title").text();
        var title2 = $html.filter("#list-category2-title").text();

        var c1 = $html.filter("#list-category1").html();
        $("#list-category1").html(c1);
        $("#list-category1-title").text(title1);

        var c2 = $html.filter("#list-category2").html();
        $("#list-category2").html(c2);
        $("#list-category2-title").text(title2);
    });
});