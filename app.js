const countEl=document.querySelector('#count');
const statusEl=document.querySelector('#status');
const storageEl=document.querySelector('#storage');
const offlineEl=document.querySelector('#offline');
let count=Number(localStorage.getItem('demo-count')||0);
function render(){countEl.textContent=count;localStorage.setItem('demo-count',String(count));}
render();
document.querySelector('#add').addEventListener('click',()=>{count++;render();});
document.querySelector('#reset').addEventListener('click',()=>{count=0;render();});
function connection(){const online=navigator.onLine;offlineEl.textContent=online?'Con conexión a Internet':'Sin conexión: modo offline';statusEl.textContent=online?'EN LÍNEA':'SIN CONEXIÓN';}
window.addEventListener('online',connection);window.addEventListener('offline',connection);connection();
storageEl.textContent='Almacenamiento local activo (localStorage)';
if('serviceWorker' in navigator){
  window.addEventListener('load',async()=>{
    try{await navigator.serviceWorker.register('./service-worker.js');}
    catch(e){statusEl.textContent='ERROR OFFLINE';console.error('No se pudo registrar el service worker',e);}
  });
}else{storageEl.textContent+=' · Service Worker no compatible';}
