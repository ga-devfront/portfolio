<script>
import gitHubIcon from '../../../public/img/projects/icon/github.svg';
import npmIcon from '../../../public/img/projects/icon/npm.svg';
import docIcon from '../../../public/img/projects/icon/doc.svg';
import webIcon from '../../../public/img/projects/icon/web.svg';

import scrollEventHandlerDesktop from '../../../public/img/projects/scroll_event_handler/macbook mockup.png';
import scrollEventHandlerMobile from '../../../public/img/projects/scroll_event_handler/s10 mockup.png';
import scrollEventHandlerLogo from '../../../public/img/projects/scroll_event_handler/logo.png';

import portfolioDesktop from '../../../public/img/projects/portfolio/macbook mockup.png';
import portfolioMobile from '../../../public/img/projects/portfolio/s10 mockup.png';
import portfolioLogo from '../../../public/img/projects/portfolio/logo.png';

import chaletsEtCaviarDesktop from '../../../public/img/projects/chalet_et_caviar/macbook mockup.png';
import chaletsEtCaviarMobile from '../../../public/img/projects/chalet_et_caviar/s10 mockup.png';
import chaletsEtCaviarLogo from '../../../public/img/projects/chalet_et_caviar/logo.png';

import ffpaDesktop from '../../../public/img/projects/ffpa/macbook mockup.png';
import ffpaMobile from '../../../public/img/projects/ffpa/s10 mockup.png';
import ffpaLogo from '../../../public/img/projects/ffpa/logo.png';

import expressFoodDesktop from '../../../public/img/projects/expressfood/macbook mockup.png';
import expressFoodLogo from '../../../public/img/projects/expressfood/logo.png';

import botGeneratorDesktop from '../../../public/img/projects/citation/macbook mockup.png';
import botGeneratorMobile from '../../../public/img/projects/citation/s10 mockup.png';
import botGeneratorLogo from '../../../public/img/projects/citation/logo.png';

import spaceShipArenaDesktop from '../../../public/img/projects/spaceship_arena/macbook mockup.png';
import spaceShipArenaLogo from '../../../public/img/projects/spaceship_arena/logo.png';

import foodailyDesktop from '../../../public/img/projects/foodaily/macbook mockup.png';
import foodailyMobile from '../../../public/img/projects/foodaily/s10 mockup.png';
import foodailyLogo from '../../../public/img/projects/foodaily/logo.png';

import todoDesktop from '../../../public/img/projects/todolist/macbook mockup.png';
import todoMobile from '../../../public/img/projects/todolist/s10 mockup.png';
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
        desktop: scrollEventHandlerDesktop,
        mobile: scrollEventHandlerMobile,
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
        description: '',
      },
      en: {
        name: 'Scroll event handler',
        type: 'Personnal project',
        description: '',
      },
    },

    portfolio: {
      path: 'portfolio',
      preview: {
        desktop: portfolioDesktop,
        mobile: portfolioMobile,
      },
      logo: portfolioLogo,
      links: {
        github: 'https://github.com/ga-devfront/portfolio',
        project: 'https://ag-dev.fr/',
      },
      technologies: ['JavaScript', 'Html', 'Css', 'Sass', 'VueJS'],
      fr: {
        name: 'Portfolio',
        type: '',
        description: '',
      },
      en: {
        name: 'Portfolio',
        type: '',
        description: '',
      },
    },

    chaletsEtCaviar: {
      path: 'chaletsEtCaviar',
      preview: {
        desktop: chaletsEtCaviarDesktop,
        mobile: chaletsEtCaviarMobile,
      },
      logo: chaletsEtCaviarLogo,
      links: {
        project: 'https://ag-dev.fr/openclassrooms/wordpress/',
        doc: 'https://ag-dev.fr/documentation/chalet_et_caviar.pdf',
      },
      technologies: ['Html', 'Css', 'Wordpress'],
      fr: {
        name: 'Chalets et Caviar',
        type: '',
        description: '',
      },
      en: {
        name: 'Chalets et Caviar',
        type: '',
        description: '',
      },
    },


    ffpa: {
      path: 'ffpa',
      preview: {
        desktop: ffpaDesktop,
        mobile: ffpaMobile,
      },
      logo: ffpaLogo,
      links: {
        project: 'https://ag-dev.fr/openclassrooms/festival/',
        doc: 'https://ag-dev.fr/documentation/ffpa.docx',
      },
      technologies: ['Html', 'Css', 'Bootstrap'],
      fr: {
        name: 'Festival des films de plein air',
        type: '',
        description: '',
      },
      en: {
        name: 'Festival des films de plein air',
        type: '',
        description: '',
      },
    },

    expressFood: {
      path: 'expressFood',
      preview: {
        desktop: expressFoodDesktop,
      },
      logo: expressFoodLogo,
      links: {
        doc: 'https://ag-dev.fr/documentation/expressfood.zip',
      },
      technologies: ['UML'],
      fr: {
        name: 'Express Food',
        type: '',
        description: '',
      },
      en: {
        name: 'Express Food',
        type: '',
        description: '',
      },
    },

    botGenerator: {
      path: 'botGenerator',
      preview: {
        desktop: botGeneratorDesktop,
        mobile: botGeneratorMobile,
      },
      logo: botGeneratorLogo,
      links: {
        project: 'https://ag-dev.fr/openclassrooms/generator/',
      },
      technologies: ['JavaScript', 'Html', 'Css'],
      fr: {
        name: 'Super phrase generator',
        type: '',
        description: '',
      },
      en: {
        name: 'Super phrase generator',
        type: '',
        description: '',
      },
    },

    spaceShipArena: {
      path: 'spaceShipArena',
      preview: {
        desktop: spaceShipArenaDesktop,
      },
      logo: spaceShipArenaLogo,
      links: {
        github: 'https://github.com/ga-devfront/spaceship-arenaV2',
        project: 'https://ag-dev.fr/openclassrooms/spaceship-arena/',
      },
      technologies: ['JavaScript', 'Html', 'Css'],
      fr: {
        name: 'Spaceship Arena',
        type: '',
        description: '',
      },
      en: {
        name: 'Spaceship Arena',
        type: '',
        description: '',
      },
    },

    foodaily: {
      path: 'foodaily',
      preview: {
        desktop: foodailyDesktop,
        mobile: foodailyMobile,
      },
      logo: foodailyLogo,
      links: {
        github: 'https://github.com/ga-devfront/foodaily-v2',
        project: 'https://ag-dev.fr/openclassrooms/foodaily/',
      },
      technologies: ['JavaScript', 'Html', 'Css', 'VueJS', 'API'],
      fr: {
        name: 'Foodaily',
        type: '',
        description: '',
      },
      en: {
        name: 'Foodaily',
        type: '',
        description: '',
      },
    },

    todo: {
      path: 'todo',
      preview: {
        desktop: todoDesktop,
        mobile: todoMobile,
      },
      logo: todoLogo,
      links: {
        github: 'https://github.com/ga-devfront/To-Do-List',
        project: 'https://ag-dev.fr/openclassrooms/todolist/',
      },
      technologies: ['JavaScript', 'Html', 'Css', 'Jasmine'],
      fr: {
        name: 'Todo list',
        type: '',
        description: '',
      },
      en: {
        name: 'Todo list',
        type: '',
        description: '',
      },
    },
  },
};
</script>
