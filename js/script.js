$(document).ready(function(){
    $("img").bind("click", function() {
        let src = ($(this).attr("src") === "/icon/Shape_7971.png")
        ? "/icon/Shape_783.png" : "/icon/Shape_7971.png";
        $(this).attr("src", src);
    });
});
