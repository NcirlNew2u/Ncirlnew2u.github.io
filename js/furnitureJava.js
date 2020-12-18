
//Created a button that scrolls the user back to the top of the page
mybutton = document.getElementById("btnScrollTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	}
	else {
		mybutton.style.display = "none";
	}
}


function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
