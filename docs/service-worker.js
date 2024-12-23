const CACHE_NAME = "andar-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
    })
  );
});

self.addEventListener("message", (event) => {
  if (event.data.type === "CACHE_IMAGES") {
    const imageUrls = event.data.images;
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(imageUrls).catch((error) => {
        console.error("Failed to cache images:", error);
      });
    });
  }
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
