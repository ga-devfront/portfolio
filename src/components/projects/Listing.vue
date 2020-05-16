<script>
import gitHubIcon from '../../../public/img/projects/icon/github.svg';
import npmIcon from '../../../public/img/projects/icon/npm.svg';
import docIcon from '../../../public/img/projects/icon/doc.svg';
import webIcon from '../../../public/img/projects/icon/web.svg';


import scrollEventHandlerDesktopBig from '../../../public/img/projects/scroll_event_handler/desktop-mockup/big.png';
import scrollEventHandlerDesktopMedium from '../../../public/img/projects/scroll_event_handler/desktop-mockup/medium.png';
import scrollEventHandlerDesktopSmall from '../../../public/img/projects/scroll_event_handler/desktop-mockup/small.png';
import scrollEventHandlerMobileBig from '../../../public/img/projects/scroll_event_handler/mobile-mockup/big.png';
import scrollEventHandlerMobileMedium from '../../../public/img/projects/scroll_event_handler/mobile-mockup/medium.png';
import scrollEventHandlerMobileSmall from '../../../public/img/projects/scroll_event_handler/mobile-mockup/small.png';
import scrollEventHandlerLogo from '../../../public/img/projects/scroll_event_handler/logo.png';

import portfolioDesktopBig from '../../../public/img/projects/portfolio/desktop-mockup/big.png';
import portfolioDesktopMedium from '../../../public/img/projects/portfolio/desktop-mockup/medium.png';
import portfolioDesktopSmall from '../../../public/img/projects/portfolio/desktop-mockup/small.png';
import portfolioMobileBig from '../../../public/img/projects/portfolio/mobile-mockup/big.png';
import portfolioMobileMedium from '../../../public/img/projects/portfolio/mobile-mockup/medium.png';
import portfolioMobileSmall from '../../../public/img/projects/portfolio/mobile-mockup/small.png';
import portfolioLogo from '../../../public/img/projects/portfolio/logo.png';

import chaletsEtCaviarDesktopBig from '../../../public/img/projects/chalet_et_caviar/desktop-mockup/big.png';
import chaletsEtCaviarDesktopMedium from '../../../public/img/projects/chalet_et_caviar/desktop-mockup/medium.png';
import chaletsEtCaviarDesktopSmall from '../../../public/img/projects/chalet_et_caviar/desktop-mockup/small.png';
import chaletsEtCaviarMobileBig from '../../../public/img/projects/chalet_et_caviar/mobile-mockup/big.png';
import chaletsEtCaviarMobileMedium from '../../../public/img/projects/chalet_et_caviar/mobile-mockup/medium.png';
import chaletsEtCaviarMobileSmall from '../../../public/img/projects/chalet_et_caviar/mobile-mockup/small.png';
import chaletsEtCaviarLogo from '../../../public/img/projects/chalet_et_caviar/logo.png';

import ffpaDesktopBig from '../../../public/img/projects/ffpa/desktop-mockup/big.png';
import ffpaDesktopMedium from '../../../public/img/projects/ffpa/desktop-mockup/medium.png';
import ffpaDesktopSmall from '../../../public/img/projects/ffpa/desktop-mockup/small.png';
import ffpaMobileBig from '../../../public/img/projects/ffpa/mobile-mockup/big.png';
import ffpaMobileMedium from '../../../public/img/projects/ffpa/mobile-mockup/medium.png';
import ffpaMobileSmall from '../../../public/img/projects/ffpa/mobile-mockup/small.png';
import ffpaLogo from '../../../public/img/projects/ffpa/logo.png';

import expressFoodDesktopBig from '../../../public/img/projects/expressfood/desktop-mockup/big.png';
import expressFoodDesktopMedium from '../../../public/img/projects/expressfood/desktop-mockup/medium.png';
import expressFoodDesktopSmall from '../../../public/img/projects/expressfood/desktop-mockup/small.png';
import expressFoodLogo from '../../../public/img/projects/expressfood/logo.png';

