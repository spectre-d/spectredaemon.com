function first_load()
{
    elements = ["title"];
    console.log('animate');
    
    if(first_visit() == 1){
	var ids = new Array(elements.length);
	ids[0]= document.getElementById(elements[0]).id;

	if(ids[0] == 'title'){
		ui = document.getElementById(ids[0]);
	    ui.style.animationName='header_pulse';
	    ui.style.animationIterationCount='1';
	    ui.style.animationTimingFunction='ease';
	    ui.style.animationDuration='1.66s';
	    ui.style.animationDelay='0.5s';
	}
    } else if(first_visit() == -1) {
	console.log("first_load: cookies are disabled by client navigator");
    } else {
	return;
    }
}

var lights = 1;

$(document).ready(function(){
/*    $("#profile_inner, #prof_back").animate({right:"25px"}, 1500, function() {
	$(".light").css('background-color', 'white');
    });
    $("#prof_topper").animate({right:"0px"}, 1440);*/

    $(".title").click(function(){
	var height = $(this).parent().children(".content").children("p").height();
	if($(this).parent().children(".content").height() == 0){
	    height = height.toString() + 'px';
	    $(".title").css("color","black");
	    $(".content").css({"height": "0px", "color": "#5a5858"});
	    $(this).css('color','white');
	    $(this).parent().children(".content").css({'height': height, 'color':'white'});
	} else {
	    $(this).css('color', 'black');
	    $(this).parent().children(".content").css({'height': '0px', 'color':'#5a5858'});
	}
    });
    
    $("#switch").click(function(){
	if(lights==1){
	    lights = 0;
	    new_cookie('lights', '1', '365');
	    $(this).css('border-right', '2px solid red');
	    $(".light").css('background-color', 'transparent');
	} else {
	    lights = 1;
	    new_cookie('lights', '1', '365');
	    $(this).css('border-right', '2px solid green');
	    $(".light").css('background-color', 'white');
	}
    });

    if(lights==1){
	$(".light").click(function(){
	    $(this).css('background-color', 'transparent');
	});
	$(".light").mouseenter(function(){
	    $(this).css('background-color', 'transparent');
	});
	$(".light").mouseout(function(){
	    $(this).css('background-color', 'white');
	});
    }
    
    $("#prof_img_in").mouseenter(function(){
	if(lights==1){$(".light").css('background-color', '#00aaff');}
	$(this).css({'top':'0px', 'z-index':'2'});
    });
    $("#prof_img_in").mouseout(function(){
	if(lights==1){$(".light").css('background-color', 'white');}
	$(this).css({'top':'80px', 'z-index':'1'});
    });
    $("#prof_img_gh").mouseenter(function(){
	if(lights==1){$(".light").css('background-color', 'black');}
	$(this).css({'left':'0px', 'z-index':'2'});
    });
    $("#prof_img_gh").mouseout(function(){
	if(lights==1){$(".light").css('background-color', 'white');}
	$(this).css({'left':'-80px', 'z-index':'1'});
    });
    $("#prof_img_so").mouseenter(function(){
	if(lights==1){$(".light").css('background-color', '#ff3300');}
	$(this).css({'left':'0px', 'z-index':'2'});
    });
    $("#prof_img_so").mouseout(function(){
	if(lights==1){$(".light").css('background-color', 'white');}
	$(this).css({'left':'80px', 'z-index':'1'});
    });
});
