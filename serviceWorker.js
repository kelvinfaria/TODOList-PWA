importScripts('./cache-polyfill.js');

var cacheName = 'cache-v4';

var files = [
  './',
  './index.html?utm=homescreen', 
  'https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700', 
  './css/styles.css',
  './images/icons/android-chrome-192x192.png',
  './images/icons/favicon-16x16.png',
  './images/icons/favicon-32x32.png',
  './js/main.js',
  './js/app.js',
  './js/offline.js',
  './js/menu.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  console.info('Event: Install');

  event.waitUntil(
    caches.open(cacheName)
    .then((cache) => {
      return cache.addAll(files)
      .then(() => {
        console.info('All files are cached');
        return self.skipWaiting(); 
      })
      .catch((error) =>  {
        console.error('Failed to cache', error);
      })
    })
  );
});

 self.addEventListener('activate', (event) => {
  console.info('Event: Activate');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache); 
          }
        })
      );
    })
    .then(function () {
      console.info("Old caches are cleared!");
      return self.clients.claim(); 
    }) 
  );
});


