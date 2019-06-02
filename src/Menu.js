const Menu = [
  {
    heading: "Main Navigation",
    translate: "sidebar.heading.HEADER"
  },

  {
    name: "BeactO(Icon)V",
    icon: "icon-home",
    path: "home",
    translate: "sidebar.nav.home.HOME",
    submenu: [
      {
        name: "BeatO1",
        path: "BeatO1",
        translate: "sidebar.nav.BeatO1"
      },
      {
        name: "BeatO2",
        path: "BeatO2",
        translate: "sidebar.nav.BeatO2"
      },
      {
        name: "BeatO3",
        path: "BeatO3",
        translate: "sidebar.nav.BeatO3"
      }
    ]
  },

  {
    name: "Dashboard",
    icon: "icon-pin",
    path: "dashboardV1",
    translate: "sidebar.nav.dashboard",
    label: { value: 2, color: "success" }
  },
  {
    name: "Languages",
    icon: "icon-pin",
    path: "languages",
    translate: "sidebar.nav.dashboard",
    label: { value: 2, color: "success" }
  },
  {
    name: "Texts",
    icon: "icon-tag",
    path: "Text",
    translate: "sidebar.nav.tenant.TENANT"
  },

  {
    name: "Text-Translation",
    icon: "icon-bag",
    path: "textranslation",
    translate: "sidebar.nav.owner.OWNER"
  }
];

export default Menu;
