'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "38100ca7b2c7f3b453c0c1ccd41d6601",
"favicon.ico": "b2ff2150b14ff6a6ce36e0bb9650380c",
"index.html": "c34b12f94e882b6c2ac16bbab52fd61b",
"/": "c34b12f94e882b6c2ac16bbab52fd61b",
"main.dart.js": "c093c3a80e50a2acd8e0ed03b51cae4b",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "a7a5eed178578f40730816ea7877d5a0",
"icons/Icon-192.png": "eebed303c1a6b70a0cf8c784eaf3dd4e",
"icons/icon-maskable-192.png": "eebed303c1a6b70a0cf8c784eaf3dd4e",
"icons/Icon-maskable-512.png": "74378625ab37324cc7bbfe66a53e6a90",
"icons/Icon-512.png": "74378625ab37324cc7bbfe66a53e6a90",
"manifest.json": "373a4cf808410fbcfa0d8dafb4bbc545",
"assets/images/walter_image.png": "191da535d73d37fb95db18c845d2b7cf",
"assets/images/onchwest.png": "4694699144ae26bae9984d97e977cade",
"assets/images/logo_terratrace.png": "89661c0b6b5cb4d53b799c86f4ee7eef",
"assets/images/robert.png": "b6297473db5920b3d0b6af7dd1532bd5",
"assets/images/giorgio.png": "79f2f60ba71c71e9743499d113a05517",
"assets/images/background_mobile.png": "c6bcc90507d2df3fb4cd70253e0e8a98",
"assets/images/terratrace_logo.svg": "e0227a7d070891b4d59783bf57d3cc0c",
"assets/images/satelite_backside.png": "6c679f25ad4013cdcc68823aac432323",
"assets/images/markus.png": "b0c799728e4b862a5cd21b9c92b5aae6",
"assets/images/francy.png": "64c59fcf5b79fddf0b47b9f09baaa557",
"assets/images/satelite_01.png": "3b0a00662e3038d99a50a25aea5a6bef",
"assets/images/moritz_rounded.png": "9f04d5f7d4063e1bb3e111f164b73396",
"assets/images/hand2.png": "d518d64112bf4be73b0c5056c1736d1a",
"assets/images/icon_04.png": "929ca0e7972c77c9c33c5b63c69bcb25",
"assets/images/kristy.png": "be5865c004ff12a33a4192e9b505fb10",
"assets/images/icon_03.png": "cf1498d20c523ef66976997b8219cd67",
"assets/images/icon_02.png": "2d7a348fbb60c895ad465dc2933f5a8a",
"assets/images/aya.png": "97d17ad6bf4d0db17fa7d2a33501693f",
"assets/images/share.png": "ddee6226e2c7bf5ecfe3d6ca65bc4b45",
"assets/images/histo.png": "c46e5d72b42d82e770ab80b83e89232f",
"assets/images/mana.png": "cbb6285f2c85b7190206c08606b5246b",
"assets/images/icon_01.png": "ab2a87e022af005211c5ebe130667f5a",
"assets/images/background_01.png": "6a231084d141b895b58663408735127b",
"assets/images/hand2_small.png": "6ff75df0019b1f4348db554b1e670900",
"assets/images/anna_rounded.png": "b991084397e0c9b525307f411d8dc3f1",
"assets/images/ai_network.png": "f939f2abf669cd4578fd18e6a610f053",
"assets/AssetManifest.json": "4db3e7b0a730feda2216bcd900be7f97",
"assets/NOTICES": "f2c6b720c9b278e0ad779069e198f39a",
"assets/FontManifest.json": "350e59e2b29f3a8d93bbddfae51a18f4",
"assets/AssetManifest.bin.json": "b4d39cfbd56f6b00968d66d2ba125edc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "aab45b1f6a49042b2533e39ae0f8c0ef",
"assets/fonts/InputMono-Regular.ttf": "572557466f323a62c19e05bc145813bf",
"assets/fonts/FabricSansWeb-Bold.woff": "adba94ce50afbd3aef47e803e18075f8",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/FabricSansWeb-Regular.woff": "80c813c6db2b7d136b38c1e6cc81c0d9",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
