// Initialisation de l'index de la diapositive courante
let currentSlide = 0;

// Récupération de tous les éléments du DOM
const bannerImage = document.querySelector('#banner .banner-img');
const bannerTagLine = document.querySelector('#banner p');
const arrows = {
	left: document.querySelector('#banner .arrow_left'),
	right: document.querySelector('#banner .arrow_right')
};
const dots = document.querySelectorAll('.dot');

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
];

// Fonction pour afficher une diapositive
function showSlide() {
	const slide = slides[currentSlide];
	bannerImage.src = './assets/images/slideshow/' + slide.image;
	bannerTagLine.innerHTML = slide.tagLine;

	dots.forEach((dot, index) => {
		if (index === currentSlide) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

// Gestionnaires d'événements pour les flèches de navigation
arrows.left.addEventListener('click', () => {
	currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
	showSlide();
	/*if (currentSlide > 0) {
		currentSlide = currentSlide - 1;
	} else {
		currenstSlide = slides.length - 1;
	}*/
	//Veux dire la même chose que ce qui est à la ligne 49
});
arrows.right.addEventListener('click', () => {
	currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
	showSlide();
});

// Attacher un gestionnaire d'événements à chaque point de navigation
dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		currentSlide = index;
		showSlide();
	});
});

// Afficher la première diapositive au chargement de la page
showSlide();
