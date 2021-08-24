const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const intervalTime = 3000;
let slideInterval;
let counter = 0;
const nextSlide = () => {
	const current = document.querySelector(".current");
	current.classList.remove("current");
	if (counter !== slides.length - 1) {
		counter++;
		slides[counter].classList.add("current");
	} else {
		counter = 0;
		slides[counter].classList.add("current");
	}
	setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
	const current = document.querySelector(".current");
	current.classList.remove("current");
	if (counter !== 0) {
		counter--;
		slides[counter].classList.add("current");
	} else {
		counter = slides.length - 1;
		slides[counter].classList.add("current");
	}
	setTimeout(() => current.classList.remove("current"));
};

next.addEventListener("click", (e) => {
	nextSlide();
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide, intervalTime);
});

prev.addEventListener("click", (e) => {
	prevSlide();
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide, intervalTime);
});
slideInterval = setInterval(nextSlide, intervalTime);
