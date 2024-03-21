<script>
import gitHubIcon from '../../../public/img/projects/icon/github.svg';
import npmIcon from '../../../public/img/projects/icon/npm.svg';
import docIcon from '../../../public/img/projects/icon/doc.svg';
import webIcon from '../../../public/img/projects/icon/web.svg';

import scrollEventHandlerDesktopBigWebp from '../../../public/img/projects/scroll_event_handler/desktop-mockup/big.webp';
import scrollEventHandlerDesktopBig from '../../../public/img/projects/scroll_event_handler/desktop-mockup/big.png';
import scrollEventHandlerDesktopMediumWebp from '../../../public/img/projects/scroll_event_handler/desktop-mockup/medium.webp';
import scrollEventHandlerDesktopMedium from '../../../public/img/projects/scroll_event_handler/desktop-mockup/medium.png';
import scrollEventHandlerDesktopSmallWebp from '../../../public/img/projects/scroll_event_handler/desktop-mockup/small.webp';
import scrollEventHandlerDesktopSmall from '../../../public/img/projects/scroll_event_handler/desktop-mockup/small.png';
import scrollEventHandlerMobileBigWebp from '../../../public/img/projects/scroll_event_handler/mobile-mockup/big.webp';
import scrollEventHandlerMobileBig from '../../../public/img/projects/scroll_event_handler/mobile-mockup/big.png';
import scrollEventHandlerMobileMediumWebp from '../../../public/img/projects/scroll_event_handler/mobile-mockup/medium.webp';
import scrollEventHandlerMobileMedium from '../../../public/img/projects/scroll_event_handler/mobile-mockup/medium.png';
import scrollEventHandlerMobileSmallWebp from '../../../public/img/projects/scroll_event_handler/mobile-mockup/small.webp';
import scrollEventHandlerMobileSmall from '../../../public/img/projects/scroll_event_handler/mobile-mockup/small.png';
import scrollEventHandlerLogoBigWebp from '../../../public/img/projects/scroll_event_handler/logo-big.webp';
import scrollEventHandlerLogoBig from '../../../public/img/projects/scroll_event_handler/logo-big.png';
import scrollEventHandlerLogoSmallWebp from '../../../public/img/projects/scroll_event_handler/logo-small.webp';
import scrollEventHandlerLogoSmall from '../../../public/img/projects/scroll_event_handler/logo-small.png';

import portfolioDesktopBigWebp from '../../../public/img/projects/portfolio/desktop-mockup/big.webp';
import portfolioDesktopBig from '../../../public/img/projects/portfolio/desktop-mockup/big.png';
import portfolioDesktopMediumWebp from '../../../public/img/projects/portfolio/desktop-mockup/medium.webp';
import portfolioDesktopMedium from '../../../public/img/projects/portfolio/desktop-mockup/medium.png';
import portfolioDesktopSmallWebp from '../../../public/img/projects/portfolio/desktop-mockup/small.webp';
import portfolioDesktopSmall from '../../../public/img/projects/portfolio/desktop-mockup/small.png';
import portfolioMobileBigWebp from '../../../public/img/projects/portfolio/mobile-mockup/big.webp';
import portfolioMobileBig from '../../../public/img/projects/portfolio/mobile-mockup/big.png';
import portfolioMobileMediumWebp from '../../../public/img/projects/portfolio/mobile-mockup/medium.webp';
import portfolioMobileMedium from '../../../public/img/projects/portfolio/mobile-mockup/medium.png';
import portfolioMobileSmallWebp from '../../../public/img/projects/portfolio/mobile-mockup/small.webp';
import portfolioMobileSmall from '../../../public/img/projects/portfolio/mobile-mockup/small.png';
import portfolioLogoBigWebp from '../../../public/img/projects/portfolio/logo-big.webp';
import portfolioLogoBig from '../../../public/img/projects/portfolio/logo-big.png';
import portfolioLogoSmallWebp from '../../../public/img/projects/portfolio/logo-small.webp';
import portfolioLogoSmall from '../../../public/img/projects/portfolio/logo-small.png';

