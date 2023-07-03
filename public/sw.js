let cacheData = "pwBigDeal";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/index.html",
        "/",
        "/users",
      ]);
    })
  );
});

// this.addEventListener("fetch", (event) => {
//   event.respondwith(
//     caches.match(event.request).then((result) => {
//       if (result) {
//         return result;
//       }
//     })
//   );
// });

addEventListener("fetch", (event) => {
  // Prevent the default, and handle the request ourselves.
  if(!navigator.onLine){
  event.respondWith(
    (async () => {
      // Try to get the response from a cache.
      const cachedResponse = await caches.match(event.request);
      // Return it if we found one.
      if (cachedResponse) return cachedResponse;
      // If we didn't find a match in the cache, use the network.
      return fetch(event.request);
    })()
  );
  }
});
