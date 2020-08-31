module.exports = {
  title: 'POA Documentation Hub',
  tagline: 'Make the difference.',
  url: 'https://poapool.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'poapool', // Usually your GitHub org/user name.
  projectName: 'documentation-hub', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'Make the difference TODAY by delegating to <a target="_blank" rel="noopener noreferrer" href="https://adapools.org/pool/683e89fa1bcde139504b11fbfd914f8ebe9b8db2678b3da0abdcb2f1"><span style="font-weight: bold;">POA</span></a>',
      backgroundColor: '#ffde59', // Defaults to `#fff`.
      textColor: '#000000', // Defaults to `#000`.
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'POA Documentation Hub',
      items: [
        {
          href: 'https://poapool.com',
          label: 'Website',
          position: 'right',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://blog.poapool.com',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/poapool/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Website',
              href: 'https://poapool.com',
            },
            {
              label: 'Blog',
              href: 'https://blog.poapool.com',
            },
            {
              label: 'Github',
              href: 'https://github.com/poapool/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/poapool',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/poapool',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/c/ProofofAfricaCardanoStakepool',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Proof of Africa.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
