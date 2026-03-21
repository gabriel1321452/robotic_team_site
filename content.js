(function () {
  const KEYS = {
    BLOG_POSTS: "damerbots_blog_posts",
    LEADERSHIP_TEAM: "damerbots_leadership_team",
    ROBOTS: "damerbots_robots",
    OUR_STORY: "damerbots_our_story",
    ACHIEVEMENTS: "damerbots_achievements",
    GALLERY_PHOTOS: "damerbots_gallery_photos"
  };

  const SITE_CONTENT = {
    HOME: {
      since: "Desde 2017",
      title: "Construindo Oportunidades, Desenvolvendo Campeoes",
      paragraphs: [
        "Inspirados pelo amor ao jogo, DamerBots foi fundada. O que comecou como uma unica equipe juvenil cresceu e se tornou uma plataforma que oferece aos jovens atletas a oportunidade de crescer dentro e fora do campo.",
        "Hoje, DamerBots conta com 140+ equipes, impactando mais de 1.000 familias, formando atletas, construindo lideres e criando um legado de campeoes."
      ],
      image: "",
      video: ""
    },
    BLOG: [],
    FOTOS: [
      {
        title: "Treinos e Bastidores",
        description: "Momentos de treino, preparacao e rotina da equipe.",
        src: "./foto1.png.jpg"
      },
      {
        title: "Competicoes e Eventos",
        description: "Registros de campeonatos, viagens e apresentacoes.",
        src: "./foto2.png.jpg"
      }
    ],
    EQUIPE: {
      coCaptains: [
        {
          name: "Taseer Badar",
          title: "CO-CAPTAINS",
          image: "./perfil.png",
          instagram: "https://instagram.com"
        },
        {
          name: "Mohsin Malik",
          title: "CO-CAPTAINS",
          image: "./perfil.png",
          instagram: "https://instagram.com"
        }
      ],
      team: [],
      primaryLeads: [
        {
          name: "Carlos Avila",
          title: "HARDWARE DESIGN",
          image: "./perfil.png",
          instagram: "https://instagram.com"
        },
        {
          name: "Jillian Robbins",
          title: "HARDWARE ELECTRICAL",
          image: "./perfil.png",
          instagram: "https://instagram.com"
        },
        {
          name: "Adam Kermally",
          title: "HARDWARE FABRICATION",
          image: "./perfil.png",
          instagram: "https://instagram.com"
        },
        {
          name: "Sarah O-H",
          title: "SOFTWARE ROBOT",
          image: "./perfil.png",
          instagram: "https://instagram.com"
        },
        {
          name: "Liam S",
          title: "SOFTWARE SCOUTING: FRONT-END",
          image: "./perfil.png",
          instagram: "https://instagram.com"
        },
        {
          name: "Andy Z",
          title: "SOFTWARE SCOUTING: BACK-END",
          image: "./perfil.png",
          instagram: "https://instagram.com"
        },
        {
          name: "Kyle L",
          title: "BUSINESS AND MEDIA",
          image: "./perfil.png",
          instagram: "https://instagram.com"
        }
      ],
      secondaryLeads: [
        {
          name: "Neeraj C",
          title: "STRATEGY",
          image: "./perfil.png",
          instagram: "https://instagram.com"
        },
        {
          name: "Amy S",
          title: "IMPACT AWARD",
          image: "./perfil.png",
          instagram: "https://instagram.com"
        }
      ]
    },
    ROBOS: [],
    CONQUISTAS: []
  };

  function setJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function withId(items) {
    return (items || []).map(function (item, index) {
      return Object.assign(
        {
          id: item.id || "item-" + (index + 1)
        },
        item
      );
    });
  }

  function withOrder(items) {
    return withId(items).map(function (item, index) {
      return Object.assign(
        {
          order: index
        },
        item
      );
    });
  }

  function withCreatedAt(items) {
    return withId(items).map(function (item, index) {
      return Object.assign(
        {
          createdAt: item.createdAt || Date.now() - index,
          category: item.category || "ARTIGO"
        },
        item
      );
    });
  }

  function withRobotDefaults(items) {
    return withId(items).map(function (item) {
      return Object.assign(
        {
          year: "",
          description: "",
          image: ""
        },
        item
      );
    });
  }

  if (typeof window === "undefined" || !window.localStorage) {
    return;
  }

  setJson(KEYS.OUR_STORY, {
    since: SITE_CONTENT.HOME.since,
    title: SITE_CONTENT.HOME.title,
    paragraphs: SITE_CONTENT.HOME.paragraphs,
    image: SITE_CONTENT.HOME.image || "",
    video: SITE_CONTENT.HOME.video || ""
  });

  setJson(KEYS.LEADERSHIP_TEAM, SITE_CONTENT.EQUIPE);
  setJson(KEYS.ROBOTS, withRobotDefaults(SITE_CONTENT.ROBOS));
  setJson(KEYS.GALLERY_PHOTOS, withOrder(SITE_CONTENT.FOTOS));
  setJson(KEYS.BLOG_POSTS, withCreatedAt(SITE_CONTENT.BLOG));
  setJson(KEYS.ACHIEVEMENTS, withId(SITE_CONTENT.CONQUISTAS));

  window.DAMERBOTS_CONTENT = SITE_CONTENT;
})();
