export default {
  widgets: [
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
                  buildHookId: '5ecf76ac3dbc2971f3b43fd8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vc92st82',
                  apiId: '70d8ddae-c8f7-4163-b107-38078ae82854'
                },
                {
                  buildHookId: '5ecf76acfb9691595575ee0f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-iyynepz4',
                  apiId: '55ddc0a4-716f-41b5-a782-d1cb66e7fd13'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-iyynepz4.netlify.app', category: 'apps'}
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
