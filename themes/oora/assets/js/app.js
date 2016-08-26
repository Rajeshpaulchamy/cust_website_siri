/*!
 * javascript file for all pages
 */

jQuery(document).ready(function($){

	/*=================================================================
	 * Set active class for navbar
	 *=================================================================*/
	var setActive = function (idSelected) {

		$(".nav").find(".active").removeClass("active");
		
		if(idSelected && idSelected == "#products") {
			$("#nav-products").addClass("active");
			return;
		} else if(idSelected && idSelected == "#about-us") {
			$("#nav-about-us").addClass("active");
			return;
		}	

		if(window.location.href.indexOf("services") > -1  || 
			window.location.href.indexOf("automotive") > -1 ||
			window.location.href.indexOf("iot") > -1 ||			
			window.location.href.indexOf("security-systems") > -1 ||
			window.location.href.indexOf("asset-track") > -1 ||
			window.location.href.indexOf("school-bus-tracking") > -1 ||
			window.location.href.indexOf("embedded") > -1) {
			$("#nav-products").addClass("active");
		} else if(window.location.href.indexOf("aboutus") > -1) {
			$("#nav-about-us").addClass("active");
		} else if (window.location.href.indexOf("careers") > -1) {
			$("#nav-careers").addClass("active");
		}  else if (window.location.href.indexOf("contactus") > -1) {
			$("#nav-contact-us").addClass("active");
		}  else if (window.location.href.indexOf("whyhow") > -1) {
			$("#nav-whyhow").addClass("active");
		}  else {
			$("#nav-home").addClass("active");
		}
	};

	$(".nav a").on("click", function(){
		$(".nav").find(".active").removeClass("active");
		setActive(this.hash);
	});
	
	setActive();

	$('#da-slider').cslider({
		autoplay	: true,
		bgincrement	: 450,
		interval	: 5000,
		current		: 0
	});

});

/*$('.navbar [data-toggle="dropdown"]').bootstrapDropdownHover();*/
$("div.navbar-fixed-top").autoHidingNavbar(
	{
		disableAutohide: false
	}
);