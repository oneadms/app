module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ],
  plugins: [
    [
      'import',
      {
        libraryName: '@dcloudio/uni-ui',
        customName: (name) => {
          return `@dcloudio/uni-ui/lib/${name}/${name}.vue`
        }
      }
    ]
  ]
}
