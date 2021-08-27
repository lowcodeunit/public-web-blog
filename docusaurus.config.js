const path = require('path');

module.exports = {
  title: 'Fathym Low Code Unit Beta',
  tagline: 'Experience IoT in minutes | No credit card required',
  url: 'https://www.lowcodeunit.com',
  baseUrl: '/blog/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'lowcodeunit', // Usually your GitHub org/user name.
  projectName: 'public-web-blog', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'G-NEWEXH7W8C',
    },
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
      title: 'Low Code Unit Beta',
      logo: {
        alt: 'Low Code Unit',
        src: 'img/Fathym-logo-white-01.png',
      },
      items: [
        {
          href: 'https://www.lowcodeunit.com/',
          label: 'Home',
          position: 'left',
          target: '_top',
        },
        {
          href: 'https://www.lowcodeunit.com/pricing',
          label: 'Pricing',
          position: 'right',
          target: '_top',
        },
        {
          href: 'https://www.lowcodeunit.com/docs',
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
          href: 'https://www.lowcodeunit.com/dashboard',
          label: 'Sign In',
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
              to: 'https://www.lowcodeunit.com/dashboard',
            },
            {
              label: 'Pricing',
              to: 'https://www.lowcodeunit.com/pricing',
            },
            {
              label: 'Support',
              to: 'https://www.lowcodeunit.com/docs/introduction/support',
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
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          postsPerPage: 1,
          // The lowcodeunit website blog repo
          // editUrl: 'https://github.com/lowcodeunit/public-web-blog/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  // plugins: [path.resolve(__dirname, 'plugins/oribi')],
};
