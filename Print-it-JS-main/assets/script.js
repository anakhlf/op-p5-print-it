const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const container = document.getElementById("container");
const flecheGauche = document.getElementById("arrow_left");
const flecheDroite = document.getElementById("arrow_right");
const bulletPoints = document.getElementById("dots");

let currentIndex = 0;
const totalSlides = slides.length;
let intervalId;


updateSlide(currentIndex)

function updateSlide() { 
	slides.forEach((slide, index) => {
		const slideElement = document.createElement("div");
		slideElement.className = "slide";
		slideElement.innerHTML =`<img src="${slide.image}" class="banner-img"> 
		<p>${slide.tagLine}</p>`;
		container.appendChild(slideElement);
		console.log(index, currentIndex);
		if (index === currentIndex) {
			slideElement.style.display = "block";
		  } else {
			slideElement.style.display = "none";
		  }
	});
	const dots = Array.from(document.getElementsByClassName("dot"));
	dots.forEach ((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add("dot_selected");
		}
		else {
			dot.classList.remove("dot_selected");
		}
	});
}

for (let i = 0 ; i < totalSlides; i++) {
	const dots = document.createElement("span");
	dots.className = "dot";
	bulletPoints.appendChild(dots);

	if (i === 0) {
	dots.classList.add("dot_selected");
}

	dots.addEventListener("click", () => {
		currentIndex = i;
		updateSlide();
	});
}



flecheGauche.addEventListener("click", () => {
	currentIndex = (currentIndex - 1) % totalSlides;
	if (currentIndex === -1) {
		currentIndex = totalSlides - 1;
	}
	updateSlide();
})

flecheDroite.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % totalSlides;
	updateSlide();
})

function automatic() {
	intervalId = setInterval(()=> {
		currentIndex = (currentIndex + 1) % totalSlides;
		updateSlide();
	}, 5000);
} 

automatic();




		


