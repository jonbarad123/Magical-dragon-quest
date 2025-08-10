
const CACHE='dragon-quest-v1.1-webp';
const FILES=[
  './index.html','./manifest.webmanifest','./favicon.ico','./sw-register.js','./service-worker.js',
  'images/cover.webp','images/forest_meet.webp','images/follow_dragon.webp','images/check_book.webp',
  'images/patatan_dance.webp','images/meadow.webp','images/river_bridge.webp','images/clouds_ride.webp',
  'images/island.webp','images/cave_mouth.webp','images/crystal_puzzle.webp','images/crystal_dome.webp',
  'images/rescue.webp','images/lair_tea.webp','images/party_gifts.webp','images/loading.webp'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp;}).catch(()=>caches.match('./index.html'))))});
