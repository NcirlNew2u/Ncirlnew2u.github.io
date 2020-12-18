// This is the fuction for the scroll up button.

const btnScrollToTop= document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function (){
    window.scrollTo(0, 0);
    });
 

// This is the fuction for the main slide video

var images = ["images/1.jpg",
				 "images/2.jpg",
				 "images/3.jpg",
				 "images/4.jpg",
				 "images/5.jpg"];
	
	var i=0;	
	function slides(){
		document.getElementById("slideimage").src = images[i];
		if(i<(images.length-1))
			i++;
			else
			i=0;		
		}
		setInterval(slides,2000)

//These are the function for the Beauty&Jewellery product gallery page by Tehseen Faisal 

function imageGallery() {
  
  const previews = document.querySelectorAll(".product-preview img");

  previews.forEach(preview => {
    preview.addEventListener("click", function() {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach(preview => preview.classList.remove("product-active"));
      preview.parentElement.previousElementSibling.src = bigSrc;
      preview.classList.add("product-active");
	  
    });
  });
}

imageGallery();


