/**
 * Created by junpei on 2017/02/20.
 */
$(function () {
    $(".button").click(
        function(){
            location.href = $(this).attr('linkto');
        }
    );
});