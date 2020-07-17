$(function(){
	$('.checkbox1').click(function(){
		$('.navigation').toggleClass('active');
	});
});

// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
var alertwin = getCookie("alertwin");
if (alertwin != "no") { 
    $(document).mouseleave(function(e){
        if (e.clientY < 10) {
            $(".popup__exit").fadeIn("fast");   
            $(".popup").addClass("active");
            // записываем cookie на 1 день, с которой мы не показываем окно
            var date = new Date;
            date.setDate(date.getDate() + 1);    
            document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();       
        }    
    });
    $(document).click(function(e) {
        if (($(".popup__exit").is(':visible')) && (!$(e.target).closest(".popup__exit .popup__inner").length)) {
            $(".popup__exit").hide();
            $(".popup").removeClass("active");
        }
    });  
}

    $('.tosite').click(function(e) {
    	$(".popup__exit").hide();
		$(".popup").removeClass("active");
    });

    $('.main__button.pink_phone, .anketa__popup').click(function() {
        $(".popup__form").addClass("active"); 
        $(".popup").addClass("active"); 
        $("html").addClass("overh");
        $(".popup__exit").hide();
    });

    $('.main__button.tosite').click(function() {
        $(".popup").removeClass("active");
        $("html").addClass("overh");
        $(".popup__exit").hide();
    });

    $('.close__popup').click(function() {
        $(".popup__form").removeClass("active"); 
        $(".popup").removeClass("active");
        $("html").removeClass("overh");
    });
    $('.navigation a').click(function() {
        $(".checkbox1").removeAttr("checked");
        $(".navigation").removeClass("active");
    });
$("a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
});