import chaletsEtCaviarDesktopBigWebp from '../../../public/img/projects/chalet_et_caviar/desktop-mockup/big.webp';
import chaletsEtCaviarDesktopBig from '../../../public/img/projects/chalet_et_caviar/desktop-mockup/big.png';
import chaletsEtCaviarDesktopMediumWebp from '../../../public/img/projects/chalet_et_caviar/desktop-mockup/medium.webp';
import chaletsEtCaviarDesktopMedium from '../../../public/img/projects/chalet_et_caviar/desktop-mockup/medium.png';
import chaletsEtCaviarDesktopSmallWebp from '../../../public/img/projects/chalet_et_caviar/desktop-mockup/small.webp';
import chaletsEtCaviarDesktopSmall from '../../../public/img/projects/chalet_et_caviar/desktop-mockup/small.png';
import chaletsEtCaviarMobileBigWebp from '../../../public/img/projects/chalet_et_caviar/mobile-mockup/big.webp';
import chaletsEtCaviarMobileBig from '../../../public/img/projects/chalet_et_caviar/mobile-mockup/big.png';
import chaletsEtCaviarMobileMediumWebp from '../../../public/img/projects/chalet_et_caviar/mobile-mockup/medium.webp';
import chaletsEtCaviarMobileMedium from '../../../public/img/projects/chalet_et_caviar/mobile-mockup/medium.png';
import chaletsEtCaviarMobileSmallWebp from '../../../public/img/projects/chalet_et_caviar/mobile-mockup/small.webp';
import chaletsEtCaviarMobileSmall from '../../../public/img/projects/chalet_et_caviar/mobile-mockup/small.png';
import chaletsEtCaviarLogoBigWebp from '../../../public/img/projects/chalet_et_caviar/logo-big.webp';
import chaletsEtCaviarLogoBig from '../../../public/img/projects/chalet_et_caviar/logo-big.png';
import chaletsEtCaviarLogoSmallWebp from '../../../public/img/projects/chalet_et_caviar/logo-small.webp';
import chaletsEtCaviarLogoSmall from '../../../public/img/projects/chalet_et_caviar/logo-small.png';

import ffpaDesktopBigWebp from '../../../public/img/projects/ffpa/desktop-mockup/big.webp';
import ffpaDesktopBig from '../../../public/img/projects/ffpa/desktop-mockup/big.png';
import ffpaDesktopMediumWebp from '../../../public/img/projects/ffpa/desktop-mockup/medium.webp';
import ffpaDesktopMedium from '../../../public/img/projects/ffpa/desktop-mockup/medium.png';
import ffpaDesktopSmallWebp from '../../../public/img/projects/ffpa/desktop-mockup/small.webp';
import ffpaDesktopSmall from '../../../public/img/projects/ffpa/desktop-mockup/small.png';
import ffpaMobileBigWebp from '../../../public/img/projects/ffpa/mobile-mockup/big.webp';
import ffpaMobileBig from '../../../public/img/projects/ffpa/mobile-mockup/big.png';
import ffpaMobileMediumWebp from '../../../public/img/projects/ffpa/mobile-mockup/medium.webp';
import ffpaMobileMedium from '../../../public/img/projects/ffpa/mobile-mockup/medium.png';
import ffpaMobileSmallWebp from '../../../public/img/projects/ffpa/mobile-mockup/small.webp';
import ffpaMobileSmall from '../../../public/img/projects/ffpa/mobile-mockup/small.png';
import ffpaLogoBigWebp from '../../../public/img/projects/ffpa/logo-big.webp';
import ffpaLogoBig from '../../../public/img/projects/ffpa/logo-big.png';
import ffpaLogoSmallWebp from '../../../public/img/projects/ffpa/logo-small.webp';
import ffpaLogoSmall from '../../../public/img/projects/ffpa/logo-small.png';

