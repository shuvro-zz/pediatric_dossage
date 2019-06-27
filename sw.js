importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);


workbox.precaching.precacheAndRoute([
  {
    "url": "css/style.css",
    "revision": "8b104e76dc666a154dac2d46e4a2ce87"
  },
  {
    "url": "index.html",
    "revision": "2e9b849ead29e7c8f61551890b136f96"
  },
  {
    "url": "js/index.js",
    "revision": "d3ce87f7c7f306b80b4c8ae58da27889"
  },
  {
    "url": "src-sw.js",
    "revision": "8c105c33348448389064a6a05f4a13fe"
  },
  {
    "url": "workbox-config.js",
    "revision": "dd8d8ae10243d1dcf5760c74ce3fd6d0"
  }
]);