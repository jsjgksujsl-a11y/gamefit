const CACHE_NAME = 'gamefit-v15-network-first';
const APP_FILES = ['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./about.html','./privacy.html','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./supabase-config.js','./styles.css','./app.js','./index.html'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_FILES)));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))));self.clients.claim();});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  event.respondWith((async()=>{
    const cached=await caches.match(event.request);
    try{
      const response=await fetch(event.request,{cache:'no-store'});
      if(response&&response.ok&&new URL(event.request.url).origin===self.location.origin){
        const copy=response.clone();
        caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy)).catch(()=>{});
      }
      return response;
    }catch(error){
      return cached||caches.match('./index.html');
    }
  })());
});