import expressFoodDesktopBigWebp from '../../../public/img/projects/expressfood/desktop-mockup/big.webp';
import expressFoodDesktopBig from '../../../public/img/projects/expressfood/desktop-mockup/big.png';
import expressFoodDesktopMediumWebp from '../../../public/img/projects/expressfood/desktop-mockup/medium.webp';
import expressFoodDesktopMedium from '../../../public/img/projects/expressfood/desktop-mockup/medium.png';
import expressFoodDesktopSmallWebp from '../../../public/img/projects/expressfood/desktop-mockup/small.webp';
import expressFoodDesktopSmall from '../../../public/img/projects/expressfood/desktop-mockup/small.png';
import expressFoodLogoBigWebp from '../../../public/img/projects/expressfood/logo-big.webp';
import expressFoodLogoBig from '../../../public/img/projects/expressfood/logo-big.png';
import expressFoodLogoSmallWebp from '../../../public/img/projects/expressfood/logo-small.webp';
import expressFoodLogoSmall from '../../../public/img/projects/expressfood/logo-small.png';

import botGeneratorDesktopBigWebp from '../../../public/img/projects/citation/desktop-mockup/big.webp';
import botGeneratorDesktopBig from '../../../public/img/projects/citation/desktop-mockup/big.png';
import botGeneratorDesktopMediumWebp from '../../../public/img/projects/citation/desktop-mockup/medium.webp';
import botGeneratorDesktopMedium from '../../../public/img/projects/citation/desktop-mockup/medium.png';
import botGeneratorDesktopSmallWebp from '../../../public/img/projects/citation/desktop-mockup/small.webp';
import botGeneratorDesktopSmall from '../../../public/img/projects/citation/desktop-mockup/small.png';
import botGeneratorMobileBigWebp from '../../../public/img/projects/citation/mobile-mockup/big.webp';
import botGeneratorMobileBig from '../../../public/img/projects/citation/mobile-mockup/big.png';
import botGeneratorMobileMediumWebp from '../../../public/img/projects/citation/mobile-mockup/medium.webp';
import botGeneratorMobileMedium from '../../../public/img/projects/citation/mobile-mockup/medium.png';
import botGeneratorMobileSmallWebp from '../../../public/img/projects/citation/mobile-mockup/small.webp';
import botGeneratorMobileSmall from '../../../public/img/projects/citation/mobile-mockup/small.png';
import botGeneratorLogoBigWebp from '../../../public/img/projects/citation/logo-big.webp';
import botGeneratorLogoBig from '../../../public/img/projects/citation/logo-big.png';
import botGeneratorLogoSmallWebp from '../../../public/img/projects/citation/logo-small.webp';
import botGeneratorLogoSmall from '../../../public/img/projects/citation/logo-small.png';

import spaceShipArenaDesktopBigWebp from '../../../public/img/projects/spaceship_arena/desktop-mockup/big.webp';
import spaceShipArenaDesktopBig from '../../../public/img/projects/spaceship_arena/desktop-mockup/big.png';
import spaceShipArenaDesktopMediumWebp from '../../../public/img/projects/spaceship_arena/desktop-mockup/medium.webp';
import spaceShipArenaDesktopMedium from '../../../public/img/projects/spaceship_arena/desktop-mockup/medium.png';
import spaceShipArenaDesktopSmallWebp from '../../../public/img/projects/spaceship_arena/desktop-mockup/small.webp';
import spaceShipArenaDesktopSmall from '../../../public/img/projects/spaceship_arena/desktop-mockup/small.png';
import spaceShipArenaLogoBigWebp from '../../../public/img/projects/spaceship_arena/logo-big.webp';
import spaceShipArenaLogoBig from '../../../public/img/projects/spaceship_arena/logo-big.png';
import spaceShipArenaLogoSmallWebp from '../../../public/img/projects/spaceship_arena/logo-small.webp';
import spaceShipArenaLogoSmall from '../../../public/img/projects/spaceship_arena/logo-small.png';

