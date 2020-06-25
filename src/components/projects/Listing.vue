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
import scrollEventHandlerLogoBig from '../../../public/img/projects/scroll_event_handler/logo-big.png';
import scrollEventHandlerLogoSmall from '../../../public/img/projects/scroll_event_handler/logo-small.png';

import portfolioDesktopBig from '../../../public/img/projects/portfolio/desktop-mockup/big.png';
import portfolioDesktopMedium from '../../../public/img/projects/portfolio/desktop-mockup/medium.png';
import portfolioDesktopSmall from '../../../public/img/projects/portfolio/desktop-mockup/small.png';
import portfolioMobileBig from '../../../public/img/projects/portfolio/mobile-mockup/big.png';
import portfolioMobileMedium from '../../../public/img/projects/portfolio/mobile-mockup/medium.png';
import portfolioMobileSmall from '../../../public/img/projects/portfolio/mobile-mockup/small.png';
import portfolioLogoBig from '../../../public/img/projects/portfolio/logo-big.png';
import portfolioLogoSmall from '../../../public/img/projects/portfolio/logo-small.png';

import chaletsEtCaviarDesktopBig from '../../../public/img/projects/chalet_et_caviar/desktop-mockup/big.png';
import chaletsEtCaviarDesktopMedium from '../../../public/img/projects/chalet_et_caviar/desktop-mockup/medium.png';
import chaletsEtCaviarDesktopSmall from '../../../public/img/projects/chalet_et_caviar/desktop-mockup/small.png';
import chaletsEtCaviarMobileBig from '../../../public/img/projects/chalet_et_caviar/mobile-mockup/big.png';
import chaletsEtCaviarMobileMedium from '../../../public/img/projects/chalet_et_caviar/mobile-mockup/medium.png';
import chaletsEtCaviarMobileSmall from '../../../public/img/projects/chalet_et_caviar/mobile-mockup/small.png';
import chaletsEtCaviarLogoBig from '../../../public/img/projects/chalet_et_caviar/logo-big.png';
import chaletsEtCaviarLogoSmall from '../../../public/img/projects/chalet_et_caviar/logo-small.png';

import ffpaDesktopBig from '../../../public/img/projects/ffpa/desktop-mockup/big.png';
import ffpaDesktopMedium from '../../../public/img/projects/ffpa/desktop-mockup/medium.png';
import ffpaDesktopSmall from '../../../public/img/projects/ffpa/desktop-mockup/small.png';
import ffpaMobileBig from '../../../public/img/projects/ffpa/mobile-mockup/big.png';
import ffpaMobileMedium from '../../../public/img/projects/ffpa/mobile-mockup/medium.png';
import ffpaMobileSmall from '../../../public/img/projects/ffpa/mobile-mockup/small.png';
import ffpaLogoBig from '../../../public/img/projects/ffpa/logo-big.png';
import ffpaLogoSmall from '../../../public/img/projects/ffpa/logo-small.png';

import expressFoodDesktopBig from '../../../public/img/projects/expressfood/desktop-mockup/big.png';
import expressFoodDesktopMedium from '../../../public/img/projects/expressfood/desktop-mockup/medium.png';
import expressFoodDesktopSmall from '../../../public/img/projects/expressfood/desktop-mockup/small.png';
import expressFoodLogoBig from '../../../public/img/projects/expressfood/logo-big.png';
import expressFoodLogoSmall from '../../../public/img/projects/expressfood/logo-small.png';

import botGeneratorDesktopBig from '../../../public/img/projects/citation/desktop-mockup/big.png';
import botGeneratorDesktopMedium from '../../../public/img/projects/citation/desktop-mockup/medium.png';
import botGeneratorDesktopSmall from '../../../public/img/projects/citation/desktop-mockup/small.png';
import botGeneratorMobileBig from '../../../public/img/projects/citation/mobile-mockup/big.png';
import botGeneratorMobileMedium from '../../../public/img/projects/citation/mobile-mockup/medium.png';
import botGeneratorMobileSmall from '../../../public/img/projects/citation/mobile-mockup/small.png';
import botGeneratorLogoBig from '../../../public/img/projects/citation/logo-big.png';
import botGeneratorLogoSmall from '../../../public/img/projects/citation/logo-small.png';

import spaceShipArenaDesktopBig from '../../../public/img/projects/spaceship_arena/desktop-mockup/big.png';
import spaceShipArenaDesktopMedium from '../../../public/img/projects/spaceship_arena/desktop-mockup/medium.png';
import spaceShipArenaDesktopSmall from '../../../public/img/projects/spaceship_arena/desktop-mockup/small.png';
import spaceShipArenaLogoBig from '../../../public/img/projects/spaceship_arena/logo-big.png';
import spaceShipArenaLogoSmall from '../../../public/img/projects/spaceship_arena/logo-small.png';

