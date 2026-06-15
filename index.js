import{a as _,S as w,N as y,P as L,A as b}from"./assets/vendor-BeKveIiU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const r=document.querySelector(".burger-btn"),d=document.querySelector(".nav-wrapper"),o=document.querySelector(".menu-overlay");if(r&&d){const t=()=>{r.classList.add("is-open"),d.classList.add("is-open"),o==null||o.classList.add("is-open"),r.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"},s=()=>{r.classList.remove("is-open"),d.classList.remove("is-open"),o==null||o.classList.remove("is-open"),r.setAttribute("aria-expanded","false"),document.body.style.overflow=""};r.addEventListener("click",()=>{r.classList.contains("is-open")?s():t()}),d.querySelectorAll(".nav-link, .header-btn").forEach(e=>{e.addEventListener("click",s)}),o==null||o.addEventListener("click",s),document.addEventListener("keydown",e=>{e.key==="Escape"&&r.classList.contains("is-open")&&(s(),r.focus())})}const m=document.querySelector(".pets-section__filter-list"),g=document.querySelector(".pets-section__pets-list"),f=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];let a=8,l;const h=t=>{const s=[...t].sort((e,c)=>f.indexOf(e.name)-f.indexOf(c.name)).map(e=>`<li class="filter-list__item">
      <button class="filter-list__button" data-id="${e._id}">${e.name}</button>
    </li>`).join("");m.insertAdjacentHTML("beforeend",s)},v=t=>{const s=[...t].map(e=>`<li class="pets-list__item">
      <img src="${e.image}" alt="${e.name}" class="pets-list__image" />
      <p class="pets-list__species">${e.species}</p>
      <p class="pets-list__name">${e.name}</p>

      <ul class="pets-list__filter-marks">
        ${e.categories.map(c=>`<li class="filter-marks__item">
          <p class="filter-marks__text-content">${c.name}</p>
        </li>`).join("")}
      </ul>

      <div class="pets-list__wrapper">
        <p class="pets-list__age pets-list__wrapper-content">${e.age}</p>
        <p class="pets-list__gender pets-list__wrapper-content">${e.gender}</p>
      </div>

      <p class="pets-list__descriprion">
        ${e.shortDescription}
      </p>
      <button class="pets-list__button" type="button" data-id=${e._id}>Дізнатись більше</button>
    </li>`).join("");g.insertAdjacentHTML("beforeend",s)},E=async()=>{try{const t=await _.get("https://paw-hut.b.goit.study/api/categories");h(t.data)}catch(t){console.error(t)}},p=async t=>{try{const s=await _.get("https://paw-hut.b.goit.study/api/animals",t);g.innerHTML="",v(s.data.animals)}catch(s){console.error(s)}},$=t=>{E()},A=t=>{t.target.classList.contains("filter-list__button")&&(m.querySelectorAll(".filter-list__button").forEach(s=>{s.classList.remove("is-active")}),window.matchMedia("(min-width: 1440px)").matches?a=9:a=8,t.target.classList.add("is-active"),l=t.target.dataset.id,p(l==="all"?{params:{limit:a}}:{params:{limit:a,categoryId:l}}))},S=t=>{window.matchMedia("(min-width: 1440px)").matches?a=9:a=8,p(l==="all"?{params:{limit:a}}:{params:{limit:a,categoryId:l}})};document.addEventListener("DOMContentLoaded",$);m.addEventListener("click",A);window.addEventListener("resize",S);new w(".mySwiper",{modules:[y,L],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});new b(".accordion-container",{duration:400,showMultiple:!1,openOnInit:[0]});
//# sourceMappingURL=index.js.map
