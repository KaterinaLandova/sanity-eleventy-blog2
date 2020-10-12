export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f844f6650faf0929fa5f6af',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-2-studio-y7g552hn',
                  apiId: '6de543ea-c0f9-4036-8236-09b34ecd5e5c'
                },
                {
                  buildHookId: '5f844f6661a5d0af47315fc8',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-2-web-793mdx5s',
                  apiId: '529a51f5-2486-46b3-b318-f22890bb6433'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KaterinaLandova/sanity-eleventy-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-2-web-793mdx5s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
