let slideIndex = 0;

function showImages() {
	let i;
	let images = document.getElementsByClassName("slides");
	let dots = document.getElementsByClassName("dot");

	for (i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}

	slideIndex++;
	if (slideIndex > images.length) {
		slideIndex = 1;
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("active", "");
	}

	images[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += "active";
}

setInterval(showImages, 4000);