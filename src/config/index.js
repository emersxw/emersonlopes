module.exports = {
  siteTitle: 'Emerson Lopes | Software Engineer',
  siteDescription:
    'Emerson Lopes is a developer / coder / data  based in Montes Claros, MG, Brazil specializing in building (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Emerson, Lopes, emersonlopes, software engineer, front-end engineer, web developer, javascript, unimontes',
  siteUrl: 'https://emersonlopes.me',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Emerson Lopes',
  location: 'Montes Claros, MG, Brazil',
  email: 'emersonlopxs@gmail.com',
  github: 'https://github.com/emersonlopxs/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/emersonlopxs/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/emersonlopxs/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/emersonlopxs/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/emersonlopxs/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/emersonlopxs',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    // {
    //   name: 'Experience',
    //   url: '#jobs',
    // },
    {
      name: 'Projects',
      url: '#projects',
    },
    {
      name: 'Blog',
      url: '#blog',
    },
    {
      name: 'Youtube',
      url: '#youtube',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
    // {
    //   name: 'Contract',
    //   url: '#yey',
    // },
  ],

  twitterHandle: '@emersonlopxs',
  googleAnalyticsID: 'UA-119143752-1',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
