module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/javascripts/**/*.js',
    './app/assets/stylesheets/**/*.css'
  ],
  theme: {
    screens: {
      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
      'top-bg': "url('/assets/top.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    }},
  },
  plugins: [],
}