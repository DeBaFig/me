var triggerTabList = [].slice.call(document.querySelectorAll('#minhaAba a'))
triggerTabList.forEach(function(triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function(event) {
        event.preventDefault()
        tabTrigger.show()
    })
})


var myTechs = [{
    "name": "HTML5",
    "progress": 70
}, {
    "name": "CSS",
    "progress": 70
}, {
    "name": "JavaScript",
    "progress": 70
}, {
    "name": "Bootstrap",
    "progress": 50
}, {
    "name": "JQuery",
    "progress": 40
}, {
    "name": "API/REST",
    "progress": 30
}, {
    "name": "C",
    "progress": 70
}, {
    "name": "C++",
    "progress": 70
}, {
    "name": "PHP",
    "progress": 70
}, {
    "name": ".NET",
    "progress": 40
}, {
    "name": "Node.js",
    "progress": 30
}, {
    "name": "Python",
    "progress": 40
}, {
    "name": "C#",
    "progress": 60
}, {
    "name": "OracleDB",
    "progress": 50
}, {
    "name": "MySQL",
    "progress": 40
}, {
    "name": "Windows",
    "progress": 60
}, {
    "name": "Linux",
    "progress": 60
}, {
    "name": "Azure",
    "progress": 40
}, {
    "name": "React JS",
    "progress": 20
}, {
    "name": "Git/GitHub",
    "progress": 50
}, {
    "name": "Trello",
    "progress": 50
}];

var myProjects = [{
        "imgUrl": "img src='assets/img/carousel/project1term.gif'",
        "label": "en-US - Seneca Final Project 1st Term",
        "description": "A basic ticketing system, a tracking system for customer-reported problems.",
        "linkProject": "href='https://github.com/DeBaFig/1st-term'"
    },
    {
        "imgUrl": "img src='assets/img/carousel/projectCatalogo.gif'",
        "label": "<p lang='pt-br'>pt-BR - Catálogo de Filmes</p>",
        "description": "Project using C# and .Net in portuguese during a boot camp.",
        "linkProject": "href='https://github.com/DeBaFig/DIO-Projeto-Catalogo'"
    }, {
        "imgUrl": "img src='assets/img/carousel/projectPortfolio.jpeg'",
        "label": "<p lang='pt-br'>pt-BR - (kind of)Netflix Interface</p>",
        "description": "Project using HTML and CSS in portuguese during a boot camp.",
        "linkProject": "href='https://github.com/DeBaFig/DIO-Projeto-Catalogo'"
    }

];
var techCol1 = document.getElementById("techs-col1");
var techCol2 = document.getElementById("techs-col2");

function showProgress() {
    for (i = 0; i < myTechs.length; i++) {
        let message = ("<div class='row'><div class='col-4'><p id=>" + myTechs[i].name + "</p></div><div class='progress col-6 ps-0'><div class='progress-bar ' role='progressbar' style='width: " + myTechs[i].progress + "%';aria - valuenow = '" + myTechs[i].progress + "' aria - valuemin = '0' aria - valuemax = '100' > " + myTechs[i].progress + "% </div></div></div>");
        if (i % 2 === 0)
            techCol1.innerHTML += message;
        else
            techCol2.innerHTML += message;
    }
}

var btnCarousel = document.getElementById("btn-captions");
var imgCarousel = document.getElementById("img-carousel");


function showCarousel() {
    for (i = 0; i < myProjects.length; i++) {
        let btn = "<button type='button' data-bs-target='#carousel-projects' data-bs-slide-to='" + i + (i == 0 ? "' class='active' aria-current='true'" : "' ") + " aria-label='Slide " + (i + 1) + "'></button>"
        let img = "<div class='carousel-item justify-content-center" +
            (i == 0 ? " active' " : "' ") +
            "><div class='row'><div class='col-sm-8'><div class='card'><div class='card-body p-0'><a " +
            myProjects[i].linkProject +
            " target='_blank' data-toggle='tooltip' title='Click here to see more about it!'><" +
            myProjects[i].imgUrl +
            " class='w-100 limit-height '></a></div></div></div><div class='col-sm-4'><div class='card'><div class='card-body bg-black'><h5 class='card-title'>" +
            myProjects[i].label +
            "</h5><p class='card-text'>" +
            myProjects[i].description +
            "</p></div></div></div></div></div>"
        btnCarousel.innerHTML += btn;
        imgCarousel.innerHTML += img;
        console.log(btn);
        console.log(img);
    }
}

showProgress();
showCarousel();