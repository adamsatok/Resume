$(document).ready(function () {
	$(".box2, .circleBase").hover(function(){
		$(this).css("background-color", "rgba(30,144,255, 1)");
	}, function(){
		$(this).css("background-color", "#8c8c8c");
	});

	$(".subsection").hover(function(){
		$(this).css("background-color", "rgba(30,144,255, 0.5)");
	}, function(){
		$(this).css("background-color", "transparent");
	});

	$("#Mitre").hover(function(){
		$(Mitre).css("background-color", "rgba(30,144,255, 1)");
	}, function(){
		$(Mitre).css("background-color", "#8c8c8c");
	});

	$("#Metroland").hover(function(){
		$(Metroland).css("background-color", "rgba(30,144,255, 1)");
	}, function(){
		$(Metroland).css("background-color", "#8c8c8c");
	});

	$("#BrandSpark").hover(function(){
		$(BrandSpark).css("background-color", "rgba(30,144,255, 1)");
	}, function(){
		$(BrandSpark).css("background-color", "#8c8c8c");
	});
	$("#HatetheWait").hover(function(){
		$(HatetheWait).css("background-color", "rgba(30,144,255, 1)");
	}, function(){
		$(HatetheWait).css("background-color", "#8c8c8c");
	});
	$("#CubicleCoder").hover(function(){
		$(CubicleCoder).css("background-color", "rgba(30,144,255, 1)");
	}, function(){
		$(CubicleCoder).css("background-color", "#8c8c8c");
	});
	$("#Education").hover(function(){
		$(Education).css("background-color", "rgba(30,144,255, 1)");
	}, function(){
		$(Education).css("background-color", "#8c8c8c");
	});
});


Mitre = "#Ruby, #PHP, #HTML, #CSS, #JS, #SQL, #RubyonRails, #Linux, #MacOS, #Git, #SequelPro, #SublimeText";
Metroland = "#PHP, #HTML, #CSS, #JS, #SQL, #Python, #Yii, #Linux, #MacOS, #Git, #SequelPro, #Selenium, #SublimeText";
BrandSpark = "#PHP, #HTML, #CSS, #JS, #Git";
HatetheWait = "#PHP, #HTML, #CSS, #JS, #Git, #MacOS, #Linux, #SublimeText";
CubicleCoder = "#Java, #HTML, #CSS, #JS, #Git, #MacOS, #Linux, #SublimeText";
Education = "#C, #MacOS, #Linux, #SublimeText";