export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '601eb33e5f91d41cc87bca76',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-u3d63b89',
                  apiId: '57dd18d8-6b3e-4f8e-b98a-84e16c08d57b'
                },
                {
                  buildHookId: '601eb33f3966b2bdd606b97a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-h6iyk9db',
                  apiId: '8f96a50f-fba4-4861-a6cc-9aea2cadd9c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aemilc/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-h6iyk9db.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