import foodailyDesktopBigWebp from '../../../public/img/projects/foodaily/desktop-mockup/big.webp';
import foodailyDesktopBig from '../../../public/img/projects/foodaily/desktop-mockup/big.png';
import foodailyDesktopMediumWebp from '../../../public/img/projects/foodaily/desktop-mockup/medium.webp';
import foodailyDesktopMedium from '../../../public/img/projects/foodaily/desktop-mockup/medium.png';
import foodailyDesktopSmallWebp from '../../../public/img/projects/foodaily/desktop-mockup/small.webp';
import foodailyDesktopSmall from '../../../public/img/projects/foodaily/desktop-mockup/small.png';
import foodailyMobileBigWebp from '../../../public/img/projects/foodaily/mobile-mockup/big.webp';
import foodailyMobileBig from '../../../public/img/projects/foodaily/mobile-mockup/big.png';
import foodailyMobileMediumWebp from '../../../public/img/projects/foodaily/mobile-mockup/medium.webp';
import foodailyMobileMedium from '../../../public/img/projects/foodaily/mobile-mockup/medium.png';
import foodailyMobileSmallWebp from '../../../public/img/projects/foodaily/mobile-mockup/small.webp';
import foodailyMobileSmall from '../../../public/img/projects/foodaily/mobile-mockup/small.png';
import foodailyLogoBigWebp from '../../../public/img/projects/foodaily/logo-big.webp';
import foodailyLogoBig from '../../../public/img/projects/foodaily/logo-big.png';
import foodailyLogoSmallWebp from '../../../public/img/projects/foodaily/logo-small.webp';
import foodailyLogoSmall from '../../../public/img/projects/foodaily/logo-small.png';

