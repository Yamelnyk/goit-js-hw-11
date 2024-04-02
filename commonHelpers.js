import{i as a,S as m}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function c(s){const r="https://pixabay.com/api/",l=new URLSearchParams({key:"43183854-3276a6d2cec346ebc07eac88c",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${r}?${l}`;return fetch(i).then(e=>e.json())}c().then(s=>console.log(s.hits));function u(s){return s.map(r=>`<div class="card">
        <a class="gallery-link" href="${r.largeImageURL}">
            <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
          </a>
          <ul class="list">
            <li class="item">Likes: <span>${r.likes}</span></li>
            <li class="item">Views: <span>${r.views}</span></li>
            <li class="item">Comments: <span>${r.comments}</span></li>
            <li class="item">Downloads: <span>${r.downloads}</span></li>
          </ul>
          </div>`).join("")}const o={formEl:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loadElem:document.querySelector(".loader")};o.formEl.addEventListener("submit",s=>{s.preventDefault(),d();const r=o.formEl.elements.searchImages.value.trim();r.length||a.error({color:"yellow",message:" Please fill in the field for search query.",position:"topRight"}),c(r).then(l=>{l.hits.length||(o.gallery.innerHTML="",a.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}));const i=u(l.hits);o.gallery.innerHTML=i,f(),new m(".gallery a").refresh(),o.formEl.reset()})});function d(){o.loadElem.classList.remove("hidden")}function f(){o.loadElem.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
