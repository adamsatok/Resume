var delaylen = 500;
var spreadlen = 500;
$(document).ready(function(){
$("#btn1").click(function(){
		$(".animatedBox").animate({height: "150px"}, delaylen);
        $(".thickBorder").delay(delaylen).animate({width: "580px"}, spreadlen);
        $(".animatedBox").animate({width: "580px"}, spreadlen); 
        $(".introSubtext").delay(delaylen+spreadlen).animate({opacity: "1"}, spreadlen); 
    });
});