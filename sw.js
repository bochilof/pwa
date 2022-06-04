const cacheName = 'cacheV1';

const resourcesToPrecache = [
     '/',
     '/index.html',
     '/default.css',
     '/logo192.png',
     '/logo512.png',
     '/sw-install.js',
];

self.addEventListener('install', (evento) => {
     evento.waitUntil(
          caches.open(cacheName)
          .then(cache => (cache.addAll(resourcesToPrecache))),
     );
});

self.addEventListener('fetch', (evento) => {
     evento.respondWith(
          caches.match(evento.request)
          .then(cacheResponse => (cacheResponse || fetch(evento.request))),
     );
});
