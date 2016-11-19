// Inspired by https://github.com/MatteoGabriele/vue-analytics

/**
 * Configuration
 * @type {Object}
 */
let config = {
  debug: false,
  excludes: []
}

// Private functions

const _fbqEnabled = () => {
  if (typeof window.fbq === 'undefined') {
    if (config.debug) {
      console.log(
        '[Vue Facebook Pixel]: `window.fbq` is not defined, skipping'
      )
    }

    return false
  }

  return true
}

// Public functions

/**
 * Init facebook tracking pixel
 * @param  {String} appId
 * @param  {object} [data={}]
 */
const init = (appId, data = {}) => {
  if (!_fbqEnabled()) return

  if (config.debug) {
    console.log(
      `[Vue Facebook Pixel] Initializing app ${appId}`
    )
  }

  window.fbq('init', appId, data)
}

/**
 * Event tracking
 * @param  {String} name
 * @param  {object} [data={}]
 */
const event = (name, data = {}) => {
  if (!_fbqEnabled()) return

  if (config.debug) {
    console.groupCollapsed(
      `[Vue Facebook Pixel] Track event "${name}"`)
    console.log(`With data: ${data}`)
    console.groupEnd()
  }

  window.fbq('track', name, data)
}

/**
 * Vue installer
 * @param  {Vue instance} Vue
 * @param  {Object} [options={}]
 */
const install = (Vue, options = {}) => {
  //
  const { router, debug, excludeRoutes } = options

  config.excludes = excludeRoutes || config.excludes
  config.debug = !!debug

  // These objects may contain different providers as well,
  // or might be empty:
  if (!Vue.analytics) {
    Vue.analytics = {}
  }

  if (!Vue.prototype.$analytics) {
    Vue.prototype.$analytics = {}
  }

  // Setting values for both Vue and component instances
  // Usage:
  // 1. `Vue.analytics.fbq.init()`
  // 2. `this.$analytics.fbq.init()`

  Vue.analytics.fbq = { init, event }
  Vue.prototype.$analytics.fbq = { init, event }

  // Support for Vue-Router:
  if (router) {
    const { excludes } = config

    router.afterEach(({ path, name }) => {
      if (excludes.length && excludes.indexOf(name) !== -1) {
        return
      }

      Vue.analytics.fbq.event('PageView')
    })
  }
}

export default { install }
