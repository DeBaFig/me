var triggerTabList = [].slice.call(document.querySelectorAll("#minhaAba a"));
triggerTabList.forEach(function (triggerEl) {
	var tabTrigger = new bootstrap.Tab(triggerEl);

	triggerEl.addEventListener("click", function (event) {
		event.preventDefault();
		tabTrigger.show();
	});
});
var age = new Date().getFullYear() -  1991;

document.querySelectorAll('#age').forEach(function(ele){
    ele.innerHTML = age;
});


var myTechs = [
	{
		name: "HTML5",
		progress: 70,
	},
	{
		name: "CSS",
		progress: 70,
	},
	{
		name: "JavaScript",
		progress: 70,
	},
	{
		name: "Bootstrap",
		progress: 50,
	},
	{
		name: "C",
		progress: 70,
	},
	{
		name: "C++",
		progress: 70,
	},
	{
		name: "PHP",
		progress: 70,
	},
	{
		name: "OracleDB",
		progress: 50,
	},
	{
		name: "MySQL",
		progress: 40,
	},
	{
		name: "Windows",
		progress: 60,
	},
	{
		name: "Linux",
		progress: 60,
	},
	{
		name: "Azure",
		progress: 40,
	},
	{
		name: "Git/GitHub",
		progress: 50,
	},
	{
		name: "Trello",
		progress: 50,
	},
];

var myProjects = [
	{
		imgUrl: "img src='assets/img/carousel/balcao-br.jpg'",
		label: "pt-BR - Projeto final PHP -Grupo 1- Entra21",
		description: "Aplicação web para você anúnciar o que você está comprando.",
		linkProject:
			"href='https://github.com/DeBaFig/ProjetoEntra21-22-PHP/tree/main/remake'",
	},
	{
		imgUrl: "img src='assets/img/carousel/back2home1.jpg'",
		label: "pt-BR - Projeto final PHP -Grupo 5- Entra21",
		description:
			"Aplicação web para simular um site de uma imobiliaria com adição, edição exclusão de imóveis.",
		linkProject: "href='https://github.com/DeBaFig/php-back2home1'",
	},
	{
		imgUrl: "img src='assets/img/carousel/project1term.gif'",
		label: "en-US - Seneca Final Project 1st Term",
		description:
			"A basic ticketing system, a tracking system for customer-reported problems.",
		linkProject: "href='https://github.com/DeBaFig/1st-term'",
	},
	{
		imgUrl: "img src='assets/img/carousel/projectCatalogo.gif'",
		label: "<p lang='pt-br'>pt-BR - Catálogo de Filmes</p>",
		description: "Project using C# and .Net in portuguese during a boot camp.",
		linkProject: "href='https://github.com/DeBaFig/DIO-Projeto-Catalogo'",
	},
];
var techCol1 = document.getElementById("techs-col1");
var techCol2 = document.getElementById("techs-col2");

function showProgress() {
	for (i = 0; i < myTechs.length; i++) {
		let message =
			"<div class='row'><div class='col-4'><p id=>" +
			myTechs[i].name +
			"</p></div><div class='progress col-6 ps-0'><div class='progress-bar ' role='progressbar' style='width: " +
			myTechs[i].progress +
			"%';aria - valuenow = '" +
			myTechs[i].progress +
			"' aria - valuemin = '0' aria - valuemax = '100' > " +
			myTechs[i].progress +
			"% </div></div></div>";
		if (i % 2 === 0) techCol1.innerHTML += message;
		else techCol2.innerHTML += message;
	}
}

var btnCarousel = document.getElementById("btn-captions");
var imgCarousel = document.getElementById("img-carousel");

function showCarousel() {
	for (i = 0; i < myProjects.length; i++) {
		let btn =
			"<button type='button' data-bs-target='#carousel-projects' data-bs-slide-to='" +
			i +
			(i == 0 ? "' class='active' aria-current='true'" : "' ") +
			" aria-label='Slide " +
			(i + 1) +
			"'></button>";
		let img =
			"<div class='carousel-item justify-content-center" +
			(i == 0 ? " active' " : "' ") +
			"><div class='row'><div class='col-sm-8'><div class='card'><div class='card-body p-0'><a " +
			myProjects[i].linkProject +
			" target='_blank' data-toggle='tooltip' title='Click here to see more about it!'><" +
			myProjects[i].imgUrl +
			" class='w-100 limit-height '></a></div></div></div><div class='col-sm-4'><div class='card'><div class='card-body bg-black'><h5 class='card-title'>" +
			myProjects[i].label +
			"</h5><p class='card-text'>" +
			myProjects[i].description +
			"</p></div></div></div></div></div>";
		btnCarousel.innerHTML += btn;
		imgCarousel.innerHTML += img;
	}
}

showProgress();
showCarousel();
