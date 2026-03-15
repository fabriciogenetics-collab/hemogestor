const CACHE_NAME = "hemogestor-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/dashboard.html",
  "/transfusoes.html",
  "/reacoes.html",
  "/indicadores.html",
  "/estoque.html",
  "/relatorios.html",
  "/acompanhamento.html",
  "/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
