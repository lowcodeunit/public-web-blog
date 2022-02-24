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
    navbar: {
      title: '',
      logo: {
        alt: 'Fathym',
        src: 'img/Fathym-logo-white-01.png',
      },
      items: [
        {
          href: 'https://www.fathym.com/',
          label: 'Home',
          position: 'left',
          target: '_top',
        },        
        {
          href: 'https://www.fathym.com/docs',
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
          href: 'https://www.fathym.com/dashboard',
          label: 'Log In',
          position: 'right',
          target: '_top',
        },
        {
          href: 'https://www.fathym.com/dashboard/create-project',
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
              href: 'https://stackoverflow.com/questions/tagged/lowcodeunit',
            },
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/lowcodeunit',
            //},
            {
              label: 'Twitter',
              href: 'https://twitter.com/lowcodeunit',
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
  // plugins: [path.resolve(__dirname, 'plugins/oribi')],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/articles/2022/february/2022-02-18-flashup-buzz-word-or-brilliant-idea',
            from: ['/blog/'],
          },
          // Redirect from multiple old paths to the new path
          //{
          //  to: '/docs/newDoc2',
          //  from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          //},
        ],
        //createRedirects(existingPath) {
        //  if (existingPath.includes('/community')) {
        //    // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
        //    return [
        //      existingPath.replace('/community', '/docs/team'),
        //      existingPath.replace('/community', '/docs/support'),
        //    ];
        //  }
        //  return undefined; // Return a falsy value: no redirect created
        //},
      },
    ],
  ],
};
