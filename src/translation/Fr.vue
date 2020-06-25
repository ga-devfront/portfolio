<script>
export default {
  seo: {
    title: 'Portfolio AG dev',
    description: 'Portfolio de Alexis Guyomar, développeur Frontend à la recherche d\'un travail sur Genève.',
  },
  progress: 'Je suis actuellement entrain de coder cette page, revenez plus tard !',
  home: {
    title: 'Développeur d\'applications frontend',
  },
  about: {
    title: 'Bonjour, moi c\'est Alexis !',
    paragraph: {
      1: 'Votre entreprise évolue et vous <mark>cherchez un nouveau codeur</mark> pour rejoindre votre équipe ?',
      2: 'Vous souhaitez recruter un candidat pour <mark>sa motivation</mark>, sa <mark>soif d’apprendre</mark> continuellement et son <mark>amour pour le web</mark>? Alors vous êtes au bon endroit !',
      3: 'Je suis <mark>passionné</mark> par le webdesign depuis des années. Après des débuts en autodidacte sur Photoshop, j’ai souhaité formaliser et compléter mes compétences au travers d’une <mark>formation de développeur</mark> frontend chez OpenClassrooms.',
      4: 'Tout au long de celle-ci, j\'ai eu à cœur de <mark>pousser toujours plus loin</mark> les projets que j’entreprends, afin, non pas de remplir les objectifs, mais de les dépasser tout en <mark>respectant les délais</mark>.',
      5: 'Vous avez envie d’en apprendre plus sur ce que <mark>j\'ai à vous offrir</mark> ? Alors n’hésitez pas à parcourir mon portfolio et à <mark>me contacter</mark>.',
    },
  },
  projects: {
    name: 'Nom',
    type: 'Type',
    description: 'Description',
    technologies: 'Technologies',
    scrolleventhandler: {
      name: 'Scroll event handler',
      type: 'Projet personnel',
      description: `Ce package NPM permet de lire les événements de scroll ou de touch et de lui assigner un callback.<br>
      Les paramétrages permettent de choisir de combien scroll ou a combien de distance de touch le callback est appelé en prenant en compte la direction sur tous les axes.<br>
      Plusieurs méthodes ont aussi été implémenté afin de permettre la modification des paramètres ou la suppression du listener.<br>
      Plus d'informations sont disponibles sur la documentation GitHub.`,
    },
    portfolio: {
      name: 'Portfolio',
      type: 'Projet personnel',
      description: `Mon portfolio professionnel sur lequel vous naviguez actuellement! Vous y trouverez toutes les informations à mon sujet ainsi que sur mes projets. <br>
      J'ai travaillé dessus en essayant d'utiliser un maximum les acquis obtenus lors de ma formation. <br>
      Ce projet utilise également mon package NPM "Scroll event handler".`,
    },
    chaletsetcaviar: {
      name: 'Chalets et Caviar',
      type: 'Projet scolaire',
      description: `Ce projet scolaire nous demandais de réaliser un site pour une agence de location de chalets de luxe avec Wordpress.<br>
      J'ai donc aussi bien essayé de travailler le design, le contenue ainsi qu'avec les plugins Wordpress. <br>
      Vous trouverez également le document d'utilisation du site fait par mes soins.`,
    },
    ffpa: {
      name: 'Festival des films de plein air',
      type: 'Projet scolaire',
      description: `Pour ce projet scolaire il nous était demandé de réaliser un site responsive avec Bootstrap pour un festival des films de plein air. <br>
      Mon travail a donc été concentré sur le design comme sur l'utilisation de Bootstrap de manière responsive. <br>
      Vous trouverez également le cahier des charges réalisé par mes soins.`,
    },
    expressfood: {
      name: 'Express Food',
      type: 'Projet scolaire',
      description: `ExpressFood est un projet un peu spécial pour moi, il nous a été demandé non pas de coder mais, de réaliser des schémas UML ainsi qu'une base de données y correspondant. <br>
      J'ai donc dû utiliser différents outils en ligne pour les schémas avant de passer à MySQL Workbench pour la création de ma base de données. <br>
      Vous trouverez ci dessous tous mes travaux réalisés pour ce projet.`,
    },
    botgenerator: {
      name: 'Super phrase generator',
      type: 'Projet scolaire',
      description: `Ce mini projet scolaire visais à créer un générateur de phrases aléatoire uniquement en JavaScript. <br>
      J'ai voulé poussé le projet un peu plus loins en le rendant accessible autour d'un design responsive.`,
    },
    spaceshiparena: {
      name: 'Spaceship Arena',
      type: 'Projet scolaire',
      description: `Ce projet scolaire était un de mes favoris, il nous était demandé de réalisé un jeu de plateau en tour par tour. <br>
      Etant passionné de l'univers des jeux vidéo depuis toujours, j'ai poussé le projet au maximum en réalisant un jeu de plateau en 3D isométrique dans un univers spatial. <br>
      Vous pouvez y choisir votre vaisseau qui aura une taille et des statistiques différentes, ce qui rend le jeu encore plus complet! <br>
      L'intégralité des sprites et du design on été réalisés par mes soins.`,
    },
    foodaily: {
      name: 'Foodaily',
      type: 'Projet scolaire',
      description: `Ce projet est un des plus complet que j'ai eu à réaliser lors de ma formation. Il nous était demandé de réaliser un site d'avis de restaurant en utilisant les API Google. <br>
      J'ai aussi voulue utiliser VueJS afin d'agrandir mes compétences, ce qui collait tout à fait au projet étant donné que VueJS est réactif. <br>
      Le design a été réalisé par mes soins et est aussi responsive.`,
    },
    todo: {
      name: 'Todo list',
      type: 'Projet scolaire',
      description: `Ce projet scolaire un peu particulier nous demandais de reprendre un projet déjà existant afin d'en corriger ces erreurs, de l'améliorer en terme de performances, ainsi que, d'écrire des tests grace à Jasmine. <br>
      J'ai aussi créé une documentation détaillée sur le projet et un audit sur la page GitHub de celui-ci.`,
    },
  },
  skills: {
    details: 'Détails',
    level: {
      1: 'bases',
      2: 'aisance',
      3: 'maîtrise',
    },
    developer: {
      name: 'Développement',
    },
    tools: {
      name: 'Outils',
    },
    frontend: {
      name: 'Frontend',
    },
    js: {
      name: 'Javascript',
      description: 'Ayant travaillé sur de nombreux projets en Vanilla JavaScript lors de ma formation, je maîtrise la manipulation de DOM, l\'utilisation d\'API, les appels AJAX ainsi que toutes les possibilités offertes par ce langage.',
    },
    jquery: {
      name: 'jQuery',
      description: 'J\'ai travaillé avec jQuery sur mon projet de jeux vidéo en ligne, tout au long de ce projet de long halaine j\'ai exploité au maximum tous les aspects de cette bibliothèque JavaScript.',
    },
    vuejs: {
      name: 'Vue.js',
      description: 'J\'ai développé ce portfolio sous Vue.JS ainsi que d\'autres projets. Ce Framework réactif est un outil indispensable que je maitrise sous tout les angles.',
    },
    jasmine: {
      name: 'Jasmine',
      description: 'Jasmine est le premier Framework de test JavaScript avec lequel j\'ai travaillé, j\'aime beaucoup ça syntaxe qui est simple à lire.',
    },
    integration: {
      name: 'Intégration',
    },
    html: {
      name: 'HTML5',
      description: 'Le HTML est un langage incontournable pour un intégrateur frontend, j\'ai appris à travailler de façon optimale avec, que ce soit d\'un points de vue sémantique que SEO.',
    },
    css: {
      name: 'CSS3',
      description: 'Utilisant le langage CSS depuis le début de mes études je le maïtrise parfaitement, que ce soit pour les media queries comme pour ses selecteurs ou ses pseudo-classes.',
    },
    bootstrap: {
      name: 'Bootstrap',
      description: 'La fameuse librairie de Twitter n\'as plus beaucoup de secrets pour moi, bien que je ne l\'utilise plus sur mes récents projets je continue de m\'intéresser à ses prochaines features.',
    },
    sass: {
      name: 'Sass',
      description: 'L\'apprentissage de Sass m’as été très bénéfique pour créer se portfolio, je suis maintenant très alaise avec bien qu’il me reste des choses à apprendre de se préprocesseur.',
    },
    wp: {
      name: 'Wordpress',
      description: 'Etant déjà alaise avec les CMS j\'ai du, lors d\'un de mes projets scolaires, développé un site grâce à Wordpress. J\'en maitrîse les principals fonctionnalitées.',
    },
    vcs: {
      name: 'VCS',
    },
    git: {
      name: 'Git',
      description: 'Développant chaque projet à l\'aide de Git j\'ai appris à utiliser ses principales commandes et fonctionnalités.',
    },
    github: {
      name: 'GitHub',
      description: 'Mes derniers projets scolaires et personnel sont disponible sur GitHub. C\'est donc naturellement que j\'ai appris à maitriser parfaitement cette plateforme.',
    },
    design: {
      name: 'Conception',
    },
    photoshop: {
      name: 'Photoshop',
      description: 'Passionné de graphisme depuis toujours je maitrise parfaitement Photoshop que ce soit pour du webdesign comme de la retouche photo.',
    },
    xd: {
      name: 'XD',
      description: 'M\'étant intéressé lors de ma formation au maquettage de design web j\'ai commencé à apprendre comment s\'utilisais Adobe XD. ',
    },
    illustrator: {
      name: 'Illustrator',
      description: 'J\'ai appris depuis plusieurs années à créer mes icones ainsi que les identités graphiques qui devaient être vectorisé sous Illustrator.',
    },
    environment: {
      name: 'Environnement',
    },
    vscode: {
      name: 'Visual Studio Code',
      description: 'VSCode est selon moi un des meilleurs éditeurs de code disponible sur le marché. Je l\'utilise quel que soit le langage que je programme.',
    },
    debian: {
      name: 'Debian',
      description: 'Mon serveur web ainsi que mon environnement de développement est sous basé sous Debian. Je sais donc utiliser ses commandes les plus courantes.',
    },
    npm: {
      name: 'NPM',
      description: 'Ayant déjà développé un package NPM je sais utiliser et publier des packages.',
    },
  },
  contact: {
    contact: 'Formulaire de contact',
    social: 'Retrouvez moi aussi sur',
    button: {
      send: 'Envoyer',
      sended: 'Envoyé avec succès',
    },
    input: {
      valid: 'Valide',
      required: '*Requis',
      subject: {
        title: 'Sujet',
        error: 'Erreur : Votre sujet doit faire plus de 3 caractères.',
      },
      mail: {
        title: 'Email',
        error: 'Erreur : Votre adresse e-mail n\'est pas valide.',
      },
      text: {
        title: 'Message',
        error: 'Erreur : Votre message doit faire plus de 10 caractères.',
      },
    },
  },
  error404: {
    title: 'Erreur 404',
    details: 'La page que vous cherchez n\'existe pas !',
  },
  routes: {
    home: 'Accueil',
    about: 'À propos',
    projects: 'Projets',
    currentProject: 'Projets',
    skills: 'Compétences',
    contact: 'Contact',
    undefined: 'Erreur 404',
    error404: 'Erreur 404',
  },
};
</script>
