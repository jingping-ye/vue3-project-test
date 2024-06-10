const config = {
  base: '/',
  lang: 'zh-CN',
  // title: 'Web Title',
  description: 'Just Playing around',
  themeConfig: {

  },
  // srcDir: '../external',
  rewrites: {
    // 'a/a1/aa.md': 'a1/aa.md',
    'a/a1/:pkg.md': 'a1/:pkg.md',
    'b/b1/ba.md': 'b1/ba.md'
  }
}

module.exports = config;