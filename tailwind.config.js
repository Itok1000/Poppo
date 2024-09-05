module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ]

  corePlugins: {
    preflight: false, // もしプリフライトを使っていない場合
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // ソースマップ無効化
  important: true, // 既に指定されている場合、他のルールを上書きするため
}
