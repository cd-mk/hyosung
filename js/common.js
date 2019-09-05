$(function () {
    var idx;
    $('.gnb_list.off > li').on('mouseover', function () {
        //console.log("click check "+$(this).text());
        idx = $(this).index();
        $(".gnb_list.off > li").removeClass('active');
        $(".gnb_list.off > li").eq(idx).addClass('active');
    });

    var caption_txt = $(".txt_title").text();
    $(".sub_gnb li a").each(function () {
        var thisTxt = $(this).text();

        if (thisTxt == caption_txt) {
            $(".gnb_list.off > li").removeClass('active');
            $(this).parent().parent().parent().addClass("active");

            $(this).addClass("active");
        }
    });


});



function pcMenu() {
    $('.menu_trigger').on({
        'mouseenter click': function () {
            $(this).addClass('active');
            $(".gnb_bg").addClass("on").stop().animate({ "height": "254px" }, 500);
            $(".gnb_list li").addClass("active");

        }, 'mouseleave focusout': function () {
            $(this).removeClass('active');
            $(".gnb_list li").removeClass("active");
            $(".gnb_bg").removeClass("on").stop().animate({ "height": "0" }, 600);
        }
    });

}




var setDatePicker = function () {
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    });
    $('.input_date input').datepicker();
};



var init = function () {
    if ($('.input_date').length) setDatePicker();
    pcMenu();  
};

$(document).ready(init);
