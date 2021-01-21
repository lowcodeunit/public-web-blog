module.exports = {
  title: 'Fathym IoT Ensemble',
  tagline: 'Experience IoT in minutes.',
  url: 'https://www.iot-ensemble.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'iot-ensemble', // Usually your GitHub org/user name.
  projectName: 'public-web', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'G-NEWEXH7W8C',
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true
    },
    navbar: {
      title: 'IoT Ensemble',
      logo: {
        alt: 'IoT Ensemble',
        src: 'img/Fathym-logo-white-01.png',
      },
      items: [
        {
         to: 'docs/',
         activeBasePath: 'docs',
         label: 'Docs',
         position: 'left',
        },
        // {
        //  to: 'api-docs/',
        //  activeBasePath: 'api-docs',
        //  label: 'API Docs',
        //  position: 'left',
        // },
        {
          href: 'https://www.iot-ensemble.com/dashboard',
          label: 'Sign In',
          position: 'right'
        }
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
              to: 'docs/',
            },
            {
              label: 'Pricing',
              to: 'docs/',
            },
            {
              label: 'Support',
              to: 'docs/introduction/support',
            }            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/iot-ensemble',
            },
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/iot-ensemble',
            //},
            {
              label: 'Twitter',
              href: 'https://twitter.com/iot-ensemble',
            },
          ],
        },
        {
          title: 'Powered by Fathym',
          items: [
            {
              label: 'Learn More',
              href: 'https://www.fathym.com',
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
        'api-docs': {
          sidebarPath: require.resolve('./sidebars.js'),
          // The iot-ensemble website repo
          editUrl: 'https://github.com/iot-ensemble/public-web/edit/master/website/',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // The iot-ensemble website repo
          editUrl: 'https://github.com/iot-ensemble/public-web/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // The iot-ensemble website blog repo
          editUrl: 'https://github.com/iot-ensemble/public-web/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
