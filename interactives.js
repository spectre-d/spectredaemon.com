$(document).ready(function(){

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
	    $(this).css({"height":$(this).children(".navmnu").height()+35});
	}
    }, function() {
	$(this).css({"height":"30px"});
    });

/*    $(".navitm").mouseout(function() {
	$(this).css({"height":"30px"});
    });*/
});
