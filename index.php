<!doctype html>
<html lang="pt-BR">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/6e7aa9ccc9.js" crossorigin="anonymous"></script>

    <!-- My CSS -->
    <link rel="stylesheet" href="assets/style/style.css">
    <link rel="stylesheet" href="assets/style/responsive.css">

    <title>Meu portifólio</title>
</head>

<body data-bs-spy="scroll" data-bs-target="#nav-box" data-bs-offset="50" class="mx-auto">

    <header>
        <nav id="nav-box" class="navbar bg-black justify-content-center fixed-top">
            <ul class="nav">
                <li class="nav-item">
                    <a class=" btn nav-link btn-outline-light" href="#home" title='Home'><i class="fa-solid fa-house-laptop"></i><span id="span-nav">Home</span></a>
                </li>
                <li class="nav-item">
                    <a class=" btn nav-link btn-outline-light" href="#skills" title='Habilidades'><i class="fa-solid fa-book-open-reader"></i><span id="span-nav">Habilidades</span></a>
                </li>
                <li class="nav-item">
                    <a class="btn nav-link btn-outline-light" href="#projects" title='Projetos'><i class="fa-solid fa-list-check"></i><span id="span-nav">Projetos</span></a>
                </li>
                <li class="nav-item">
                    <a class=" btn nav-link btn-outline-light" href="#about" title='Sobre'><i class="fa-solid fa-id-card"></i><span id="span-nav">Sobre</span></a>
                </li>
                <li class="nav-item">
                    <a class=" btn nav-link btn-outline-light" href="#contact" title='Contatos'><i class="fa-solid fa-address-book"></i><span id="span-nav">Contatos</span></a>
                </li>
            </ul>
        </nav>
    </header>

    <section id="home">
        <div id="space-div">
            <div id="title-style">
                <h1>$ echo "Hello world!"</h1>
            </div>
            <div class="container">
                <p>Meu nome é Denize e esse é meu portifolio</p>
                <video autoplay muted loop id="video-intro">
                <source src="assets/video/intro.mp4" type="video/mp4">
                </video>

            </div>
            <blockquote class="blockquote text-center m-2">
                <p>“Sorte é o que acontece quando preparação encontra oportunidade.”</p>
                <footer class="blockquote-footer">Filósofo Romano, <cite><a target="_blank" href="https://www.goodreads.com/author/quotes/4918776.Seneca">Lucius Annaeus Seneca</a></cite></footer>
            </blockquote>
        </div>
    </section>

    <section id="skills">
        <div id="space-div">
            <div id="title-style">
                <h1>$ cat skills.txt</h1>
            </div>
            <div class="container row border-light border-right">
                <ul class="nav flex-column nav-pills col-4 " id="myTab" role="tablist">
                    <li class="nav-item " role="presentation">
                        <button class="btn btn-outline-light align-content-end" id="education-tab" data-bs-toggle="tab" data-bs-target="#education" type="button" role="tab" aria-controls="education" aria-selected="true">
                        Escolaridade</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="btn btn-outline-light btn-lg text-lg-end " id="jobs-tab" data-bs-toggle="tab" data-bs-target="#jobs" type="button" role="tab" aria-controls="jobs" aria-selected="false">
                        Trabalhos</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="btn btn-outline-light btn-lg text-lg-end " id="courses-tab" data-bs-toggle="tab" data-bs-target="#courses" type="button" role="tab" aria-controls="courses" aria-selected="false">
                        Cursos</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="btn btn-outline-light btn-lg text-lg-end " id="techs-tab" data-bs-toggle="tab" data-bs-target="#techs" type="button" role="tab" aria-controls="skills" aria-selected="false">
                        Tecnologias</button>
                    </li>
                </ul>
                <div class="tab-content col-8" id="tab-box">
                    <div class="tab-pane active" id="education" role="tabpanel" aria-labelledby="education-tab">
                        <p><strong><a target="_blank" href="https://www.senecacollege.ca/home.html">Seneca College</a></strong> - diploma em Computer Programming</p>
                        <p>Setembro-2020 - cursando... </p>
                        <p>Esse programa encoraja encontrar soluções por nós mesmos, incriveis professores, e incriveis desafios de código, eu aprendi no lógica em C e Programação orientada a objetos com C++.</p>
                        <p><strong><a target="_blank" href="https://portal.colegiolemosdecastro.com.br/">Lemos de Castro</a></strong> - Técnico em Eletrônica</p>
                        <p>Março-2012 - Dezembro-2012 </p>
                        <p>Nesse curso pós-médio eu pude desenvolver habilidades práticas em eletrica e eletrônica basica, e ao final do curso eu fui capaz de criar um circuito que com o som de uma palma apagava e acendia as luzes.</p>
                        <p><strong><a target="_blank" href="https://www.paralelo.g12.br/">Instituto Paralelo</a></strong> - Técnico em Administração de empresas</p>
                        <p>Fevereiro-2005 - Dezembro-2008 </p>
                        <p>Durante o curso, eu aprendi Matemática financeira, estátistica, contabilidade e outras habilidades de gerenciamento.</p>
                    </div>
                    <div class="tab-pane" id="jobs" role="tabpanel" aria-labelledby="jobs-tab">
                        <p><strong><a target="_blank" href="https://grupoglobo.globo.com/">TV Globo</a></strong></p>
                        <p>Janeiro - 2014 - Outubro - 2019</p>
                        <p>Minha jornada começou como uma terceirizada na TV Globo, porém em 2014 fui contratada como efetiva pelo setor da exibição, lá eu tive a oportunidade de crescer como técnico em Sistemas e troquei conhecimento com grandes profissionais. Eu também participei de um projeto inteiro que foi premiado, uma maneira de entregar os comerciais.</p>
                        <p>Após um recrutamento interno, eu mudei para o setor que faz o tráfego de sinais, minhas principais responsabiliadas incluiam entre outros, a entrega dos sinais tanto digitais quanto em stream para o jornalismo, reservar sateletes, suporte técnico nível 2.</p>
                    </div>
                    <div class="tab-pane" id="courses" role="tabpanel" aria-labelledby="courses-tab">
                        <p>Um nos meu hobbies além de ler livros de romance, é aprender novas coisas, então eu tenho feito diversos cursos, a maioria de soft skills como, cozinhar, crochê, DIY variados, tricô, e também as vezes eu encontro um curso de alguma linguagem ou alguma plataforma gratuita ou paga para aprender variedade de linguagens, como a <a href="https://cursos.alura.com.br/user/DeBaFig/fullCertificate/6e8dbe2108b233b75ad62a1b80bc3886" target="_blank">Lógica de programação com jogos</a> na <a href="https://www.alura.com.br/" target="_blank">Alura</a> ou <a href="https://www.dio.me/certificate/AC4CEE72/share" target="_black">Boot Camp Localiza</a> na <a href="https://www.dio.me/" target="_blank">Digital Innovation One</a>, eu compro mais curso do que consigo assistir, não consigo resistir, eu vejo um tema interessante eu quero aprender sobre.</p>
                        <p> I've also already got LinkedIn learning to research a few topics for some assignments at college as <a href="https://www.linkedin.com/learning/comptia-a-plus-220-1001-cert-prep-8-internet-and-the-cloud/understanding-virtualization?autoplay=true&resume=false"
                                target="_blank">Virtualization</a> and
                            <a href="https://www.linkedin.com/learning/introduction-to-web-apis" target="_blank">API's</a>.
                        </p>
                    </div>
                    <div class="tab-pane" id="techs" role="tabpanel" aria-labelledby="techs-tab">
                        <div class="row">
                            <div class="col" id="techs-col1">
                            </div>
                            <div class="col" id="techs-col2">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section id="projects">
        <div id="space-div">
            <div id="title-style">
                <h1>$ Projects</h1>
            </div>
            <div class="container">
                <div id="carousel-projects" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <div id="btn-captions">

                        </div>
                    </div>
                    <div class="carousel-inner">
                        <div id="img-carousel">

                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-projects" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-projects" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

    </section>

    <section id="about">
        <div id="space-div">
            <div id="title-style">
                <h1>$ cd /home/denize</h1>
            </div>
            <div class="container ">
                <div>
                    <img class="figure-img img-fluid rounded" src="assets/img/me.jpg" alt="" srcset="">
                </div>
                <div>
                    <p>I'm 31, the mom of an adorable boy and a baby. I'm living in the countryside of Brazil, in Santa Catarina, Joinville. I've always attracted by technologies, but only in 2019 did I save enough money to study computer programming at
                        Seneca in Canada, however, when Covid-19 came my plans had to change, I've already done 2 of 4 semesters (online), after those, I got pregnant and decided to stay close of the family in Brazil to raise my kids.</p>
                    <p>As a professional, I've always put effort to do my best no matter how small the task may be. I love learning new things and sharing with my family and colleagues, I firmly believe that knowledge is what made homo sapiens different
                        from other animals, we share and learn pieces of stuff without the need to recreate the wheel every time.</p>
                    <p>I've worked for a multinational corporation as an audio and video technician at TV Globo in Rio de Janeiro - Brazil, where I've learned a lot of telecommunications technologies and helped the team during amazing events such as the
                        FIFA World Cup 2014(Brazil) and 2018(Russia), Olympics 2016 (Brazil). Now I'm looking for a different challenge I decide to be a developer, not only because I decided not to believe that there is no place for me in STEM jobs because
                        I'm 31, a woman, and a mom of 2, but also because I've always loved learning new things every day, and for me is inspiring the way the tech community have to develop an engine to keep learn even with the fastest changes that we
                        ever saw.</p>
                    <p>I'm not currently working in any company, I've been working on my projects, family, doing boot camps and courses to learn more about the front-end, so if you are interested in contacting me with a project you can take a look in my
                        <a href="assets/doc/CV Denize Bassi Figueiredo.pdf" target="_blank" class="link-warning">resume</a> or
                        <a href="contact.html" target="_self" class="link-warning">contact me</a>!</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container ">
            <div id="title-style">
                <h1>$ find . -name denize</h1>
            </div>
            <p><i class="fa-solid fa-terminal"></i> NOT FOUND </p>
            <p>This part is under construction....</p>
        </div>
        <!-- <div id="space-div">
            <div id="title-style">
                <h1>$ find . -name denize</h1>
            </div>
            <div class="container ">
                <p><i class="fa-solid fa-terminal"></i> $ mail -s $SUBJECT denize.f.bassi@gmail.com &#60; $MESSAGE </p>
                <form class="mx-auto" action="https://formspree.io/f/mwkynyak" method="POST">
                    <div class="form-group ">
                        <label for="recipient-name" class="col-form-label">SUBJECT=</label>
                        <input type="text" class="form-control" id="recipient-name" placeholder="--help" required>
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">MAIL=</label>
                        <input type="mail" class="form-control" id="recipient-name" placeholder="name@example.com" required>
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">MESSAGE=</label>
                        <textarea class="form-control overflow-auto" rows="5" id="message-text" placeholder="echo 'Type your message here.'" required></textarea>
                    </div>
                    <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response">
                    <button type="submit" class="btn btn-outline-light btn-lg mt-4 w-100">Submit</button>
                </form>
            </div>
        </div> -->
    </section>

    <footer class="footer">
        <p class="pt-2">©2022 Proudly created by Denize</p>
        <div class="pt-2" id="icons-footer">
            <a type="button" class="btn btn-outline-light" href="https://www.linkedin.com/in/dbfigueiredo/" title='LinkedIn' target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a type="button" class="btn btn-outline-light" href="https://github.com/DeBaFig" title='GitHub' target="_blank"><i class="fa-brands fa-github"></i></a>
            <a type="button" class="btn btn-outline-light" href="https://about.me/denizefigueiredo" title='About.me' target="_blank"><i class="fa-solid fa-qrcode"></i></a>
            <span id="span-footer">
                <a type="button" class="btn btn-outline-light" href="https://codepen.io/debafig" title='CodePen' target="_blank"><i class="fa-brands fa-codepen"></i></a>
                <a type="button" class="btn btn-outline-light" href="https://pt.stackoverflow.com/users/276536/debafig" title='Stack Overflow' target="_blank"><i class="fa-brands fa-stack-overflow"></i></a>
                <a type="button" class="btn btn-outline-light" href="https://twitter.com/Dbassi91" title='Twitter' target="_blank"><i class="fa-brands fa-twitter"></i></a>
                <a type="button" class="btn btn-outline-light" href="https://www.facebook.com/d.bassi91/" title='Facebook' target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a type="button" class="btn btn-outline-light" href="https://www.instagram.com/bassidenize/" title='Instagram' target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a type="button" class="btn btn-outline-light" href="https://wa.me/qr/VMVHOV7CIFHYP1" title='Whatsapp' target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            </span>
        </div>
    </footer>

    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- My Script -->
    <script src="assets/js/script.js"></script>

</body>

</html>