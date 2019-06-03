module.exports = {
  title: 'Cambodia Engineer',
  description: 'Hi, welcome to my personal blog. This is the site using vuepress.',
  themeConfig: {
    nav: [
      {text: 'Home',link:'/'},
      {text:'Explore',link:'/guide/'},
      {text:'About me', link:'/about/'}
    ],
    sidebar: {
      '/guide/':['','frontend','backend','container']
    },
    markdown: {
      lineNumbers: true
    }
  }
}