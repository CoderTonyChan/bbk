module.exports = {
    // base: '/vue/',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: `/icon.png` }],
        ['meta', { name: 'referrer', content: 'no-referrer' }]
    ],
    // locales: {
    //     '/': {
    //         lang: 'en-US',
    //         title: 'VuePress',
    //         description: 'Vue-powered Static Site Generator'
    //     },
    //     '/zh/': {
    //         lang: 'zh-CN',
    //         title: 'VuePress',
    //         description: 'Vue 驱动的静态网站生成器'
    //     }
    // },
    themeConfig: {
        // 内置搜索
        lastUpdated: 'Last Updated',
        search: true,
        searchMaxSuggestions: 10,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: require('./nav/en'),
                sidebar: {
                    '/bbk/': getGuideSidebar('步步高', 'Advanced'),
                    // '/plugin/': getPluginSidebar('Plugin', 'Introduction', 'Official Plugins'),
                    // '/theme/': getThemeSidebar('Theme', 'Introduction'),
                }
            },
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: require('./nav/zh'),
                sidebar: {
                    // '/zh/guide/': getGuideSidebar('指南', '深入'),
                    // '/zh/plugin/': getPluginSidebar('插件', '介绍', '官方插件'),
                    // '/zh/theme/': getThemeSidebar('主题', '介绍'),
                }
            }
        },
        // navbar: true, // 禁用导航栏
        // nav: [
        //     { text: 'Home', link: '/' },
        //     { text: 'Guide', link: '/guide/' },
        //     { text: 'External', link: 'https://google.com' },
        //     {
        //         text: 'Languages',
        //         items: [
        //             { text: 'Chinese', link: '/language/chinese/' },
        //             { text: 'Chinese', items: [{ text: 'External', link: 'https://google.com' },] },
        //             { text: 'Japanese', link: '/language/japanese/' }
        //         ]
        //     },

        // ],
        // sidebar: [
        //     {
        //         title: 'Group 1',
        //         // collapsable: true,
        //         children: [
        //             '/foo/'
        //         ]
        //     },
        //     {
        //         title: 'Group 2',
        //         children: [`/foo/`,`/foo/one/`]
        //     }
        // ],
        // sidebar: 'auto',
        // displayAllHeaders: true, // 默认值：false
        // sidebar: { // 一旦匹配错误 全部不显示了
        //     '/foo/': [
        //         '',     /* /foo/ 需要非常准确*/
        //         'one',  /* /foo/one.html */
        //         'two'   /* /foo/two.html */
        //     ],

        //     '/bar/': [
        //         '',      /* /bar/ */
        //         'three', /* /bar/three.html */
        //         'four'   /* /bar/four.html */
        //     ],
        //     // fallback
        //     '/': [
        //         '',
        //         '/foo/', /* /contact.html */
        //         '/bar/',    /* /about.html */
        //         'contact', /* /contact.html */
        //         'about',    /* /about.html */
        //     ]
        // }
        // sidebar: [ // 这种配置方法 就是有那个就自动匹配 而且 标题是显示那边的一级标题
        //     '/',
        //     '/foo/',
        // ]
    },
    // 暂时使用不了
    // plugins: ['@vuepress/blog'] 
}

function getGuideSidebar(groupA, groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'api',
                'UI',
                'Function',
            ]
        },
        // {
        //     title: groupB,
        //     collapsable: false,
        //     children: [
        //         'frontmatter',
        //         'permalinks',
        //         'markdown-slot',
        //         'global-computed'
        //     ]
        // }
    ]
}

function getPluginSidebar(pluginTitle, pluginIntro, officialPluginTitle) {
    return [
        {
            title: pluginTitle,
            collapsable: false,
            children: [
                ['', pluginIntro],
                'using-a-plugin',
                'writing-a-plugin',
                'life-cycle',
                'option-api',
                'context-api'
            ]
        },
        {
            title: officialPluginTitle,
            collapsable: false,
            children: [
                'official/plugin-search',
                'official/plugin-active-header-links',
                'official/plugin-pwa',
                'official/plugin-blog',
                'official/plugin-pagination',
                'official/plugin-google-analytics',
                'official/plugin-i18n-ui',
                'official/plugin-last-updated',
                'official/plugin-medium-zoom',
                'official/plugin-back-to-top',
                'official/plugin-register-components',
            ]
        }
    ]
}

function getThemeSidebar(groupA, introductionA) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                ['', introductionA],
                'using-a-theme',
                'writing-a-theme',
                'option-api',
                'default-theme-config'
            ]
        },
    ]
}
