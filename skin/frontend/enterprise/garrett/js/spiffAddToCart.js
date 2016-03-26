function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
	}
	return "";
}
jQuery( document ).ready(function(){
	var _href = jQuery('a#addToCartSpiff').attr('href');
	jQuery('a#addToCartSpiff').attr('href', _href + '/form_key/' + getCookie('CACHED_FRONT_FORM_KEY') );
});

