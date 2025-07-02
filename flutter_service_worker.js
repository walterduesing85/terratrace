'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "38100ca7b2c7f3b453c0c1ccd41d6601",
"favicon.ico": "b2ff2150b14ff6a6ce36e0bb9650380c",
"index.html": "3d96fff2ea192277cbb211c1b4923a8d",
"/": "3d96fff2ea192277cbb211c1b4923a8d",
"main.dart.js": "3e0ba43187aa8b25246233402be30f7e",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "a7a5eed178578f40730816ea7877d5a0",
"icons/Icon-192.png": "eebed303c1a6b70a0cf8c784eaf3dd4e",
"icons/icon-maskable-192.png": "eebed303c1a6b70a0cf8c784eaf3dd4e",
"icons/Icon-maskable-512.png": "74378625ab37324cc7bbfe66a53e6a90",
"icons/Icon-512.png": "74378625ab37324cc7bbfe66a53e6a90",
"manifest.json": "373a4cf808410fbcfa0d8dafb4bbc545",
"assets/images/gallery_aya_walt.jpeg": "c7edadc683f13a6953bd65bc27638e56",
"assets/images/walter_image.png": "191da535d73d37fb95db18c845d2b7cf",
"assets/images/gallery_measure_video.mp4": "0606274140f387e6a017f347f08468aa",
"assets/images/partners_gfz.png": "699b7bf80a7df6fd69abae91e6c3e2fc",
"assets/images/gallery_wd_sticker.jpeg": "eb937227737afefb616a8d826b4834af",
"assets/images/logo_terratrace.png": "89661c0b6b5cb4d53b799c86f4ee7eef",
"assets/images/giorgio.png": "79f2f60ba71c71e9743499d113a05517",
"assets/images/background_mobile.png": "c6bcc90507d2df3fb4cd70253e0e8a98",
"assets/images/partners_florenz.png": "b2bb423737b4c39265d8ca6aa5a1686c",
"assets/images/terratrace_logo.svg": "17d470fc555ac45e015cc6549cb33d7c",
"assets/images/satelite_backside.png": "6c679f25ad4013cdcc68823aac432323",
"assets/images/gallery_workshop_1.jpg": "ed282dc812bf2b60e7726f4a05032402",
"assets/images/vulcano_chamber.jpeg": "4b71886e27f5cecf8b1983a311bf33bf",
"assets/images/francy.png": "64c59fcf5b79fddf0b47b9f09baaa557",
"assets/images/satelite_01.png": "3b0a00662e3038d99a50a25aea5a6bef",
"assets/images/hand2.png": "d518d64112bf4be73b0c5056c1736d1a",
"assets/images/icon_04.png": "929ca0e7972c77c9c33c5b63c69bcb25",
"assets/images/gallery_team_vulcano.jpeg": "43f348b709406cecf6058f174164ecab",
"assets/images/icon_03.png": "cf1498d20c523ef66976997b8219cd67",
"assets/images/icon_02.png": "2d7a348fbb60c895ad465dc2933f5a8a",
"assets/images/aya.png": "97d17ad6bf4d0db17fa7d2a33501693f",
"assets/images/share.png": "ddee6226e2c7bf5ecfe3d6ca65bc4b45",
"assets/images/histo.png": "c46e5d72b42d82e770ab80b83e89232f",
"assets/images/icon_01.png": "ab2a87e022af005211c5ebe130667f5a",
"assets/images/background_01.png": "6a231084d141b895b58663408735127b",
"assets/images/hand2_small.png": "6ff75df0019b1f4348db554b1e670900",
"assets/images/partners_c13.png": "e760dad8eca4171fa25d04ac287bb968",
"assets/images/ai_network.png": "f939f2abf669cd4578fd18e6a610f053",
"assets/AssetManifest.json": "d57f73b4445c9f268f6a815871ac1e7a",
"assets/NOTICES": "8d0c6a6e717d9b53c20cea58908ea548",
"assets/FontManifest.json": "350e59e2b29f3a8d93bbddfae51a18f4",
"assets/AssetManifest.bin.json": "a9f0804472f1b74940e38ea402063da2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5d712985e67b09d4ba6ebcf8e6b12b6a",
"assets/fonts/InputMono-Regular.ttf": "572557466f323a62c19e05bc145813bf",
"assets/fonts/FabricSansWeb-Bold.woff": "adba94ce50afbd3aef47e803e18075f8",
"assets/fonts/MaterialIcons-Regular.otf": "8d1f1f0d26a0ac9eb3a8de5d35b32e82",
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
