const cacheStorageName = 'cacheStorageAsset1.1';

self.addEventListener('install',  (event) => {
  
    self.skipWaiting()

    event.waitUntil(
        caches.open(cacheStorageName)
        .then(cache => {
            cache.addAll([  
                '/',
                '/index.html',
                '/style.css',
                '/images/icon.png',
                '/manifest.json',
                '/js/info.js',
                'icons/favicon-16x16.png',
                'icons/favicon-32x32.png',
                '/offline.html',
                '/js/script.js'
            ]);
        })
        .catch((error) => {
            console.log('Error:', error);
        })
    );
  
});

self.addEventListener('activate', function (event) {
    console.log('Activated', event);
    event.waitUntil(clients.claim());

    event.waitUntil
    (caches.keys()
    .then(function (cacheStorageNames) {
        return Promise.all(cacheStorageNames
            .filter(item => item !== cacheStorageName)
            .map(item => caches.delete(item))
        );
    })
    );

});

    
    


self.addEventListener('fetch', (event)=> {

    // event.respondWith(
    //     caches.match(event.request)
    //     .then(function (response) {
    //         return response;
    //     })
    //     .catch(function (error) {
    //         console.log('Error:', error);
    //     })
    // );

    // event.respondWith(
        // caches.open(cacheStorageName)
        // .then((cache) => {
        //     return cache.match(event.request)
        //     .then((cashedResponse) => {
        //         const fetchResponse = fetch(event.request)
        //         .then((networkResponse)=>{
        //             cache.put(event.request, networkResponse.clone());
        //             return networkResponse;
        //         })
        //         // .catch((error) => {
                  
        //         //     return caches.match('/offline.html');
        //         // });
        //         return cashedResponse || fetchResponse
               
        //     });
        // }));

    event.respondWith(caches.open(cacheStorageName)
        .then(function (cache) {
            return cache.match(event.request)

            .then(function (cachedResponse) {

                const fetchedResponse = fetch(event.request)
                .then(function (networkResponse) {
                 cache.put(event.request, networkResponse.clone());
                return networkResponse;
            })
            .catch(function (error) {
                return caches.match('/offline.html');
            });
        return cachedResponse || fetchedResponse;
        });
    }));

    
});