import todoDesktopBigWebp from '../../../public/img/projects/todolist/desktop-mockup/big.webp';
import todoDesktopBig from '../../../public/img/projects/todolist/desktop-mockup/big.png';
import todoDesktopMediumWebp from '../../../public/img/projects/todolist/desktop-mockup/medium.webp';
import todoDesktopMedium from '../../../public/img/projects/todolist/desktop-mockup/medium.png';
import todoDesktopSmallWebp from '../../../public/img/projects/todolist/desktop-mockup/small.webp';
import todoDesktopSmall from '../../../public/img/projects/todolist/desktop-mockup/small.png';
import todoMobileBigWebp from '../../../public/img/projects/todolist/mobile-mockup/big.webp';
import todoMobileBig from '../../../public/img/projects/todolist/mobile-mockup/big.png';
import todoMobileMediumWebp from '../../../public/img/projects/todolist/mobile-mockup/medium.webp';
import todoMobileMedium from '../../../public/img/projects/todolist/mobile-mockup/medium.png';
import todoMobileSmallWebp from '../../../public/img/projects/todolist/mobile-mockup/small.webp';
import todoMobileSmall from '../../../public/img/projects/todolist/mobile-mockup/small.png';
import todoLogoBigWebp from '../../../public/img/projects/todolist/logo-big.webp';
import todoLogoBig from '../../../public/img/projects/todolist/logo-big.png';
import todoLogoSmallWebp from '../../../public/img/projects/todolist/logo-small.webp';
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
          bigWebp: scrollEventHandlerDesktopBigWebp,
          big: scrollEventHandlerDesktopBig,
          mediumWebp: scrollEventHandlerDesktopMediumWebp,
          medium: scrollEventHandlerDesktopMedium,
          smallWebp: scrollEventHandlerDesktopSmallWebp,
          small: scrollEventHandlerDesktopSmall,
        },
        mobile: {
          bigWebp: scrollEventHandlerMobileBigWebp,
          big: scrollEventHandlerMobileBig,
          mediumWebp: scrollEventHandlerMobileMediumWebp,
          medium: scrollEventHandlerMobileMedium,
          smallWebp: scrollEventHandlerMobileSmallWebp,
          small: scrollEventHandlerMobileSmall,
        },
      },
      logo: {
        bigWebp: scrollEventHandlerLogoBigWebp,
        big: scrollEventHandlerLogoBig,
        smallWebp: scrollEventHandlerLogoSmallWebp,
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
          bigWebp: portfolioDesktopBigWebp,
          big: portfolioDesktopBig,
          mediumWebp: portfolioDesktopMediumWebp,
          medium: portfolioDesktopMedium,
          smallWebp: portfolioDesktopSmallWebp,
          small: portfolioDesktopSmall,
        },
        mobile: {
          bigWebp: portfolioMobileBigWebp,
          big: portfolioMobileBig,
          mediumWebp: portfolioMobileMediumWebp,
          medium: portfolioMobileMedium,
          smallWebp: portfolioMobileSmallWebp,
          small: portfolioMobileSmall,
        },
      },
      logo: {
        bigWebp: portfolioLogoBigWebp,
        big: portfolioLogoBig,
        smallWebp: portfolioLogoSmallWebp,
        small: portfolioLogoSmall,
      },
      links: {
        github: 'https://github.com/ga-devfront/portfolio-v1',
        project: 'https://v1.ag-dev.fr/',
      },
      technologies: ['JavaScript', 'Html', 'Css', 'Sass', 'VueJS'],
    },

    chaletsetcaviar: {
      path: 'chaletsetcaviar',
      preview: {
        desktop: {
          bigWebp: chaletsEtCaviarDesktopBigWebp,
          big: chaletsEtCaviarDesktopBig,
          mediumWebp: chaletsEtCaviarDesktopMediumWebp,
          medium: chaletsEtCaviarDesktopMedium,
          smallWebp: chaletsEtCaviarDesktopSmallWebp,
          small: chaletsEtCaviarDesktopSmall,
        },
        mobile: {
          bigWebp: chaletsEtCaviarMobileBigWebp,
          big: chaletsEtCaviarMobileBig,
          mediumWebp: chaletsEtCaviarMobileMediumWebp,
          medium: chaletsEtCaviarMobileMedium,
          smallWebp: chaletsEtCaviarMobileSmallWebp,
          small: chaletsEtCaviarMobileSmall,
        },
      },
      logo: {
        bigWebp: chaletsEtCaviarLogoBigWebp,
        big: chaletsEtCaviarLogoBig,
        smallWebp: chaletsEtCaviarLogoSmallWebp,
        small: chaletsEtCaviarLogoSmall,
      },
      links: {
      },
      technologies: ['Html', 'Css', 'Wordpress'],
    },

    ffpa: {
      path: 'ffpa',
      preview: {
        desktop: {
          bigWebp: ffpaDesktopBigWebp,
          big: ffpaDesktopBig,
          mediumWebp: ffpaDesktopMediumWebp,
          medium: ffpaDesktopMedium,
          smallWebp: ffpaDesktopSmallWebp,
          small: ffpaDesktopSmall,
        },
        mobile: {
          bigWebp: ffpaMobileBigWebp,
          big: ffpaMobileBig,
          mediumWebp: ffpaMobileMediumWebp,
          medium: ffpaMobileMedium,
          smallWebp: ffpaMobileSmallWebp,
          small: ffpaMobileSmall,
        },
      },
      logo: {
        bigWebp: ffpaLogoBigWebp,
        big: ffpaLogoBig,
        smallWebp: ffpaLogoSmallWebp,
        small: ffpaLogoSmall,
      },
      links: {
      },
      technologies: ['Html', 'Css', 'Bootstrap'],
    },

    expressfood: {
      path: 'expressfood',
      preview: {
        desktop: {
          bigWebp: expressFoodDesktopBigWebp,
          big: expressFoodDesktopBig,
          mediumWebp: expressFoodDesktopMediumWebp,
          medium: expressFoodDesktopMedium,
          smallWebp: expressFoodDesktopSmallWebp,
          small: expressFoodDesktopSmall,
        },
      },
      logo: {
        bigWebp: expressFoodLogoBigWebp,
        big: expressFoodLogoBig,
        smallWebp: expressFoodLogoSmallWebp,
        small: expressFoodLogoSmall,
      },
      links: {
      },
      technologies: ['UML'],
    },

    botgenerator: {
      path: 'botgenerator',
      preview: {
        desktop: {
          bigWebp: botGeneratorDesktopBigWebp,
          big: botGeneratorDesktopBig,
          mediumWebp: botGeneratorDesktopMediumWebp,
          medium: botGeneratorDesktopMedium,
          smallWebp: botGeneratorDesktopSmallWebp,
          small: botGeneratorDesktopSmall,
        },
        mobile: {
          bigWebp: botGeneratorMobileBigWebp,
          big: botGeneratorMobileBig,
          mediumWebp: botGeneratorMobileMediumWebp,
          medium: botGeneratorMobileMedium,
          smallWebp: botGeneratorMobileSmallWebp,
          small: botGeneratorMobileSmall,
        },
      },
      logo: {
        bigWebp: botGeneratorLogoBigWebp,
        big: botGeneratorLogoBig,
        smallWebp: botGeneratorLogoSmallWebp,
        small: botGeneratorLogoSmall,
      },
      links: {
      },
      technologies: ['JavaScript', 'Html', 'Css'],
    },

    spaceshiparena: {
      path: 'spaceshiparena',
      preview: {
        desktop: {
          bigWebp: spaceShipArenaDesktopBigWebp,
          big: spaceShipArenaDesktopBig,
          mediumWebp: spaceShipArenaDesktopMediumWebp,
          medium: spaceShipArenaDesktopMedium,
          smallWebp: spaceShipArenaDesktopSmallWebp,
          small: spaceShipArenaDesktopSmall,
        },
      },
      logo: {
        bigWebp: spaceShipArenaLogoBigWebp,
        big: spaceShipArenaLogoBig,
        smallWebp: spaceShipArenaLogoSmallWebp,
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
          bigWebp: foodailyDesktopBigWebp,
          big: foodailyDesktopBig,
          mediumWebp: foodailyDesktopMediumWebp,
          medium: foodailyDesktopMedium,
          smallWebp: foodailyDesktopSmallWebp,
          small: foodailyDesktopSmall,
        },
        mobile: {
          bigWebp: foodailyMobileBigWebp,
          big: foodailyMobileBig,
          mediumWebp: foodailyMobileMediumWebp,
          medium: foodailyMobileMedium,
          smallWebp: foodailyMobileSmallWebp,
          small: foodailyMobileSmall,
        },
      },
      logo: {
        bigWebp: foodailyLogoBigWebp,
        big: foodailyLogoBig,
        smallWebp: foodailyLogoSmallWebp,
        small: foodailyLogoSmall,
      },
      links: {
      },
      technologies: ['JavaScript', 'Html', 'Css', 'VueJS', 'API'],
    },

    todo: {
      path: 'todo',
      preview: {
        desktop: {
          bigWebp: todoDesktopBigWebp,
          big: todoDesktopBig,
          mediumWebp: todoDesktopMediumWebp,
          medium: todoDesktopMedium,
          smallWebp: todoDesktopSmallWebp,
          small: todoDesktopSmall,
        },
        mobile: {
          bigWebp: todoMobileBigWebp,
          big: todoMobileBig,
          mediumWebp: todoMobileMediumWebp,
          medium: todoMobileMedium,
          smallWebp: todoMobileSmallWebp,
          small: todoMobileSmall,
        },
      },
      logo: {
        bigWebp: todoLogoBigWebp,
        big: todoLogoBig,
        smallWebp: todoLogoSmallWebp,
        small: todoLogoSmall,
      },
      links: {
      },
      technologies: ['JavaScript', 'Html', 'Css', 'Jasmine'],
    },
  },
};
</script>
