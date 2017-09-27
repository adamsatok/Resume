$(document).ready(function () {
	var highlight;
	$(".box2").hover(function(){
		$(this).css("background-color", "rgb(204, 0, 0)");
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
    
		//$(this).css("margin", "30px 0px");
		//$(this).find('h5').css("font-size", "24px");
		$(this).css("border", "4px");
		if (highlightable){
			$(highlight).css("background-color", "rgb(204, 0, 0)");

  }
	}, function(){
		$(this).css("border-width", "0px");
		$(this).css("margin", "0");
		$(this).find('h5').css("font-size", "19px");
		$(highlight).css("background-color", "#8c8c8c");
	});
});

Mitre = "#Ruby, #PHP, #HTML, #CSS, #JS, #SQL, #RubyonRails, #Linux, #MacOS, #Git, #SequelPro, #SublimeText";
Metroland = "#PHP, #HTML, #CSS, #JS, #SQL, #Python, #Yii, #Linux, #MacOS, #Git, #SequelPro, #Selenium, #SublimeText";
BrandSpark = "#PHP, #HTML, #CSS, #JS, #Git";
HatetheWait = "#PHP, #HTML, #CSS, #JS, #Git, #MacOS, #Linux, #SublimeText";
CubicleCoder = "#Java, #HTML, #CSS, #JS, #Git, #MacOS, #Linux, #SublimeText";
Education = "#C, #MacOS, #Linux, #SublimeText";
Leadership = "";