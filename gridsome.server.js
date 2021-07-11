// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // const posts = addCollection('Post')

    // posts.addReference('path', 'Post')
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allStrapiPost {
        edges {
          node {
            id
            path
          }
        }
      }
    }`)

    data.allStrapiPost.edges.forEach(({ node }) => {
      createPage({
        path: `${node.path}`,
        component: './src/templates/Project.vue',
        context: {
          path: node.path
        }
      })
    })
    
    const { data: journalData } = await graphql(`{
      allStrapiJournal {
        edges {
          node {
            id
            path
          }
        }
      }
    }`)

    journalData.allStrapiJournal.edges.forEach(({ node }) => {
      createPage({
        path: `${node.path}`,
        component: './src/templates/Journal.vue',
        context: {
          path: node.path
        }
      })
    })
  })

}
