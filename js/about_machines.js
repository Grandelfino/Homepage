/**
 * Created by junpei on 2016/12/30.
 */
$(function () {
    $(".js-machine-detail").hide();

    $(".js-detail-button").click(
        function () {
            if ( $($(this).attr("detail")).is(':visible') ) {
                $(this).text("大会成績を見る");
            }else{
                $(this).text("大会成績を隠す");
            }
            $($(this).attr("detail")).slideToggle();
        }
    );
});