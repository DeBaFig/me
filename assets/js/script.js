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
    "name": "JSON",
    "progress": 40
}, {
    "name": "API",
    "progress": 40
}, {
    "name": "PHP",
    "progress": 20
}, {
    "name": ".NET",
    "progress": 40
}, {
    "name": "Node.js",
    "progress": 40
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
}];
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