import foodailyDesktopBig from '../../../public/img/projects/foodaily/desktop-mockup/big.png';
import foodailyDesktopMedium from '../../../public/img/projects/foodaily/desktop-mockup/medium.png';
import foodailyDesktopSmall from '../../../public/img/projects/foodaily/desktop-mockup/small.png';
import foodailyMobileBig from '../../../public/img/projects/foodaily/mobile-mockup/big.png';
import foodailyMobileMedium from '../../../public/img/projects/foodaily/mobile-mockup/medium.png';
import foodailyMobileSmall from '../../../public/img/projects/foodaily/mobile-mockup/small.png';
import foodailyLogoBig from '../../../public/img/projects/foodaily/logo-big.png';
import foodailyLogoSmall from '../../../public/img/projects/foodaily/logo-small.png';

import todoDesktopBig from '../../../public/img/projects/todolist/desktop-mockup/big.png';
import todoDesktopMedium from '../../../public/img/projects/todolist/desktop-mockup/medium.png';
import todoDesktopSmall from '../../../public/img/projects/todolist/desktop-mockup/small.png';
import todoMobileBig from '../../../public/img/projects/todolist/mobile-mockup/big.png';
import todoMobileMedium from '../../../public/img/projects/todolist/mobile-mockup/medium.png';
import todoMobileSmall from '../../../public/img/projects/todolist/mobile-mockup/small.png';
import todoLogoBig from '../../../public/img/projects/todolist/logo-big.png';
import todoLogoSmall from '../../../public/img/projects/todolist/logo-small.png';

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
    scrolleventhandler: {
      path: 'scrolleventhandler',
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
      logo: {
        big: scrollEventHandlerLogoBig,
        small: scrollEventHandlerLogoSmall,
      },
      links: {
        github: 'https://github.com/ga-devfront/scroll-event-handler',
        project: 'https://ag-dev.fr/private/scroll-event-handler/demo/',
        npm: 'https://www.npmjs.com/package/scroll-event-handler',
      },
      technologies: ['JavaScript', 'Html', 'Css'],
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
      logo: {
        big: portfolioLogoBig,
        small: portfolioLogoSmall,
      },
      links: {
        github: 'https://github.com/ga-devfront/portfolio',
        project: 'https://ag-dev.fr/',
      },
      technologies: ['JavaScript', 'Html', 'Css', 'Sass', 'VueJS'],
    },

    chaletsetcaviar: {
      path: 'chaletsetcaviar',
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
      logo: {
        big: chaletsEtCaviarLogoBig,
        small: chaletsEtCaviarLogoSmall,
      },
      links: {
        project: 'https://ag-dev.fr/openclassrooms/wordpress/',
        doc: 'https://ag-dev.fr/documentation/chalet_et_caviar.pdf',
      },
      technologies: ['Html', 'Css', 'Wordpress'],
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
      logo: {
        big: ffpaLogoBig,
        small: ffpaLogoSmall,
      },
      links: {
        project: 'https://ag-dev.fr/openclassrooms/festival/',
        doc: 'https://ag-dev.fr/documentation/ffpa.docx',
      },
      technologies: ['Html', 'Css', 'Bootstrap'],
    },

    expressfood: {
      path: 'expressfood',
      preview: {
        desktop: {
          big: expressFoodDesktopBig,
          medium: expressFoodDesktopMedium,
          small: expressFoodDesktopSmall,
        },
      },
      logo: {
        big: expressFoodLogoBig,
        small: expressFoodLogoSmall,
      },
      links: {
        doc: 'https://ag-dev.fr/documentation/expressfood.zip',
      },
      technologies: ['UML'],
    },

    botgenerator: {
      path: 'botgenerator',
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
      logo: {
        big: botGeneratorLogoBig,
        small: botGeneratorLogoSmall,
      },
      links: {
        project: 'https://ag-dev.fr/openclassrooms/generator/',
      },
      technologies: ['JavaScript', 'Html', 'Css'],
    },

    spaceshiparena: {
      path: 'spaceshiparena',
      preview: {
        desktop: {
          big: spaceShipArenaDesktopBig,
          medium: spaceShipArenaDesktopMedium,
          small: spaceShipArenaDesktopSmall,
        },
      },
      logo: {
        big: spaceShipArenaLogoBig,
        small: spaceShipArenaLogoSmall,
      },
      links: {
        github: 'https://github.com/ga-devfront/spaceship-arenaV2',
        project: 'https://ag-dev.fr/openclassrooms/spaceship-arena/',
      },
      technologies: ['JavaScript', 'Html', 'Css'],
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
      logo: {
        big: foodailyLogoBig,
        small: foodailyLogoSmall,
      },
      links: {
        github: 'https://github.com/ga-devfront/foodaily-v2',
        project: 'https://ag-dev.fr/openclassrooms/foodaily/',
      },
      technologies: ['JavaScript', 'Html', 'Css', 'VueJS', 'API'],
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
      logo: {
        big: todoLogoBig,
        small: todoLogoSmall,
      },
      links: {
        github: 'https://github.com/ga-devfront/To-Do-List',
        project: 'https://ag-dev.fr/openclassrooms/todolist/',
      },
      technologies: ['JavaScript', 'Html', 'Css', 'Jasmine'],
    },
  },
};
</script>
