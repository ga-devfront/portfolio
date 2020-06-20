<script>
export default {
  progress: 'I\'m currently coding this page, come back later!',
  home: {
    title: 'Frontend application developer',
  },
  about: {
    title: 'Hello, I am Alexis !',
    paragraph: {
      1: 'Your business is evolving and you <mark>are looking for a new coder</mark> to join your team?',
      2: 'Do you want to recruit a candidate for <mark>his motivation</mark>, his thirst for <mark>continuous learning</mark> and his <mark>love for the web</mark>? Then you have come to the right place!',
      3: 'I have been <mark>passionate</mark> about web design for years, starting to do self-taught web designs in Photoshop. I then started <mark>training as a frontend developer</mark> at OpenClassrooms.',
      4: 'Throughout this, I was keen to push the projects I <mark>undertake ever further</mark>, so as not to meet the objectives, but to exceed them while <mark>respecting the deadlines</mark>.',
      5: 'Do you want to learn more about what <mark>I have to offer you</mark>? So feel free to browse my portfolio and <mark>contact me</mark>.',
    },
  },
  projects: {
    name: 'Name',
    type: 'Type',
    description: 'Description',
    technologies: 'Technologies',
    scrolleventhandler: {
      name: 'Scroll event handler',
      type: 'Personnal project',
      description: `This NPM package allows you to read scroll or touch events and assign a callback to it. <br>
      The settings allow you to choose how much scroll or how many touch distances the callback is called, taking into account the direction on all axes. <br>
      Several methods have also been implemented to allow modification of parameters or deletion of the listener. <br>
      More information is available on the GitHub documentation.`,
    },
    portfolio: {
      name: 'Portfolio',
      type: 'Personnal project',
      description: `My professional portfolio on which you are currently browsing! You will find all the information about me and my projects there. <br>
      I worked on it, trying to make the most of what I learned during my training. <br>
      This project also uses my NPM "Scroll event handler" package.`,
    },
    chaletsetcaviar: {
      name: 'Chalets et Caviar',
      type: 'School project',
      description: `This school project asked us to create a site for a luxury chalet rental agency with Wordpress. <br>
      So I also tried to work on the design, the content as well as with the Wordpress plugins. <br>
      You will also find the site usage document made by me.`,
    },
    ffpa: {
      name: 'Festival des films de plein air',
      type: 'School project',
      description: `For this school project we were asked to create a responsive site with Bootstrap for an outdoor film festival. <br>
      My work was therefore focused on design as well as on using Bootstrap responsively. <br>
      You will also find the specifications produced by me.`,
    },
    expressfood: {
      name: 'Express Food',
      type: 'School project',
      description: `ExpressFood is a somewhat special project for me, we were asked not to code but to create UML schemas as well as a corresponding database. <br>
      So I had to use different online tools for schemas before moving to MySQL Workbench for the creation of my database. <br>
      You will find below all my work done for this project.`,
    },
    botgenerator: {
      name: 'Super phrase generator',
      type: 'School project',
      description: `This mini school project aimed to create a random sentence generator only in JavaScript. <br>
      I wanted to push the project a little further by making it accessible around a responsive design.`,
    },
    spaceshiparena: {
      name: 'Spaceship Arena',
      type: 'School project',
      description: `This school project was one of my favorites, we were asked to make a turn-based board game. <br>
      Being passionate about the world of video games since always, I pushed the project to the maximum by realizing a board game in isometric 3D in a space universe. <br>
      You can choose your ship which will have a different size and statistics, which makes the game even more complete! <br>
      All the sprites and the design were made by me.`,
    },
    foodaily: {
      name: 'Foodaily',
      type: 'School project',
      description: `This project is one of the most complete that I had to carry out during my training. We were asked to build a restaurant review site using Google APIs. <br>
      I also wanted to use VueJS to broaden my skills, which was perfectly suited to the project since VueJS is reactive. <br>
      The design was made by me and is also responsive.`,
    },
    todo: {
      name: 'Todo list',
      type: 'School project',
      description: `This rather special school project asked us to take over an already existing project in order to correct these errors, improve it in terms of performance, as well as write tests thanks to Jasmine. <br>
      I also created detailed documentation on the project and an audit on its GitHub page.`,
    },
  },
  skills: {
    details: 'Details',
    level: {
      1: 'basics',
      2: 'fluency',
      3: 'proficiency',
    },
    developer: {
      name: 'Development',
    },
    tools: {
      name: 'Tools',
    },
    frontend: {
      name: 'Frontend',
    },
    js: {
      name: 'Javascript',
      description: 'Having worked on many projects in Vanilla JavaScript during my training, I master the manipulation of DOM, the use of API, AJAX calls as well as all the possibilities offered by this language',
    },
    jquery: {
      name: 'jQuery',
      description: 'I worked with jQuery on my online video game project, throughout this long project I exploited all aspects of this JavaScript library to the maximum.',
    },
    vuejs: {
      name: 'Vue.js',
      description: 'I developed this portfolio under Vue.JS as well as other projects. This reactive framework is an essential tool that I master from all angles.',
    },
    jasmine: {
      name: 'Jasmine',
      description: 'Jasmine is the first JavaScript test framework I worked with, I really like this syntax which is easy to read.',
    },
    integration: {
      name: 'Integration',
    },
    html: {
      name: 'HTML5',
      description: 'HTML is an essential language for a frontend integrator, I learned to work optimally with it, both from a semantic point of view and SEO.',
    },
    css: {
      name: 'CSS3',
      description: 'Using the CSS language since the beginning of my studies I master it perfectly, whether for media queries as for its selectors or its pseudo-classes.',
    },
    bootstrap: {
      name: 'Bootstrap',
      description: 'The famous Twitter library no longer has many secrets for me, although I no longer use it on my recent projects I continue to be interested in its next features.',
    },
    sass: {
      name: 'Sass',
      description: 'Learning Sass has been very beneficial to me in creating my portfolio, I am now very comfortable with the fact that I still have things to learn from the preprocessor.',
    },
    wp: {
      name: 'Wordpress',
      description: 'Being already familiar with CMS, I had, during one of my school projects, developed a site using Wordpress. I master the main functionalities.',
    },
    vcs: {
      name: 'VCS',
    },
    git: {
      name: 'Git',
      description: 'Developing each project using Git, I learned to use its main commands and features.',
    },
    github: {
      name: 'GitHub',
      description: 'My latest school and personal projects are available on GitHub. It is therefore natural that I learned to master this platform perfectly.',
    },
    design: {
      name: 'Design',
    },
    photoshop: {
      name: 'Photoshop',
      description: 'Passionate about graphics since always I master Photoshop perfectly whether for web design or photo editing.',
    },
    xd: {
      name: 'XD',
      description: 'Being interested in my training in web design modeling I started to learn how to use Adobe XD.',
    },
    illustrator: {
      name: 'Illustrator',
      description: 'I learned for several years to create my icons as well as the graphic identities which had to be vectorized in Illustrator.',
    },
    environment: {
      name: 'Environment',
    },
    vscode: {
      name: 'Visual Studio Code',
      description: 'VSCode is in my opinion one of the best code editors available on the market. I use it whatever language I program.',
    },
    debian: {
      name: 'Debian',
      description: 'My web server as well as my development environment is under Debian-based. So I know how to use his most common commands.',
    },
    npm: {
      name: 'NPM',
      description: 'Having already developed an NPM package I know how to use and publish packages.',
    },
  },
  contact: {
    contact: 'Contact form',
    social: 'Also find me on',
    button: {
      send: 'Send',
      sended: 'Successfully sent',
    },
    input: {
      valid: 'Valid',
      required: '*Required',
      subject: {
        title: 'Subject',
        error: 'Error: Your subject must be longer than 3 characters.',
      },
      mail: {
        title: 'Email',
        error: 'Error : Your email address is not valid.',
      },
      text: {
        title: 'Message',
        error: 'Error: Your message must be longer than 10 characters.',
      },
    },
  },
  routes: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    currentProject: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
};
</script>
