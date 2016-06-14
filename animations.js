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

$(document).ready(function(){     
    $(".light").click(function(){
	$(this).css('background-color', 'transparent');
    });
    $(".light").mouseenter(function(){
	$(this).css('background-color', 'transparent');
    });
    $(".light").mouseout(function(){
	$(this).css('background-color', 'white');
    });
    $("#prof_img_in").mouseenter(function(){
	$(".light").css('background-color', '#00aaff');
	$(this).css({'top':'0px', 'z-index':'2'});
    });
    $("#prof_img_in").mouseout(function(){
	$(".light").css('background-color', 'white');
	$(this).css({'top':'80px', 'z-index':'1'});
    });
    $("#prof_img_gh").mouseenter(function(){
	$(".light").css('background-color', 'black');
	$(this).css({'left':'0px', 'z-index':'2'});
    });
    $("#prof_img_gh").mouseout(function(){
	$(".light").css('background-color', 'white');
	$(this).css({'left':'-80px', 'z-index':'1'});
    });
    $("#prof_img_so").mouseenter(function(){
	$(".light").css('background-color', '#ff3300');
	$(this).css({'left':'0px', 'z-index':'2'});
    });
    $("#prof_img_so").mouseout(function(){
	$(".light").css('background-color', 'white');
	$(this).css({'left':'80px', 'z-index':'1'});
    });
});
