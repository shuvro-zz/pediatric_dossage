importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);


//Google analytics work offline
workbox.googleAnalytics.initialize();

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

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/kit\.fontawesome\.com\/90985602b7\.js/,
  new workbox.strategies.CacheFirst({
    cacheName: 'fontawesome-fonts',
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


if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');

  // Add an event listener to detect when the registered
  // service worker has installed but is waiting to activate.
  wb.addEventListener('waiting', (event) => {
    // `event.wasWaitingBeforeRegister` will be false if this is
    // the first time the updated service worker is waiting.
    // When `event.wasWaitingBeforeRegister` is true, a previously
    // updated same service worker is still waiting.
    // You may want to customize the UI prompt accordingly.

    // Assumes your app has some sort of prompt UI element
    // that a user can either accept or reject.
    const prompt = createUIPrompt({
      onAccept: async () => {
        // Assuming the user accepted the update, set up a listener
        // that will reload the page as soon as the previously waiting
        // service worker has taken control.
        wb.addEventListener('controlling', (event) => {
          window.location.reload();
        });

        // Send a message telling the service worker to skip waiting.
        // This will trigger the `controlling` event handler above.
        // Note: for this to work, you have to add a message
        // listener in your service worker. See below.
        wb.messageSW({type: 'SKIP_WAITING'});
      },

      onReject: () => {
        prompt.dismiss();
      }
    })
  });

  wb.register();
}


workbox.precaching.precacheAndRoute([
  {
    "url": "anestesia.html",
    "revision": "c7facac7e052d586119997d7355c7bfc"
  },
  {
    "url": "antibioticos.html",
    "revision": "3839adad906d518a6203bbb20132c8a1"
  },
  {
    "url": "css/style.css",
    "revision": "87166c884f56e0fed9c43d233e394d5e"
  },
  {
    "url": "index.html",
    "revision": "8489e3805fb7b8392d1fe7b366c26f43"
  },
  {
    "url": "js/index.js",
    "revision": "af7c0c95ab00443bdd7fcbe87604d81b"
  },
  {
    "url": "notas.html",
    "revision": "39ec0738ae75cb4a7252a388f7dcff80"
  },
  {
    "url": "preventiva.html",
    "revision": "b7f4c0989667617c28d9f71f5aafa495"
  },
  {
    "url": "src-sw.js",
    "revision": "0c8fc20285737b5e9aada36c4ea3f842"
  },
  {
    "url": "workbox-config.js",
    "revision": "dd8d8ae10243d1dcf5760c74ce3fd6d0"
  }
]);