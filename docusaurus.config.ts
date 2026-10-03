import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SumniWiki',
  tagline: 'Welcome to SumniWiki',
  favicon: 'img/sumniwiki_favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sumniwiki.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sumniwiki', // Usually your GitHub org/user name.
  projectName: 'sumniwiki.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: {
        label: '한국어',
        htmlLang: 'ko-KR',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/sumniwiki-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SumniWiki',
      logo: {
        alt: 'SumniWiki Logo',
        src: 'img/sumniwiki_logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '문서',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'mailto:sumni.wiki@gmail.com',
          label: '이메일',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '문서',
          items: [
            {
              label: '개요',
              to: '/docs/overview',
            },
            {
              label: '창립자',
              to: '/docs/category/founder',
            },
            {
              label: '복음 역사',
              to: '/docs/category/the-movement',
            },
            {
              label: '가르침',
              to: '/docs/category/teachings',
            },
            {
              label: '장소',
              to: '/docs/category/places',
            },
            {
              label: '저작',
              to: '/docs/category/works',
            },
          ],
        },
        {
          title: '관련 사이트',
          items: [
            {
              label: '기독교복음선교회',
              href: 'https://www.cgm.or.kr',
            },
            {
              label: '월명동',
              href: 'https://wolmyeongdong.or.kr',
            },
          ],
        },
        {
          title: '프로젝트',
          items: [
            {
              label: '소개',
              to: '/',
            },
            {
              label: '이메일',
              href: 'mailto:sumni.wiki@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SumniWiki. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
