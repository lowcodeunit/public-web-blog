const path = require('path');

module.exports = {
  title: 'Fathym',
  tagline: 'Build, deploy, and scale modern web projects',
  url: 'https://www.fathym.com',
  baseUrl: '/blog/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'lowcodeunit', // Usually your GitHub org/user name.
  projectName: 'public-web-blog', // Usually your repo name.
  themeConfig: {
    oribi: {
      trackingID: 'XzcwMzAwMzkyNA',
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(24,25,26)',
          dark: 'rgb(24,25,26)',
        }
      }
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Fathym',
        src: 'https://www.fathym.com/img/Fathym-logo-white-01.png',
      },
      items: [
        {
          to: 'https://www.fathym.com/',
          label: 'Home',
          position: 'left',
          target: '_top',
        },        
        {
          to: 'https://www.fathym.com/docs',
          label: 'Docs',
          position: 'right',
          target: '_top',
        },
        {
          to: '/',
          label: 'Blog',
          position: 'right',
        },
        {
          to: 'https://www.fathym.com/pricing',
          label: 'Pricing',
          position: 'right',
          target: '_top',
        },
        {
          to: 'https://www.fathym.com/dashboard',
          label: 'Login',
          position: 'right',
          target: '_top',
        },
        {
          to: 'https://www.fathym.com/dashboard/create-project',
          label: 'Get Started',
          position: 'right',
          target: '_top',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Next Steps',
          items: [
            {
              label: 'Getting Started',
              to: 'https://www.fathym.com/dashboard',
            },
            {
              label: 'Support',
              to: 'https://www.fathym.com/docs/introduction/support',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              to: 'https://stackoverflow.com/questions/tagged/lowcodeunit',
            },
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/lowcodeunit',
            //},
            {
              label: 'Twitter',
              to: 'https://twitter.com/fathymit',
            },
            {
              label: 'Instagram',
              to: 'https://instagram.com/fathymit',
            },
          ],
        },
        {
          title: 'Powered by Fathym',
          items: [
            {
              label: 'Learn More',
              to: 'https://www.fathym.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fathym, Inc`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // The lowcodeunit website blog repo
          // editUrl: 'https://github.com/lowcodeunit/public-web-blog/edit/master/website/blog/',
        },
        gtag: {
          trackingID: 'G-NEWEXH7W8C',
        },
        /* blog: {
          showReadingTime: true,
          routeBasePath: '/',
          postsPerPage: 1,
          // The lowcodeunit website blog repo
          // editUrl: 'https://github.com/lowcodeunit/public-web-blog/edit/master/website/blog/',
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
  // plugins: [path.resolve(__dirname, 'plugins/oribi')]
],

};