// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },
  plugins: [
    new PrerenderSpaPlugin(
      // (REQUIRED) Absolute path to static root
      path.join(__dirname, '../dist'),
      // (REQUIRED) List of routes to prerender
      [ '/', '/list', '/ebook', '/about', '/contact' ],
      // (OPTIONAL) Options
      {
        // NOTE: Unless you are relying on asynchronously rendered content,
        // such as after an Ajax request, none of these options should be
        // necessary. All synchronous scripts are already executed before
        // capturing the page content.

        // Wait until a specific event is fired on the document.
        captureAfterDocumentEvent: 'custom-post-render-event',
        // This is how you would trigger this example event:
        // document.dispatchEvent(new Event('custom-post-render-event'))

        // Wait until a specific element is detected with
        // document.querySelector.
        captureAfterElementExists: '#content',

        // Wait until a number of milliseconds has passed after scripts
        // have been executed. It's important to note that this may
        // produce unreliable results when relying on network
        // communication or other operations with highly variable timing.
        captureAfterTime: 5000,

        // NOTE: You can even combine strategies if you like. For example,
        // if you only _sometimes_ want to wait for an event to fire, you
        // can create a timeout by combining captureAfterTime with
        // captureAfterDocumentEvent. When combining strategies, page
        // content will be captured after the first triggered strategy.

        // Instead of loudly failing on JS errors (the default), ignore them.
        ignoreJSErrors: true,

        // Because PhantomJS occasionally runs into an intermittent issue,
        // we will retry a page capture up to 10 times by default. You may
        // raise or lower this limit if you wish.
        maxAttempts: 10,

        // Prevent PhantomJS from navigating away from the URL passed to it
        // and prevent loading embedded iframes (e.g. Disqus and Soundcloud
        // embeds), which are not ideal for SEO and may introduce JS errors.
        navigationLocked: true,

        // The options below expose configuration options for PhantomJS,
        // for the rare case that you need special settings for specific
        // systems or applications.

        // http://phantomjs.org/api/command-line.html#command-line-options
        phantomOptions: '--disk-cache=true',

        // http://phantomjs.org/api/webpage/property/settings.html
        phantomPageSettings: {
          loadImages: true
        },

        // Manually transform the HTML for each page after prerendering,
        // for example to set the page title and metadata in edge cases
        // where you cannot handle this via your routing solution.
        //
        // The function's context argument contains two properties:
        //
        // - html :: the resulting HTML after prerendering)
        // - route :: the route currently being processed
        //            e.g. "/", "/about", or "/contact")
        //
        // Whatever is returned will be printed to the prerendered file.
        postProcessHtml: function (context) {
          var titles = {
            '/': 'Creative Lang | Be a Creative Front End Developer',
            '/list': 'Awesome websites about Creative Front End Development',
            '/ebook': 'Free Front End E-book',
            '/about': 'My target',
            '/contact': 'Contact Me'
          }
          return context.html.replace(
            /<title>[^<]*<\/title>/i,
            '<title>' + titles[context.route] + '</title>'
          )
        }
      }
    )
  ]
}
