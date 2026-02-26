import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from "@vuepress/theme-default";
import markdownItTaskLists from "markdown-it-task-lists";
import { searchPlugin } from "@vuepress/plugin-search";
import { shikiPlugin } from '@vuepress/plugin-shiki'

const base = "./";

export default defineUserConfig({
  bundler: viteBundler(),
  base: base,
  lang: "zh-CN",
  title: "BAC Document",
  description: "社区开源的第三方哔哩哔哩 API 文档",
  head: [["link", { rel: "icon", href: base + "logo2.jpg" }]],
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  theme: defaultTheme({
    logo: "/logo2.jpg",
    navbar: [
      { text: "首页", link: "/" },
      { text: "目录", link: "/#🍴目录" },
      { text: "贡献指南", link: "/CONTRIBUTING.html" },
      {
        text: "相关社群",
        children: [
          {
            text: "暂无",
            link: "#",
          },
        ],
      },
    ],
    repo: "https://github.com/jiudays/bilibili-API-collect",
    docsBranch: "master",
    editLinkText: "在 GitHub 上编辑此页",
    colorMode: "auto",
    themePlugins: {
      prismjs: false
    }
  }),
  plugins: [
    searchPlugin({}),
    shikiPlugin({
      theme: 'dark-plus',
      langs: [
        'javascript', 'typescript', 'markdown', 'protobuf', 'json', 'jsonc',
        'shell', 'go', 'html', 'http', 'java', 'kotlin', 'python', 'rust', 'c',
        'c++', 'cs', 'php', 'swift', 'text'
      ]
    })
  ],
  extendsMarkdown: (md) => {
    md.use(markdownItTaskLists);
  }
});
