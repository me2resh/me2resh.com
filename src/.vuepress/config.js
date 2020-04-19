// .vuepress/config.js

module.exports = {
    // Title of your website
    title: 'Me2resh',

    plugins: {
        'sitemap': {
            hostname: 'https://me2resh.com'
        },
    },

    // Description of your website
    description: 'Me2resh Personal Website and Blog',

    // Language of your website
    locales: {
        '/': {
            lang: 'en-US',
        },
        '/ar/': {
            lang: 'ar-AR',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器'
        }
    },

    // Theme to use
    theme: 'meteorlxy',

    // Theme config
    themeConfig: {
        // Language of this theme. See the [Theme Language] section below.
        lang: {

            home: 'الرئيسية',
            posts: 'الموضوعات',
            category: 'قسم',
            categories: 'الأقسام',
            tag: 'وسم',
            tags: 'الأوسمة',

            // post filter
            allCategories: 'الجميع',
            search: 'بحث',
            searchHint: 'بحث في العنوان والمحتوي',
            noRelatedPosts: 'لا يوجد مقالات متعلقة',

            // post meta
            top: 'الأعلي',
            createdAt: 'نشرت في',
            updatedAt: 'تم التحديث في',
            prevPost: 'الموضوع السابق',
            nextPost: 'الموضوع التالي',

            // post nav
            toc: 'جدول المحتويات',
            comments: 'التعليقات',

            // hints
            notFound: 'للأسف! هذه الصفحة غير موجودة',
        },
        lang: 'en-US',

        // Personal infomation (delete the fields if you don't have / don't want to display)
        personalInfo: {
            // Nickname
            nickname: 'Me2resh',

            // Introduction of yourself (HTML supported)
            description: '<form  action="https://buttondown.email/api/emails/embed-subscribe/me2resh"  method="post"  target="popupwindow"  onsubmit="window.open(https://buttondown.email/me2resh, popupwindow)"  class="embeddable-buttondown-form">  <label for="bd-email">Subscribe to the newsletter</label> <br /> <br /> <input type="email" name="email" id="bd-email">  <input type="hidden" value="1" name="embed" style="outline: none;    width: 20rem;    max-width: calc(100% - 1.5em);    height: 2rem;    font-size: 0.9rem;    padding: 0 0.7rem;    border: 1px solid #cfd4db;transition: all 0.2s ease;"></input>  <input type="submit" value="Subscribe" style="    height: 1.2rem;    font-size: 0.7rem;    border: 1px solid #cfd4db;    background-color: #d9e1e4;"></input> </form>',

            // Email
            email: 'me2resh@gmail.com',

            // Your location
            location: 'London, UK',

            // Your organization
            // organization: 'Xi\'an Jiao Tong University',

            // Your avatar image
            // Set to external link
            // avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',
            avatar: 'https://avatars0.githubusercontent.com/u/23076?s=460&v=4',
            // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
            // avatar: '/img/avatar.jpg',

            // Accounts of SNS
            sns: {
                // Github account and link
                github: {
                    account: 'me2resh',
                    link: 'https://github.com/me2resh',
                },

                // Facebook account and link
                //   facebook: {
                //     account: 'meteorlxy.cn',
                //     link: 'https://www.facebook.com/meteorlxy.cn',
                //   },

                // LinkedIn account and link
                linkedin: {
                    account: 'aabdelaliem',
                    link: 'https://www.linkedin.com/in/aabdelaliem/',
                },

                // youtube: {
                //     account: 'youtube',
                //     link: 'https://www.youtube.com/channel/UCmjj5zCIy30vsJlelWwj_qg',
                // },

                // Twitter account and link
                twitter: {
                    account: 'Me2resh',
                    link: 'https://twitter.com/me2resh',
                },

                // Sina Weibo account and link
                //   weibo: {
                //     account: '@焦炭君_Meteor',
                //     link: 'https://weibo.com/u/2039655434',
                //   },

                // Zhihu account and link
                //   zhihu: {
                //     account: 'meteorlxy.cn',
                //     link: 'https://www.zhihu.com/people/meteorlxy.cn',
                //   },

                // Douban account and link
                //   douban: {
                //     account: '159342708',
                //     link: 'https://www.douban.com/people/159342708',
                //   },

                // Reddit account and link
                //   reddit: {
                //     account: 'meteorlxy',
                //     link: 'https://www.reddit.com/user/meteorlxy',
                //   },

                // Medium account and link
                //   medium: {
                //     account: 'meteorlxy.cn',
                //     link: 'https://medium.com/@meteorlxy.cn',
                //   },

                // Instagram account and link
                //   instagram: {
                //     account: 'meteorlxy.cn',
                //     link: 'https://www.instagram.com/meteorlxy.cn',
                //   },

                // GitLab account and link
                //   gitlab: {
                //     account: 'meteorlxy',
                //     link: 'https://gitlab.com/meteorlxy',
                //   },

                // Bitbucket account and link
                //   bitbucket: {
                //     account: 'meteorlxy',
                //     link: 'https://bitbucket.org/meteorlxy',
                //   },

                // Docker Hub account and link
                //   docker: {
                //     account: 'meteorlxy',
                //     link: 'https://hub.docker.com/u/meteorlxy',
                //   },

                // CSDN account and link
                //   csdn: {
                //     account: '',
                //     link: 'https://www.csdn.net/',
                //   },

                // Juejin account and link
                //   juejin: {
                //     account: 'meteorlxy',
                //     link: 'https://juejin.im/user/5c6fa9dde51d453fcb7baf09',
                //   },
            },
        },

        // Header Config (Optional)
        header: {
            // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
            background: {
                // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
                // url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTUiIGhlaWdodD0iMzU1Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJyZ2IoNjUsMTE5LDE0MikiPjwvcmVjdD48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjA4OTMzMzMzMzMzMzMzMzMzIj48L2NpcmNsZT48Y2lyY2xlIGN4PSIzNTUiIGN5PSIwIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMDg5MzMzMzMzMzMzMzMzMzMiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjAiIGN5PSIzNTUiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wODkzMzMzMzMzMzMzMzMzMyI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMzU1IiBjeT0iMzU1IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMDg5MzMzMzMzMzMzMzMzMzMiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjU5LjE2NjY2NjY2NjY2NjY2NCIgY3k9IjAiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4wMjg2NjY2NjY2NjY2NjY2NjciPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjU5LjE2NjY2NjY2NjY2NjY2NCIgY3k9IjM1NSIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjAyODY2NjY2NjY2NjY2NjY2NyI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTE4LjMzMzMzMzMzMzMzMzMzIiBjeT0iMCIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjEzMjY2NjY2NjY2NjY2NjY1Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIxMTguMzMzMzMzMzMzMzMzMzMiIGN5PSIzNTUiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4xMzI2NjY2NjY2NjY2NjY2NSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTc3LjUiIGN5PSIwIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTI0MDAwMDAwMDAwMDAwMDEiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjE3Ny41IiBjeT0iMzU1IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTI0MDAwMDAwMDAwMDAwMDEiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjIzNi42NjY2NjY2NjY2NjY2NiIgY3k9IjAiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4xNSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMjM2LjY2NjY2NjY2NjY2NjY2IiBjeT0iMzU1IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMTUiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjI5NS44MzMzMzMzMzMzMzMzIiBjeT0iMCIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjEzMjY2NjY2NjY2NjY2NjY1Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIyOTUuODMzMzMzMzMzMzMzMyIgY3k9IjM1NSIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjEzMjY2NjY2NjY2NjY2NjY1Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIwIiBjeT0iNTkuMTY2NjY2NjY2NjY2NjY0IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDYzMzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjM1NSIgY3k9IjU5LjE2NjY2NjY2NjY2NjY2NCIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjA2MzMzMzMzMzMzMzMzMzM0Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSI1OS4xNjY2NjY2NjY2NjY2NjQiIGN5PSI1OS4xNjY2NjY2NjY2NjY2NjQiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wMzczMzMzMzMzMzMzMzMzMyI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTE4LjMzMzMzMzMzMzMzMzMzIiBjeT0iNTkuMTY2NjY2NjY2NjY2NjY0IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDYzMzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjE3Ny41IiBjeT0iNTkuMTY2NjY2NjY2NjY2NjY0IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMTE1MzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjIzNi42NjY2NjY2NjY2NjY2NiIgY3k9IjU5LjE2NjY2NjY2NjY2NjY2NCIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjEyNDAwMDAwMDAwMDAwMDAxIj48L2NpcmNsZT48Y2lyY2xlIGN4PSIyOTUuODMzMzMzMzMzMzMzMyIgY3k9IjU5LjE2NjY2NjY2NjY2NjY2NCIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjExNTMzMzMzMzMzMzMzMzM0Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIwIiBjeT0iMTE4LjMzMzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjM1NSIgY3k9IjExOC4zMzMzMzMzMzMzMzMzMyIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjE0MTMzMzMzMzMzMzMzMzM0Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSI1OS4xNjY2NjY2NjY2NjY2NjQiIGN5PSIxMTguMzMzMzMzMzMzMzMzMzMiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4wMjg2NjY2NjY2NjY2NjY2NjciPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjExOC4zMzMzMzMzMzMzMzMzMyIgY3k9IjExOC4zMzMzMzMzMzMzMzMzMyIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjA4MDY2NjY2NjY2NjY2NjY2Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNzcuNSIgY3k9IjExOC4zMzMzMzMzMzMzMzMzMyIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjA0NiI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMjM2LjY2NjY2NjY2NjY2NjY2IiBjeT0iMTE4LjMzMzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMDg5MzMzMzMzMzMzMzMzMzMiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjI5NS44MzMzMzMzMzMzMzMzIiBjeT0iMTE4LjMzMzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDYzMzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjAiIGN5PSIxNzcuNSIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjA2MzMzMzMzMzMzMzMzMzM0Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIzNTUiIGN5PSIxNzcuNSIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjA2MzMzMzMzMzMzMzMzMzM0Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSI1OS4xNjY2NjY2NjY2NjY2NjQiIGN5PSIxNzcuNSIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjE1Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIxMTguMzMzMzMzMzMzMzMzMzMiIGN5PSIxNzcuNSIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjA4MDY2NjY2NjY2NjY2NjY2Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNzcuNSIgY3k9IjE3Ny41IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMTUiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjIzNi42NjY2NjY2NjY2NjY2NiIgY3k9IjE3Ny41IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDYzMzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjI5NS44MzMzMzMzMzMzMzMzIiBjeT0iMTc3LjUiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4xMDY2NjY2NjY2NjY2NjY2NyI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMCIgY3k9IjIzNi42NjY2NjY2NjY2NjY2NiIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjE0MTMzMzMzMzMzMzMzMzM0Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIzNTUiIGN5PSIyMzYuNjY2NjY2NjY2NjY2NjYiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4xNDEzMzMzMzMzMzMzMzMzNCI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iNTkuMTY2NjY2NjY2NjY2NjY0IiBjeT0iMjM2LjY2NjY2NjY2NjY2NjY2IiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMDU0NjY2NjY2NjY2NjY2NjciPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjExOC4zMzMzMzMzMzMzMzMzMyIgY3k9IjIzNi42NjY2NjY2NjY2NjY2NiIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjEyNDAwMDAwMDAwMDAwMDAxIj48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNzcuNSIgY3k9IjIzNi42NjY2NjY2NjY2NjY2NiIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjA1NDY2NjY2NjY2NjY2NjY3Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIyMzYuNjY2NjY2NjY2NjY2NjYiIGN5PSIyMzYuNjY2NjY2NjY2NjY2NjYiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wMzczMzMzMzMzMzMzMzMzMyI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMjk1LjgzMzMzMzMzMzMzMzMiIGN5PSIyMzYuNjY2NjY2NjY2NjY2NjYiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4xMjQwMDAwMDAwMDAwMDAwMSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMCIgY3k9IjI5NS44MzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjM1NSIgY3k9IjI5NS44MzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjU5LjE2NjY2NjY2NjY2NjY2NCIgY3k9IjI5NS44MzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDk4Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIxMTguMzMzMzMzMzMzMzMzMzMiIGN5PSIyOTUuODMzMzMzMzMzMzMzMyIgcj0iNTkuMTY2NjY2NjY2NjY2NjY0IiBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjA4OTMzMzMzMzMzMzMzMzMzIj48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNzcuNSIgY3k9IjI5NS44MzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMTE1MzMzMzMzMzMzMzMzMzQiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjIzNi42NjY2NjY2NjY2NjY2NiIgY3k9IjI5NS44MzMzMzMzMzMzMzMzIiByPSI1OS4xNjY2NjY2NjY2NjY2NjQiIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMTMyNjY2NjY2NjY2NjY2NjUiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjI5NS44MzMzMzMzMzMzMzMzIiBjeT0iMjk1LjgzMzMzMzMzMzMzMzMiIHI9IjU5LjE2NjY2NjY2NjY2NjY2NCIgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4xNSI+PC9jaXJjbGU+PC9zdmc+',

                // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
                useGeo: true,
            },

            // show title in the header or not
            showTitle: true,
        },

        // Footer Config (Optional)
        footer: {
            // Show 'Powered by VuePress' or not (enable it to support VuePress)
            poweredBy: false,

            // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
            poweredByTheme: false,

            // Add your custom footer (HTML supported)
            custom: 'Copyright 2004-2020 <a href="https://twitter.com/me2resh" target="_blank">Me2resh</a>',
        },

        // Info Card Config (Optional)
        infoCard: {
            // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
            headerBackground: {
                // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
                // url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTIiIGhlaWdodD0iMTUyIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJyZ2IoMjM4LDIzOCwyMzgpIj48L3JlY3Q+PGcgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wODkzMzMzMzMzMzMzMzMzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1LjQ2MSwtMjUuNDYxKSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMDg5MzMzMzMzMzMzMzMzMzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNy4zMDQ5OTk5OTk5OTk5OSwtMjUuNDYxKSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMDg5MzMzMzMzMzMzMzMzMzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNS40NjEsMTI3LjMwNDk5OTk5OTk5OTk4KSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMDg5MzMzMzMzMzMzMzMzMzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNy4zMDQ5OTk5OTk5OTk5OSwxMjcuMzA0OTk5OTk5OTk5OTgpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wNTQ2NjY2NjY2NjY2NjY2NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTIuNzMwNSkgcm90YXRlKDQ1LDI1LjQ2MSwyNS40NjEpIj48cmVjdCB4PSIxOCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjU0Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMTgiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOCI+PC9yZWN0PjwvZz48ZyBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjA1NDY2NjY2NjY2NjY2NjY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDE0MC4wMzU0OTk5OTk5OTk5OCkgcm90YXRlKDQ1LDI1LjQ2MSwyNS40NjEpIj48cmVjdCB4PSIxOCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjU0Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMTgiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOCI+PC9yZWN0PjwvZz48ZyBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjAyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS40NjEsLTI1LjQ2MSkgcm90YXRlKDQ1LDI1LjQ2MSwyNS40NjEpIj48cmVjdCB4PSIxOCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjU0Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMTgiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOCI+PC9yZWN0PjwvZz48ZyBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjAyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS40NjEsMTI3LjMwNDk5OTk5OTk5OTk4KSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDQ2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MC45MjIsLTEyLjczMDUpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4wNDYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjkyMiwxNDAuMDM1NDk5OTk5OTk5OTgpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wMzczMzMzMzMzMzMzMzMzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzYuMzgzLC0yNS40NjEpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wMzczMzMzMzMzMzMzMzMzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzYuMzgzLDEyNy4zMDQ5OTk5OTk5OTk5OCkgcm90YXRlKDQ1LDI1LjQ2MSwyNS40NjEpIj48cmVjdCB4PSIxOCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjU0Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMTgiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOCI+PC9yZWN0PjwvZz48ZyBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjAzNzMzMzMzMzMzMzMzMzMzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDEuODQ0LC0xMi43MzA1KSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMDM3MzMzMzMzMzMzMzMzMzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMS44NDQsMTQwLjAzNTQ5OTk5OTk5OTk4KSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNS40NjEsMCkgcm90YXRlKDQ1LDI1LjQ2MSwyNS40NjEpIj48cmVjdCB4PSIxOCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjU0Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMTgiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOCI+PC9yZWN0PjwvZz48ZyBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjE0MTMzMzMzMzMzMzMzMzM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjcuMzA0OTk5OTk5OTk5OTksMCkgcm90YXRlKDQ1LDI1LjQ2MSwyNS40NjEpIj48cmVjdCB4PSIxOCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjU0Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMTgiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOCI+PC9yZWN0PjwvZz48ZyBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjA4OTMzMzMzMzMzMzMzMzMzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDEyLjczMDUpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4xMjQwMDAwMDAwMDAwMDAwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuNDYxLDApIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wNzIwMDAwMDAwMDAwMDAwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAuOTIyLDEyLjczMDUpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4wOTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc2LjM4MywwKSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMDU0NjY2NjY2NjY2NjY2NjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMS44NDQsMTIuNzMwNSkgcm90YXRlKDQ1LDI1LjQ2MSwyNS40NjEpIj48cmVjdCB4PSIxOCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjU0Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMTgiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOCI+PC9yZWN0PjwvZz48ZyBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjAyODY2NjY2NjY2NjY2NjY2NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1LjQ2MSwyNS40NjEpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4wMjg2NjY2NjY2NjY2NjY2NjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNy4zMDQ5OTk5OTk5OTk5OSwyNS40NjEpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwzOC4xOTE0OTk5OTk5OTk5OSkgcm90YXRlKDQ1LDI1LjQ2MSwyNS40NjEpIj48cmVjdCB4PSIxOCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjU0Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMTgiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOCI+PC9yZWN0PjwvZz48ZyBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjA3MjAwMDAwMDAwMDAwMDAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS40NjEsMjUuNDYxKSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjkyMiwzOC4xOTE0OTk5OTk5OTk5OSkgcm90YXRlKDQ1LDI1LjQ2MSwyNS40NjEpIj48cmVjdCB4PSIxOCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjU0Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMTgiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOCI+PC9yZWN0PjwvZz48ZyBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjAyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3Ni4zODMsMjUuNDYxKSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMS44NDQsMzguMTkxNDk5OTk5OTk5OTkpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4xMDY2NjY2NjY2NjY2NjY2NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1LjQ2MSw1MC45MjIpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4xMDY2NjY2NjY2NjY2NjY2NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3LjMwNDk5OTk5OTk5OTk5LDUwLjkyMikgcm90YXRlKDQ1LDI1LjQ2MSwyNS40NjEpIj48cmVjdCB4PSIxOCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjU0Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMTgiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOCI+PC9yZWN0PjwvZz48ZyBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjExNTMzMzMzMzMzMzMzMzM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDYzLjY1MjQ5OTk5OTk5OTk5KSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDQ2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS40NjEsNTAuOTIyKSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMDcyMDAwMDAwMDAwMDAwMDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjkyMiw2My42NTI0OTk5OTk5OTk5OSkgcm90YXRlKDQ1LDI1LjQ2MSwyNS40NjEpIj48cmVjdCB4PSIxOCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjU0Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMTgiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOCI+PC9yZWN0PjwvZz48ZyBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjA1NDY2NjY2NjY2NjY2NjY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3Ni4zODMsNTAuOTIyKSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDk4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDEuODQ0LDYzLjY1MjQ5OTk5OTk5OTk5KSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDYzMzMzMzMzMzMzMzMzMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNS40NjEsNzYuMzgyOTk5OTk5OTk5OTgpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4wNjMzMzMzMzMzMzMzMzMzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3LjMwNDk5OTk5OTk5OTk5LDc2LjM4Mjk5OTk5OTk5OTk4KSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTA2NjY2NjY2NjY2NjY2NjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsODkuMTEzNDk5OTk5OTk5OTkpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4wMjg2NjY2NjY2NjY2NjY2NjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjQ2MSw3Ni4zODI5OTk5OTk5OTk5OCkgcm90YXRlKDQ1LDI1LjQ2MSwyNS40NjEpIj48cmVjdCB4PSIxOCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjU0Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMTgiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOCI+PC9yZWN0PjwvZz48ZyBmaWxsPSIjMjIyIiBvcGFjaXR5PSIwLjA4MDY2NjY2NjY2NjY2NjY2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MC45MjIsODkuMTEzNDk5OTk5OTk5OTkpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4wNjMzMzMzMzMzMzMzMzMzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzYuMzgzLDc2LjM4Mjk5OTk5OTk5OTk4KSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDI4NjY2NjY2NjY2NjY2NjY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDEuODQ0LDg5LjExMzQ5OTk5OTk5OTk5KSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMTE1MzMzMzMzMzMzMzMzMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNS40NjEsMTAxLjg0NDAwMDAwMDAwMDAxKSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMTE1MzMzMzMzMzMzMzMzMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNy4zMDQ5OTk5OTk5OTk5OSwxMDEuODQ0MDAwMDAwMDAwMDEpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iIzIyMiIgb3BhY2l0eT0iMC4xMTUzMzMzMzMzMzMzMzMzNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1LjQ2MSwtNTAuOTIxOTk5OTk5OTk5OTcpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwxMTQuNTc0NTAwMDAwMDAwMDEpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMzguMTkxNDk5OTk5OTk5OTYpIHJvdGF0ZSg0NSwyNS40NjEsMjUuNDYxKSI+PHJlY3QgeD0iMTgiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI1NCI+PC9yZWN0PjxyZWN0IHg9IjAiIHk9IjE4IiB3aWR0aD0iNTQiIGhlaWdodD0iMTgiPjwvcmVjdD48L2c+PGcgZmlsbD0iI2RkZCIgb3BhY2l0eT0iMC4wODkzMzMzMzMzMzMzMzMzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuNDYxLDEwMS44NDQwMDAwMDAwMDAwMSkgcm90YXRlKDQ1LDI1LjQ2MSwyNS40NjEpIj48cmVjdCB4PSIxOCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjU0Ij48L3JlY3Q+PHJlY3QgeD0iMCIgeT0iMTgiIHdpZHRoPSI1NCIgaGVpZ2h0PSIxOCI+PC9yZWN0PjwvZz48ZyBmaWxsPSIjZGRkIiBvcGFjaXR5PSIwLjA4OTMzMzMzMzMzMzMzMzMzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS40NjEsLTUwLjkyMTk5OTk5OTk5OTk3KSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDQ2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MC45MjIsMTE0LjU3NDUwMDAwMDAwMDAxKSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDQ2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MC45MjIsLTM4LjE5MTQ5OTk5OTk5OTk2KSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDQ2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3Ni4zODMsMTAxLjg0NDAwMDAwMDAwMDAxKSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiMyMjIiIG9wYWNpdHk9IjAuMDQ2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3Ni4zODMsLTUwLjkyMTk5OTk5OTk5OTk3KSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTA2NjY2NjY2NjY2NjY2NjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMS44NDQsMTE0LjU3NDUwMDAwMDAwMDAxKSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjxnIGZpbGw9IiNkZGQiIG9wYWNpdHk9IjAuMTA2NjY2NjY2NjY2NjY2NjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMS44NDQsLTM4LjE5MTQ5OTk5OTk5OTk2KSByb3RhdGUoNDUsMjUuNDYxLDI1LjQ2MSkiPjxyZWN0IHg9IjE4IiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTQiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIxOCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+PC9nPjwvc3ZnPg==',

                // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
                useGeo: true,
            },
        },

        // Show the last updated time of your posts
        lastUpdated: true,

        // The content of your navbar links
        nav: [
            {text: 'Home', link: '/', exact: true},
            {text: 'Posts', link: '/posts/', exact: false},
            {text: 'About', link: '/about/', exact: false},
        ],

        // Comments config. See the [Posts Comments] section below.
        // comments: {
        //     owner: 'meteorlxy',
        //     repo: 'vuepress-theme-meteorlxy',
        //     clientId: 'MY_CLIENT_ID',
        //     clientSecret: 'MY_CLIENT_SECRET',
        // },

        comments: false,
        // Pagination config (Optional)
        pagination: {
            perPage: 5,
        },

        // Default Pages (Optional, the default value of all pages is `true`)
        defaultPages: {
            // Allow theme to add Home page (url: /)
            home: true,
            // Allow theme to add Posts page (url: /posts/)
            posts: true,
        },
    },
}