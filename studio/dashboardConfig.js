export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d97587bcc77204d53c1b05e',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-j4xbn1qf',
                  apiId: '505119bf-8397-4a71-95cd-fe69d620110e'
                },
                {
                  buildHookId: '5d97587b07fdeefa3b2f0a9f',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-t5grbvhs',
                  apiId: 'fc6e431f-fdc4-42dd-a495-05ca33ff8588'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/patrikbreitenmoser/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-t5grbvhs.netlify.com', category: 'apps'}
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
