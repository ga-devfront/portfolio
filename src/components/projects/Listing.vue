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
    languages: {
      fr: 'Langages',
      en: 'Languages',
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
        github: '',
        project: '',
        doc: '',
        npm: '',
      },
      languages: ['JavaScript', 'Html', 'Css'],
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
        github: '',
        project: '',
        doc: '',
        npm: '',
      },
      fr: {
        name: 'Portfolio',
        type: '',
        languages: '',
        description: '',
      },
      en: {
        name: 'Portfolio',
        type: '',
        languages: '',
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
        github: '',
        project: '',
        doc: '',
        npm: '',
      },
      fr: {
        name: 'Chalets et Caviar',
        type: '',
        languages: '',
        description: '',
      },
      en: {
        name: 'Chalets et Caviar',
        type: '',
        languages: '',
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
        github: '',
        project: '',
        doc: '',
        npm: '',
      },
      fr: {
        name: 'Festival des films de plein air',
        type: '',
        languages: '',
        description: '',
      },
      en: {
        name: 'Festival des films de plein air',
        type: '',
        languages: '',
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
        github: '',
        project: '',
        doc: '',
        npm: '',
      },
      fr: {
        name: 'Express Food',
        type: '',
        languages: '',
        description: '',
      },
      en: {
        name: 'Express Food',
        type: '',
        languages: '',
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
        github: '',
        project: '',
        doc: '',
        npm: '',
      },
      fr: {
        name: 'Super phrase generator',
        type: '',
        languages: '',
        description: '',
      },
      en: {
        name: 'Super phrase generator',
        type: '',
        languages: '',
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
        github: '',
        project: '',
        doc: '',
        npm: '',
      },
      fr: {
        name: 'Spaceship Arena',
        type: '',
        languages: '',
        description: '',
      },
      en: {
        name: 'Spaceship Arena',
        type: '',
        languages: '',
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
        github: '',
        project: '',
        doc: '',
        npm: '',
      },
      fr: {
        name: 'Foodaily',
        type: '',
        languages: '',
        description: '',
      },
      en: {
        name: 'Foodaily',
        type: '',
        languages: '',
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
        github: '',
        project: '',
        doc: '',
        npm: '',
      },
      fr: {
        name: 'Todo list',
        type: '',
        languages: '',
        description: '',
      },
      en: {
        name: 'Todo list',
        type: '',
        languages: '',
        description: '',
      },
    },
  },
};
</script>
