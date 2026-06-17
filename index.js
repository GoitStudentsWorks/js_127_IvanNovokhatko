import{a as $,S as I,N as C,P as j,A as D}from"./assets/vendor-BeKveIiU.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const n=document.querySelector(".burger-btn"),g=document.querySelector(".nav-wrapper"),a=document.querySelector(".menu-overlay");if(n&&g){const t=()=>{n.classList.add("is-open"),g.classList.add("is-open"),a==null||a.classList.add("is-open"),n.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"},e=()=>{n.classList.remove("is-open"),g.classList.remove("is-open"),a==null||a.classList.remove("is-open"),n.setAttribute("aria-expanded","false"),document.body.style.overflow=""};n.addEventListener("click",()=>{n.classList.contains("is-open")?e():t()}),g.querySelectorAll(".nav-link, .header-btn").forEach(s=>{s.addEventListener("click",e)}),a==null||a.addEventListener("click",e),document.addEventListener("keydown",s=>{s.key==="Escape"&&n.classList.contains("is-open")&&(e(),n.focus())})}const A=document.querySelector(".pets-section__filter-list"),N=document.querySelector(".pets-section__pets-list"),O=document.querySelector(".pets-section__button"),T=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];let c=8,f;const V=t=>{const e=[...t].sort((s,i)=>T.indexOf(s.name)-T.indexOf(i.name)).map(s=>`<li class="filter-list__item">
      <button class="filter-list__button" data-id="${s._id}">${s.name}</button>
    </li>`).join("");A.insertAdjacentHTML("beforeend",e)},z=t=>{const e=[...t].map(s=>`<li class="pets-list__item">
      <img src="${s.image}" alt="${s.name}" class="pets-list__image" />
      <p class="pets-list__species">${s.species}</p>
      <p class="pets-list__name">${s.name}</p>

      <ul class="pets-list__filter-marks">
        ${s.categories.map(i=>`<li class="filter-marks__item">
          <p class="filter-marks__text-content">${i.name}</p>
        </li>`).join("")}
      </ul>

      <div class="pets-list__wrapper">
        <p class="pets-list__age pets-list__wrapper-content">${s.age}</p>
        <p class="pets-list__gender pets-list__wrapper-content">${s.gender}</p>
      </div>

      <p class="pets-list__descriprion">
        ${s.shortDescription}
      </p>
      <button class="pets-list__button" type="button" data-id=${s._id}>Дізнатись більше</button>
    </li>`).join("");N.insertAdjacentHTML("beforeend",e)},W=async()=>{try{const t=await $.get("https://paw-hut.b.goit.study/api/categories");V(t.data)}catch(t){console.error(t)}},b=async t=>{try{const e=await $.get("https://paw-hut.b.goit.study/api/animals",t);N.innerHTML="",z(e.data.animals)}catch(e){console.error(e)}},F=t=>{W()},G=t=>{t.target.classList.contains("filter-list__button")&&(O.classList.remove("is-hidden"),A.querySelectorAll(".filter-list__button").forEach(e=>{e.classList.remove("is-active")}),window.matchMedia("(min-width: 1440px)").matches?c=9:c=8,t.target.classList.add("is-active"),f=t.target.dataset.id,f==="all"?b({params:{limit:c}}).catch(e=>{console.log(e)}):b({params:{limit:c,categoryId:f}}).catch(e=>{console.log(e)}))},R=t=>{O.classList.remove("is-hidden"),window.matchMedia("(min-width: 1440px)").matches?c=9:c=8,f==="all"?b({params:{limit:c}}).catch(e=>{console.log(e)}):b({params:{limit:c,categoryId:f}}).catch(e=>{console.log(e)})};document.addEventListener("DOMContentLoaded",F);A.addEventListener("click",G);window.addEventListener("resize",R);const K=document.querySelector(".pets-section__pets-list"),S=document.querySelector(".pets-section__button");let u=document.querySelector(".filter-list__button.is-active"),p=8,m=u.dataset.id,d=1,E,P=500;const Q=t=>{const e=[...t].map(s=>`<li class="pets-list__item">
      <img src="${s.image}" alt="${s.name}" class="pets-list__image" />
      <p class="pets-list__species">${s.species}</p>
      <p class="pets-list__name">${s.name}</p>

      <ul class="pets-list__filter-marks">
        ${s.categories.map(i=>`<li class="filter-marks__item">
          <p class="filter-marks__text-content">${i.name}</p>
        </li>`).join("")}
      </ul>

      <div class="pets-list__wrapper">
        <p class="pets-list__age pets-list__wrapper-content">${s.age}</p>
        <p class="pets-list__gender pets-list__wrapper-content">${s.gender}</p>
      </div>

      <p class="pets-list__descriprion">
        ${s.shortDescription}
      </p>
      <button class="pets-list__button" type="button" data-id=${s._id}>Дізнатись більше</button>
    </li>`).join("");K.insertAdjacentHTML("beforeend",e)},H=async t=>{try{const e=await $.get("https://paw-hut.b.goit.study/api/animals",t);E=Math.ceil(e.data.totalItems/p),Q(e.data.animals)}catch(e){console.error(e)}},Z=t=>{u=document.querySelector(".filter-list__button.is-active"),window.matchMedia("(min-width: 1440px)").matches?p=9:p=8,u.dataset.id!==m&&(d=1,m=u.dataset.id),d+=1,m==="all"?H({params:{limit:p,page:d}}).catch(e=>{console.log(e)}).finally(()=>{d>=E&&S.classList.add("is-hidden"),window.scrollBy({top:P*2,left:0,behavior:"smooth"})}):H({params:{limit:p,categoryId:m,page:d}}).catch(e=>{console.log(e)}).finally(()=>{d>=E&&S.classList.add("is-hidden"),window.scrollBy({top:P*2,left:0,behavior:"smooth"})})},J=t=>{u=document.querySelector(".filter-list__button.is-active"),window.matchMedia("(min-width: 1440px)").matches?p=9:p=8,d=1,m=u.dataset.id};S.addEventListener("click",Z);window.addEventListener("resize",J);new I(".mySwiper",{modules:[C,j],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});const B="/doctorcrew/assets/icons-bv1T2WZQ.svg";new D(".accordion-container",{duration:400,showMultiple:!1,onOpen(t){t.querySelector(".faq-icon use").setAttribute("href",`${B}#close`)},onClose(t){t.querySelector(".faq-icon use").setAttribute("href",`${B}#add`)}});async function U(){return(await(await fetch("https://paw-hut.b.goit.study/api/feedbacks?limit=10&page=1")).json()).feedbacks}function Y(t){let e="";for(let s=1;s<=5;s++)t>=s?e+=`
        <li class="star">
          <svg width="24" height="24">
            <use href="/img/icons.svg#star-filled"></use>
          </svg>
        </li>
      `:t>=s-.5?e+=`
        <li class="star">
          <svg width="24" height="24">
            <use href="/img/icons.svg#star-half"></use>
          </svg>
        </li>
      `:e+=`
        <li class="star">
          <svg width="24" height="24">
            <use href="/img/icons.svg#star-outline"></use>
          </svg>
        </li>
      `;return`<ul class="stars-feedback">${e}</ul>`}function ee(t){return`
    <div class="swiper-slide">
      <div class="swiper-feedback">

        ${Y(Number(t.rate))}

        <p class="feedback-text">${t.description}</p>

        <p class="feedback-author">${t.author}</p>

      </div>
    </div>
  `}async function te(){const t=await U(),e=document.querySelector("#feedbacks-list");e.innerHTML=t.map(ee).join("")}document.addEventListener("DOMContentLoaded",async()=>{await te(),new I(".swiper__success-swiper",{modules:[C,j],slidesPerView:1,slidesPerGroup:1,spaceBetween:20,navigation:{nextEl:".success-swiper__button-next",prevEl:".success-swiper__button-prev"},pagination:{el:".success-swiper__pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:32}}})});const X=document.querySelector(".modal-overlay"),se=document.querySelector("[data-order-modal-close]"),oe=document.querySelector(".modal-form"),v=document.querySelector('[name="user-name"]'),h=v.nextElementSibling,y=document.querySelector('[name="user-phone"]'),_=y.nextElementSibling,L=document.querySelector('[name="user-comment"]'),w=L.nextElementSibling,ie=document.querySelector(".take-home-btn");let q,M,x;const re="https://paw-hut.b.goit.study/api/orders";function k(){X.classList.remove("is-open")}se.addEventListener("click",k);window.addEventListener("keydown",t=>{t.key==="Escape"&&k()});X.addEventListener("click",t=>{t.target===t.currentTarget&&k()});oe.addEventListener("submit",async t=>{t.preventDefault();const e=v.value.trim(),s=y.value.trim();let i=L.value.trim();i===""&&(i="коментар відсутній");const o=ie.dataset.id;if(console.log(e,s,i),ne(e),ae(s),ce(i),q&&M&&x){const r={name:e,phone:s,animalId:o,comment:i};try{const l=await $.post(re,r);console.log(`Ваше замовлення успішно збережено під номером ${l.data.orderNum}`),console.log(l.data)}catch{console.log("Вибачте сталася помилка при надсиланні запиту")}finally{t.target.reset(),k()}}});function ne(t){const e=s=>{h.classList.add("show-error"),v.classList.add("error-border"),h.innerHTML=`${s}`,q=!1};t===""?e(`Поле "Ім'я" обов'язкове до заповнення`):t.length>32?e("Довжина ім'я не повинна перевищувати 32 символи"):/\d/.test(t)?e("Ім'я не повинно містити цифр"):(h.classList.remove("show-error"),v.classList.remove("error-border"),h.innerHTML="",q=!0)}function ae(t){/^380\d{9}$/.test(t)?(_.classList.remove("show-error"),y.classList.remove("error-border"),_.innerHTML="",M=!0):(_.classList.add("show-error"),y.classList.add("error-border"),_.innerHTML='Заповніть поле "Телефон" у форматі 380XXXXXXXXX',M=!1)}function ce(t){t.length>500?(w.classList.add("show-error"),L.classList.add("error-border"),w.innerHTML="Довжина тексту не повинна перевищувати 500 символів",x=!1):(w.classList.remove("show-error"),L.classList.remove("error-border"),w.innerHTML="",x=!0)}document.querySelector("#global-loader");
//# sourceMappingURL=index.js.map
