// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    use: '@gridsome/source-strapi',
    options: {
      apiURL: process.env.GRIDSOME_API_URL,
      queryLimit: 1000, // Defaults to 100
      contentTypes: ['post', 'tag'],
      // typeName: 'StrapiPost'
      singleTypes: ['general'],
      // Possibility to login with a Strapi user,
      // when content types are not publicly available (optional).
      // loginData: {
      //   identifier: '',
      //   password: ''
      // }
    }
  }],
  templates: {
    // StrapiPost为上面Plugin中配置的typeName和contentTypes的组合
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ]
  }
}