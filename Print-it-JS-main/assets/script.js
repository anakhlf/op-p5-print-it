const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const container = document.getElementById("container");
const flecheGauche = document.getElementById("arrow_left");
const flecheDroite = document.getElementById("arrow_right");
const bulletPoints = document.getElementById("dots");

let currentIndex = 0;
const totalSlides = slides.length;




for (i = 0 ; i < totalSlides; i++) {
	const dots = document.createElement("span");
	dots.className = "dot";
	dots.setAttribute("data-index", currentIndex);
	bulletPoints.appendChild(dots);

	dots.addEventListener("click", () => {
		currentIndex = i;
		updateSlide();
	});
}


flecheGauche.addEventListener("click", () => {
	currentIndex = (currentIndex - 1) % totalSlides;
	updateSlide();
})

flecheDroite.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % totalSlides;
	updateSlide();
})
