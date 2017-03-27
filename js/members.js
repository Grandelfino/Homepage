/**
 * Created by junpei on 2016/12/30.
 */
$(function () {
    $(".js-group-detail").hide();

    $(".js-detail-button").click(
        function () {
            if ( $($(this).attr("detail")).is(':visible') ) {
                $(this).text("詳細を見る");
            }else{
                $(this).text("詳細を隠す");
            }
            $($(this).attr("detail")).slideToggle();
        }
    );
});