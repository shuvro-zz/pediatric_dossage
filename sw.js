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
    "revision": "c0098949712d0f9f8f73692d5b9b4d72"
  },
  {
    "url": "index.html",
    "revision": "a44836ceb2b30e5deda4f4716531a087"
  },
  {
    "url": "js/index.js",
    "revision": "2fdf177169b6a847c0dbc8bb7a9ebe15"
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
    "revision": "eff7327e4c3898ef076cddb5be8a3888"
  },
  {
    "url": "workbox-config.js",
    "revision": "dd8d8ae10243d1dcf5760c74ce3fd6d0"
  }
]);