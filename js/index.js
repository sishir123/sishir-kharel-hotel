const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const time = document.getElementById("time");
const day = document.getElementById("day");
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
setDate = () => {
	let hours = new Date().getHours();
	let minutes = new Date().getMinutes();
	let seconds = new Date().getSeconds();
	const currentDay = new Date().toDateString();
	hours = hours >= 10 ? hours : `0${hours}`;
	minutes = minutes >= 10 ? minutes : `0${minutes}`;
	seconds = seconds >= 10 ? seconds : `0${seconds}`;
	time.innerHTML = `${hours} : ${minutes} : ${seconds}`;
	day.innerHTML = currentDay;
};
setDate();
setInterval(setDate, 1000);

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