import botGeneratorDesktopBig from '../../../public/img/projects/citation/desktop-mockup/big.png';
import botGeneratorDesktopMedium from '../../../public/img/projects/citation/desktop-mockup/medium.png';
import botGeneratorDesktopSmall from '../../../public/img/projects/citation/desktop-mockup/small.png';
import botGeneratorMobileBig from '../../../public/img/projects/citation/mobile-mockup/big.png';
import botGeneratorMobileMedium from '../../../public/img/projects/citation/mobile-mockup/medium.png';
import botGeneratorMobileSmall from '../../../public/img/projects/citation/mobile-mockup/small.png';
import botGeneratorLogo from '../../../public/img/projects/citation/logo.png';

import spaceShipArenaDesktopBig from '../../../public/img/projects/spaceship_arena/desktop-mockup/big.png';
import spaceShipArenaDesktopMedium from '../../../public/img/projects/spaceship_arena/desktop-mockup/medium.png';
import spaceShipArenaDesktopSmall from '../../../public/img/projects/spaceship_arena/desktop-mockup/small.png';
import spaceShipArenaLogo from '../../../public/img/projects/spaceship_arena/logo.png';

import foodailyDesktopBig from '../../../public/img/projects/foodaily/desktop-mockup/big.png';
import foodailyDesktopMedium from '../../../public/img/projects/foodaily/desktop-mockup/medium.png';
import foodailyDesktopSmall from '../../../public/img/projects/foodaily/desktop-mockup/small.png';
import foodailyMobileBig from '../../../public/img/projects/foodaily/mobile-mockup/big.png';
import foodailyMobileMedium from '../../../public/img/projects/foodaily/mobile-mockup/medium.png';
import foodailyMobileSmall from '../../../public/img/projects/foodaily/mobile-mockup/small.png';
import foodailyLogo from '../../../public/img/projects/foodaily/logo.png';

import todoDesktopBig from '../../../public/img/projects/todolist/desktop-mockup/big.png';
import todoDesktopMedium from '../../../public/img/projects/todolist/desktop-mockup/medium.png';
import todoDesktopSmall from '../../../public/img/projects/todolist/desktop-mockup/small.png';
import todoMobileBig from '../../../public/img/projects/todolist/mobile-mockup/big.png';
import todoMobileMedium from '../../../public/img/projects/todolist/mobile-mockup/medium.png';
import todoMobileSmall from '../../../public/img/projects/todolist/mobile-mockup/small.png';
import todoLogo from '../../../public/img/projects/todolist/logo.png';

