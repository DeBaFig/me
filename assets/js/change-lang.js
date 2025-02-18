var idade = (new Date().getFullYear() - 1991 )
var lang_pt = {
    nav_logo : "denize",
    nav_title : "Denize | Portfólio Pessoal",
    nav_about : "sobre",
    nav_service : "serviço",
    nav_portfolio : "Portfólio",
    nav_testimonial : "referência",
    nav_blog : "blog",
    nav_contact : "contato",
    home_content_h2 : "olá!",
    home_content_h1 : "Sou desenvolvedora ",
    home_content_p : "Sou desenvolvedora backend C# com experiência em .NET, .NET Core, MySQL e SQL Server. Uso Docker para ambientes padronizados e conheço Python, PHP, C++ e C. Tenho conhecimento em AWS, GCP, Terraform e GitHub Actions. No frontend, trabalhei com HTML, CSS, JavaScript e Vue.js. Sou proficiente em Git/GitHub, SVN e Jira. Estou ansiosa por novos desafios no desenvolvimento de software.",
    home_about_me : "Sobre Mim ",
    about_h2 : "Meu nome é Denize",
    about_p : "Como desenvolvedora backend C#, tenho vasta experiência com frameworks como .NET e .NET Core, além de um forte domínio de bancos de dados como MySQL e SQL Server. Sou proficiente em ORMs, especialmente o Entity Framework, e utilizo Docker para criar ambientes padronizados, aumentando a eficiência do desenvolvimento. Embora minha especialidade seja C#, também tenho conhecimentos em Python, PHP, C++, C e outras linguagens. Estou expandindo meu conhecimento em tecnologias de nuvem, focando em AWS e GCP, e integro infraestrutura como código com Terraform, além de gerenciar pipelines de CI/CD com GitHub Actions. Minha abordagem inclui padrões de design como MVC, Factory, Builder, Facade e Adapter, e uma sólida compreensão de Domain-Driven Design (DDD). No frontend, trabalho com HTML, CSS, JavaScript Vanilla e Vue.js. Sou proficiente em ferramentas de desenvolvimento como Git/GitHub e SVN, e no gerenciamento de tarefas com Jira. Estou sempre pronta para novos desafios e oportunidades para aplicar minha paixão pelo desenvolvimento de software.",
    about_info_h4: ("idade: <span>" + idade + "</span>")
};
var lang_en = {
    nav_logo : "denize",
    nav_title : "Denize | Personal Portfolio",
    nav_about : "about",
    nav_service : "service",
    nav_portfolio : "portfolio",
    nav_testimonial : "testimonial",
    nav_blog : "blog",
    nav_contact : "contact",
    home_content_h2 : "hi there!",
    home_content_h1 : "I Am a ",
    home_content_p : "I'm a backend C# developer with experience in .NET, .NET Core, MySQL, and SQL Server. I use Docker for standardized environments and have knowledge of Python, PHP, C++, and C. I'm familiar with AWS, GCP, Terraform, and GitHub Actions. On the frontend, I've worked with HTML, CSS, JavaScript, and Vue.js. I'm proficient in Git/GitHub, SVN, and Jira. I'm eager for new challenges in software development.",
    home_about_me : "About me ",
    about_h2 : "My name is Denize",
    about_p : "As a backend C# developer, I have extensive experience with frameworks like .NET and .NET Core, along with a strong command of databases such as MySQL and SQL Server. I am proficient in ORMs, particularly Entity Framework, and use Docker to create standardized environments, enhancing development efficiency. Although my specialty is C#, I also have knowledge in Python, PHP, C++, C, and other languages. I am continuously expanding my knowledge in cloud technologies, focusing on AWS and GCP, and I integrate infrastructure as code using Terraform, as well as manage CI/CD pipelines with GitHub Actions. My approach includes design patterns like MVC, Factory, Builder, Facade, and Adapter, and a solid understanding of Domain-Driven Design (DDD). On the frontend, I work with HTML, CSS, Vanilla JavaScript, and Vue.js. I am proficient in development tools like Git/GitHub and SVN, and in task management with Jira. I am always ready for new challenges and opportunities to apply my passion for software development.",
    about_info_h4: ("age: <span>" + idade + "</span>")
};

function check_lang(lang){
    Object.entries(lang).forEach(([key, value]) => {
        let adding = "";
        console.log(adding);
        if(value == "I Am a "){
            adding = " developer";
        }
        let original = document.querySelector(`#${key}`).innerHTML;
        document.querySelector(`#${key}`).innerHTML = value + original + adding
    })
}
check_lang(lang_pt)
