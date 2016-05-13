/**
 * Created by lenovo on 2016/5/13.
 */
//Navigator effect
$(".nav li").click(function () {
    $(this).addClass("active")
        .siblings().removeClass("active");
});