export default {
  iconsLink: {
    github: gitHubIcon,
    npm: npmIcon,
    doc: docIcon,
    project: webIcon,
  },
  partsTranslate: {
    name: {
      fr: 'Nom',
      en: 'Name',
    },
    type: {
      fr: 'Type',
      en: 'Type',
    },
    description: {
      fr: 'Description',
      en: 'Description',
    },
    technologies: {
      fr: 'Technologies',
      en: 'Technologies',
    },
  },
  project: {
    scrollEventHandler: {
      path: 'scrollEventHandler',
      preview: {
        desktop: {
          big: scrollEventHandlerDesktopBig,
          medium: scrollEventHandlerDesktopMedium,
          small: scrollEventHandlerDesktopSmall,
        },
        mobile: {
          big: scrollEventHandlerMobileBig,
          medium: scrollEventHandlerMobileMedium,
          small: scrollEventHandlerMobileSmall,
        },
      },
      logo: scrollEventHandlerLogo,
      links: {
        github: 'https://github.com/ga-devfront/scroll-event-handler',
        project: 'https://ag-dev.fr/private/scroll-event-handler/demo/',
        npm: 'https://www.npmjs.com/package/scroll-event-handler',
      },
      technologies: ['JavaScript', 'Html', 'Css'],
      fr: {
        name: 'Scroll event handler',
        type: 'Projet personnel',
        description: `Ce package NPM permet de lire les événements de scroll ou de touch et de lui assigner un callback.<br>
        Les paramétrages permettent de choisir de combien scroll ou a combien de distance de touch le callback est appelé en prenant en compte la direction sur tous les axes.<br>
        Plusieurs méthodes ont aussi été implémenté afin de permettre la modification des paramètres ou la suppression du listener.<br>
        Plus d'informations sont disponibles sur la documentation GitHub.`,
      },
      en: {
        name: 'Scroll event handler',
        type: 'Personnal project',
        description: `This NPM package allows you to read scroll or touch events and assign a callback to it. <br>
        The settings allow you to choose how much scroll or how many touch distances the callback is called, taking into account the direction on all axes. <br>
        Several methods have also been implemented to allow modification of parameters or deletion of the listener. <br>
        More information is available on the GitHub documentation.`,
      },
    },

    portfolio: {
      path: 'portfolio',
      preview: {
        desktop: {
          big: portfolioDesktopBig,
          medium: portfolioDesktopMedium,
          small: portfolioDesktopSmall,
        },
        mobile: {
          big: portfolioMobileBig,
          medium: portfolioMobileMedium,
          small: portfolioMobileSmall,
        },
      },
      logo: portfolioLogo,
      links: {
        github: 'https://github.com/ga-devfront/portfolio',
        project: 'https://ag-dev.fr/',
      },
      technologies: ['JavaScript', 'Html', 'Css', 'Sass', 'VueJS'],
      fr: {
        name: 'Portfolio',
        type: 'Projet personnel',
        description: `Mon portfolio professionnel sur lequel vous naviguez actuellement! Vous y trouverez toutes les informations à mon sujet ainsi que sur mes projets. <br>
        J'ai travaillé dessus en essayant d'utiliser un maximum les acquis obtenus lors de ma formation. <br>
        Ce projet utilise également mon package NPM "Scroll event handler".`,
      },
      en: {
        name: 'Portfolio',
        type: 'Personnal project',
        description: `My professional portfolio on which you are currently browsing! You will find all the information about me and my projects there. <br>
        I worked on it, trying to make the most of what I learned during my training. <br>
        This project also uses my NPM "Scroll event handler" package.`,
      },
    },

    chaletsEtCaviar: {
      path: 'chaletsEtCaviar',
      preview: {
        desktop: {
          big: chaletsEtCaviarDesktopBig,
          medium: chaletsEtCaviarDesktopMedium,
          small: chaletsEtCaviarDesktopSmall,
        },
        mobile: {
          big: chaletsEtCaviarMobileBig,
          medium: chaletsEtCaviarMobileMedium,
          small: chaletsEtCaviarMobileSmall,
        },
      },
      logo: chaletsEtCaviarLogo,
      links: {
        project: 'https://ag-dev.fr/openclassrooms/wordpress/',
        doc: 'https://ag-dev.fr/documentation/chalet_et_caviar.pdf',
      },
      technologies: ['Html', 'Css', 'Wordpress'],
      fr: {
        name: 'Chalets et Caviar',
        type: 'Projet scolaire',
        description: `Ce projet scolaire nous demandais de réaliser un site pour une agence de location de chalets de luxe avec Wordpress.<br>
        J'ai donc aussi bien essayé de travailler le design, le contenue ainsi qu'avec les plugins Wordpress. <br>
        Vous trouverez également le document d'utilisation du site fait par mes soins.`,
      },
      en: {
        name: 'Chalets et Caviar',
        type: 'School project',
        description: `This school project asked us to create a site for a luxury chalet rental agency with Wordpress. <br>
        So I also tried to work on the design, the content as well as with the Wordpress plugins. <br>
        You will also find the site usage document made by me.`,
      },
    },


    ffpa: {
      path: 'ffpa',
      preview: {
        desktop: {
          big: ffpaDesktopBig,
          medium: ffpaDesktopMedium,
          small: ffpaDesktopSmall,
        },
        mobile: {
          big: ffpaMobileBig,
          medium: ffpaMobileMedium,
          small: ffpaMobileSmall,
        },
      },
      logo: ffpaLogo,
      links: {
        project: 'https://ag-dev.fr/openclassrooms/festival/',
        doc: 'https://ag-dev.fr/documentation/ffpa.docx',
      },
      technologies: ['Html', 'Css', 'Bootstrap'],
      fr: {
        name: 'Festival des films de plein air',
        type: 'Projet scolaire',
        description: `Pour ce projet scolaire il nous était demandé de réaliser un site responsive avec Bootstrap pour un festival des films de plein air. <br>
        Mon travail a donc été concentré sur le design comme sur l'utilisation de Bootstrap de manière responsive. <br>
        Vous trouverez également le cahier des charges réalisé par mes soins.`,
      },
      en: {
        name: 'Festival des films de plein air',
        type: 'School project',
        description: `For this school project we were asked to create a responsive site with Bootstrap for an outdoor film festival. <br>
        My work was therefore focused on design as well as on using Bootstrap responsively. <br>
        You will also find the specifications produced by me.`,
      },
    },

    expressFood: {
      path: 'expressFood',
      preview: {
        desktop: {
          big: expressFoodDesktopBig,
          medium: expressFoodDesktopMedium,
          small: expressFoodDesktopSmall,
        },
      },
      logo: expressFoodLogo,
      links: {
        doc: 'https://ag-dev.fr/documentation/expressfood.zip',
      },
      technologies: ['UML'],
      fr: {
        name: 'Express Food',
        type: 'Projet scolaire',
        description: `ExpressFood est un projet un peu spécial pour moi, il nous a été demandé non pas de coder mais, de réaliser des schémas UML ainsi qu'une base de données y correspondant. <br>
        J'ai donc dû utiliser différents outils en ligne pour les schémas avant de passer à MySQL Workbench pour la création de ma base de données. <br>
        Vous trouverez ci dessous tous mes travaux réalisés pour ce projet.`,
      },
      en: {
        name: 'Express Food',
        type: 'School project',
        description: `ExpressFood is a somewhat special project for me, we were asked not to code but to create UML schemas as well as a corresponding database. <br>
        So I had to use different online tools for schemas before moving to MySQL Workbench for the creation of my database. <br>
        You will find below all my work done for this project.`,
      },
    },

    botGenerator: {
      path: 'botGenerator',
      preview: {
        desktop: {
          big: botGeneratorDesktopBig,
          medium: botGeneratorDesktopMedium,
          small: botGeneratorDesktopSmall,
        },
        mobile: {
          big: botGeneratorMobileBig,
          medium: botGeneratorMobileMedium,
          small: botGeneratorMobileSmall,
        },
      },
      logo: botGeneratorLogo,
      links: {
        project: 'https://ag-dev.fr/openclassrooms/generator/',
      },
      technologies: ['JavaScript', 'Html', 'Css'],
      fr: {
        name: 'Super phrase generator',
        type: 'Projet scolaire',
        description: `Ce mini projet scolaire visais à créer un générateur de phrases aléatoire uniquement en JavaScript. <br>
        J'ai voulé poussé le projet un peu plus loins en le rendant accessible autour d'un design responsive.`,
      },
      en: {
        name: 'Super phrase generator',
        type: 'School project',
        description: `This mini school project aimed to create a random sentence generator only in JavaScript. <br>
        I wanted to push the project a little further by making it accessible around a responsive design.`,
      },
    },

    spaceShipArena: {
      path: 'spaceShipArena',
      preview: {
        desktop: {
          big: spaceShipArenaDesktopBig,
          medium: spaceShipArenaDesktopMedium,
          small: spaceShipArenaDesktopSmall,
        },
      },
      logo: spaceShipArenaLogo,
      links: {
        github: 'https://github.com/ga-devfront/spaceship-arenaV2',
        project: 'https://ag-dev.fr/openclassrooms/spaceship-arena/',
      },
      technologies: ['JavaScript', 'Html', 'Css'],
      fr: {
        name: 'Spaceship Arena',
        type: 'Projet scolaire',
        description: `Ce projet scolaire était un de mes favoris, il nous était demandé de réalisé un jeu de plateau en tour par tour. <br>
      Etant passionné de l'univers des jeux vidéo depuis toujours, j'ai poussé le projet au maximum en réalisant un jeu de plateau en 3D isométrique dans un univers spatial. <br>
      Vous pouvez y choisir votre vaisseau qui aura une taille et des statistiques différentes, ce qui rend le jeu encore plus complet! <br>
      L'intégralité des sprites et du design on été réalisés par mes soins.`,
      },
      en: {
        name: 'Spaceship Arena',
        type: 'School project',
        description: `This school project was one of my favorites, we were asked to make a turn-based board game. <br>
      Being passionate about the world of video games since always, I pushed the project to the maximum by realizing a board game in isometric 3D in a space universe. <br>
      You can choose your ship which will have a different size and statistics, which makes the game even more complete! <br>
      All the sprites and the design were made by me.`,
      },
    },

    foodaily: {
      path: 'foodaily',
      preview: {
        desktop: {
          big: foodailyDesktopBig,
          medium: foodailyDesktopMedium,
          small: foodailyDesktopSmall,
        },
        mobile: {
          big: foodailyMobileBig,
          medium: foodailyMobileMedium,
          small: foodailyMobileSmall,
        },
      },
      logo: foodailyLogo,
      links: {
        github: 'https://github.com/ga-devfront/foodaily-v2',
        project: 'https://ag-dev.fr/openclassrooms/foodaily/',
      },
      technologies: ['JavaScript', 'Html', 'Css', 'VueJS', 'API'],
      fr: {
        name: 'Foodaily',
        type: 'Projet scolaire',
        description: `Ce projet est un des plus complet que j'ai eu à réaliser lors de ma formation. Il nous était demandé de réaliser un site d'avis de restaurant en utilisant les API Google. <br>
        J'ai aussi voulue utiliser VueJS afin d'agrandir mes compétences, ce qui collait tout à fait au projet étant donné que VueJS est réactif. <br>
        Le design a été réalisé par mes soins et est aussi responsive.`,
      },
      en: {
        name: 'Foodaily',
        type: 'School project',
        description: `This project is one of the most complete that I had to carry out during my training. We were asked to build a restaurant review site using Google APIs. <br>
        I also wanted to use VueJS to broaden my skills, which was perfectly suited to the project since VueJS is reactive. <br>
        The design was made by me and is also responsive.`,
      },
    },

    todo: {
      path: 'todo',
      preview: {
        desktop: {
          big: todoDesktopBig,
          medium: todoDesktopMedium,
          small: todoDesktopSmall,
        },
        mobile: {
          big: todoMobileBig,
          medium: todoMobileMedium,
          small: todoMobileSmall,
        },
      },
      logo: todoLogo,
      links: {
        github: 'https://github.com/ga-devfront/To-Do-List',
        project: 'https://ag-dev.fr/openclassrooms/todolist/',
      },
      technologies: ['JavaScript', 'Html', 'Css', 'Jasmine'],
      fr: {
        name: 'Todo list',
        type: 'Projet scolaire',
        description: `Ce projet scolaire un peu particulier nous demandais de reprendre un projet déjà existant afin d'en corriger ces erreurs, de l'améliorer en terme de performances, ainsi que, d'écrire des tests grace à Jasmine. <br>
        J'ai aussi créé une documentation détaillée sur le projet et un audit sur la page GitHub de celui-ci.`,
      },
      en: {
        name: 'Todo list',
        type: 'School project',
        description: `This rather special school project asked us to take over an already existing project in order to correct these errors, improve it in terms of performance, as well as write tests thanks to Jasmine. <br>
        I also created detailed documentation on the project and an audit on its GitHub page.`,
      },
    },
  },
};
</script>
