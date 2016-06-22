$(document).ready(function(){

    $(".title").hover(function() {
	$(this).css("color", "white");
    }, function() {
	if($(this).parent().children(".content").height() == 0) {
	    $(this).css("color", "black");
	}
    });
    
    $(".title").click(function(){
	var height = $(this).parent().children(".content").children("p").height();
	if($(this).parent().children(".content").height() == 0){
	    height = height.toString() + 'px';

	    /* Reset styling of all posts */
	    $(".title").css("color","black");
	    $(".content").css({"height": "0px", "color": "#5a5858"});

	    /* Set this post's styling */
	    $(this).css('color','white');
	    $(this).parent().children(".content").css({'height': height, 'color':'white'});
	/* On unclick */    
	} else {
	    $(this).css('color', 'black');
	    $(this).parent().children(".content").css({'height': '0px', 'color':'#5a5858'});
	}
    });

    $(".navitm").hover(function(){
	if($(this).children(".navmnu").length > 0){
	    $(this).css({"height":$(this).children(".navmnu").height()+35,
			 "border-bottom-left-radius":"5px",
			 "border-bottom-right-radius":"5px"});
	}
    }, function() {
	$(this).css({"height":"30px","border-radius":"0px"});
    });

    $("#resume_button").click(function() {
	if($(this).children("#doc_image").attr("src") == "imgs/doc_dark.png"){
	    $(this).children("img").attr("src","imgs/doc.png");
	    $(this).children("#doc_image").css({"animation":"null",
						"opacity":"1"});
	    $(this).parent().children("#triangle").css(
		"border-top","25px solid #272626");
	    $("#resume_frame_wrapper").css({"height":"800px","top":"-5px",
					    "width":"850","border-radius":"10px"});
	} else {
	    $(this).children("img").attr("src","imgs/doc_dark.png");
	    $(this).children("#doc_image").css({"animation":"doc_image 5s infinite",
						"opacity":"0"});
	    $(this).parent().children("#triangle").css(
		"border-top","5px solid #272626");
	    $("#resume_frame_wrapper").css({"height":"0px","width":"0px",
					    "border-radius":"100%"});
	}
    });
});
