$(document).ready(function () {
	var highlight;

$(window).scroll(function(){
//when 158 is reached, make languagebar 
        if($(document).scrollTop() > 160) {
          $('.language_box').css( "position", 'fixed');
          $('.spacer').css( "display", 'block');
          var newPos = $(document).scrollTop();
          console.log(newPos);
          $('.language_box').css( "top", 16);

        }

      else {
          $('.language_box').css( "position", 'relative');
          $('.spacer').css( "display", 'none');
          $('.language_box').css( "top", 0);
        }
        })


	$(".box2, .circleBase").hover(function(){
		$(this).css("background-color", "rgba(30,144,255, 1)");
	}, function(){
		$(this).css("background-color", "#8c8c8c");
	});

	$(".subsection").hover(function(){
    var highlightable = true;
		switch (this.id) {
		case "Mitre": highlight = Mitre;
		break;
		case "Metroland": highlight = Metroland;
		break;
		case "BrandSpark": highlight = BrandSpark;
		break;
		case "HatetheWait": highlight = HatetheWait;
		break;
		case "CubicleCoder": highlight = CubicleCoder;
		break;
		case "Education": highlightable = false;
		break;
		case "Leadership": highlightable = false;
		break;
	}
    if (highlightable){
		$(this).css("background-color", "rgba(30,144,255, 0.5)");
		$(highlight).css("background-color", "rgba(30,144,255, 1)");
  }
	}, function(){
		$(highlight).css("background-color", "#8c8c8c");
		$(this).css("background-color", "transparent");
	});
});




Mitre = "#Ruby, #PHP, #HTML, #CSS, #JS, #SQL, #RubyonRails, #Linux, #MacOS, #Git, #SequelPro, #SublimeText";
Metroland = "#PHP, #HTML, #CSS, #JS, #SQL, #Python, #Yii, #Linux, #MacOS, #Git, #SequelPro, #Selenium, #SublimeText";
BrandSpark = "#PHP, #HTML, #CSS, #JS, #Git";
HatetheWait = "#PHP, #HTML, #CSS, #JS, #Git, #MacOS, #Linux, #SublimeText";
CubicleCoder = "#Java, #HTML, #CSS, #JS, #Git, #MacOS, #Linux, #SublimeText";
Education = "#C, #MacOS, #Linux, #SublimeText";
Leadership = "";