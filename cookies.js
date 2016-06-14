function new_cookie(cname, cvalue, exdays){
    var date = new Date();
    date.setTime(date.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = (cname + "=" + cvalue + "; " + expires);
}

function get_cookie(cookie)
{
    cookie = cookie + "=";
    var all_cookies = document.cookie.split(';');

    for(var i = 0; i < all_cookies.length; i++) {
	var c = all_cookies[i];

	while(c.charAt(0) == ' ') {
	    c = c.substring(1);	    
	}

	if(c.indexOf(cookie) == 0) {
	    return c.substring(cookie.length, c.length);
	}
    }
    return "";
}

function first_visit()
{
    if(get_cookie('fstvisit') == ""){
	new_cookie('fstvisit', '1', '365');
	return 1;
    } else if(navigator.cookieEnabled == false){
	return -1;
    } else if(get_cookie('fstvisit') == "0"){
	new_cookie('fstvisit', '1', '365');
	return 1;
    } else {
	return 0;
    }
}

function clear_cookies()
{
    new_cookie('fstvisit', '0', '365');
}
