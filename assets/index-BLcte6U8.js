(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(n){if(n.ep)return;n.ep=!0;const e=i(n);fetch(n.href,e)}})();function p(){const s=document.querySelectorAll(".fade-in"),t=new IntersectionObserver((i,a)=>{i.forEach(n=>{n.isIntersecting&&(n.target.classList.add("show"),a.unobserve(n.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});s.forEach(i=>t.observe(i))}function l(s,t,i,a,n){const e=document.querySelector(s);if(!e)return;e.innerHTML='<span class="text"></span><span class="cursor">|</span>';const o=e.querySelector(".text"),d=e.querySelector(".cursor");setTimeout(()=>{let r=0;const u=setInterval(()=>{o.textContent=t.slice(0,r+1),r++,r===t.length&&(clearInterval(u),d.remove(),n&&n())},i)},a)}const m=`<section class="page_main_visual">
  <div class="container">
    <div class="title">
      <h1>会社概要</h1>
      <p>- Company -</p>
    </div>
  </div>
  <div class="mask"></div>
</section>

<section class="company">
  <div class="container">
    <div class="row">
      <div class="col">
        <img src="/assets/company.png" alt="会社画像" width="100%" />
      </div>
      <div class="col">
        <table>
          <tr>
            <th>会社名</th>
            <td>Luma Works</td>
          </tr>
          <tr>
            <th>住所</th>
            <td>東京都千代田区〇〇町</td>
          </tr>
          <tr>
            <th>設立</th>
            <td>2025年1月</td>
          </tr>
          <tr>
            <th>社員数</th>
            <td>20名（2025年8月現在）</td>
          </tr>
          <tr>
            <th>資本金</th>
            <td>1000万円</td>
          </tr>
          <tr>
            <th>取引銀行</th>
            <td>〇〇銀行</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</section>

<section class="access">
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="sub_title">Access</p>
        <h2>アクセス</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.831769147434!2d139.7644864761898!3d35.68114412997806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbee1467bb%3A0x410f8b6e7e3ee34f!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1756604169166!5m2!1sja!2sjp"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>
`;function v(){return m}const h=`<section class="page_main_visual">
  <div class="container">
    <div class="title">
      <h1>お問い合わせ</h1>
      <p>- Contact -</p>
    </div>
  </div>
  <div class="mask"></div>
</section>

<section class="contact">
  <div class="container">
    <div class="text">
      弊社へのお問い合わせは、以下までお願いいたします。<br />
      回答させていただくまでに、お時間を数日いただく場合もございます。予めご了承ください。<br />
      また、弊社のクライアント企業に関する情報等やお問い合わせの内容によっては、<br />
      回答致しかねる場合もございますので、あわせてご了承ください。
    </div>
    <form action="/" method="post">
      <label for="name">お名前</label>
      <input type="text" id="name" name="name" required />
      <label for="email">メールアドレス</label>
      <input type="email" id="email" name="email" required />
      <label for="content">お問い合わせ内容</label>
      <textarea
        name="content"
        id="content"
        rows="10"
        placeholder="お問い合わせ内容をご記入ください"
        required
      ></textarea>
      <input type="submit" value="送信" />
      <input type="reset" value="リセット" />
    </form>
  </div>
</section>
`;function f(){return h}const g=`<section class="main_visual">
  <div class="container">
    <div class="title">
      <h1 id="hero-title"></h1>
      <p id="hero-subtitle"></p>
    </div>
  </div>
  <div class="mask"></div>
</section>

<section class="section1">
  <div class="container fade-in">
    <div class="row">
      <div class="col">
        <p class="sub_title">MESSAGE</p>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, dolor!
        </h2>
      </div>
      <div class="col">
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat optio
          tempora repellendus mollitia architecto tempore quod blanditiis
          debitis aliquam facere, sunt necessitatibus possimus obcaecati iusto,
          ad laboriosam veniam. Eum velit aperiam quidem delectus repellendus,
          recusandae optio dolores, culpa ut itaque aliquam quo pariatur in.
          Delectus repellendus aliquam vero reprehenderit optio? Voluptate,
          error numquam iusto sunt animi nisi! Eius, debitis numquam aut
          repellendus placeat voluptate fuga iste. Nulla voluptate voluptatibus
          nihil nisi, suscipit minima nam itaque temporibus blanditiis pariatur
          vero. Dolore accusantium voluptatum non quod, illum in id eos sequi
          ab, animi porro impedit expedita delectus quos tempore. Et, molestiae
          error.
        </p>
        <a href="/company" class="btn">MORE</a>
      </div>
    </div>
  </div>
</section>

<section class="section2">
  <div class="container fade-in">
    <p class="sub_title">SERVICE</p>
    <h2>事業内容</h2>
    <div class="row">
      <div class="col">
        <img src="/assets/service.png" alt="事業内容画像1" width="100%" />
        <h3>Lorem, ipsum.</h3>
      </div>
      <div class="col">
        <img src="/assets/service.png" alt="事業内容画像2" width="100%" />
        <h3>Lorem, ipsum.</h3>
      </div>
      <div class="col">
        <img src="/assets/service.png" alt="事業内容画像3" width="100%" />
        <h3>Lorem, ipsum.</h3>
      </div>
    </div>
    <div class="center">
      <a href="/service" class="btn">MORE</a>
    </div>
  </div>
</section>

<section class="section3">
  <div class="container fade-in">
    <div class="row">
      <div class="col">
        <p class="sub_title">CONTACT</p>
        <h2>お問い合わせ</h2>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quibusdam, architecto vel doloremque nisi voluptatem, iure alias
          laudantium earum distinctio sed sapiente deserunt delectus maiores
          molestiae minus aperiam ipsum tenetur, eius vero! Totam, assumenda.
          Voluptate sed deleniti quisquam, fugit repellendus tempore! Minus
          tempora reprehenderit assumenda modi autem eveniet nesciunt veritatis.
        </p>
        <a href="/contact" class="btn">MORE</a>
      </div>
      <div class="col">
        <img src="/assets/contact.png" alt="お問い合わせ画像" width="100%" />
      </div>
    </div>
  </div>
</section>
`;function b(){return g}const w=`<section class="page_main_visual">
  <div class="container">
    <div class="title">
      <h1>採用情報</h1>
      <p>- Recruit -</p>
    </div>
  </div>
  <div class="mask"></div>
</section>

<section class="recruit">
  <div class="container">
    <p>現在、Luma Worksでは採用は行なっておりません。</p>
  </div>
</section>
`;function L(){return w}const q=`<section class="page_main_visual">
  <div class="container">
    <div class="title">
      <h1>事業内容</h1>
      <p>- Service -</p>
    </div>
  </div>
  <div class="mask"></div>
</section>

<section class="service">
  <div class="container">
    <div class="row fade-in">
      <div class="col">
        <p class="heading">Feature 1</p>
        <h3>Lorem, ipsum dolor.</h3>
        <p class="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          sint voluptate placeat non sit vitae aliquid fuga autem delectus
          corrupti ut maiores ea illum velit vero, est, pariatur repellat
          explicabo!
        </p>
      </div>
      <div class="col">
        <img src="/assets/service.png" alt="Service画像" width="100%" />
      </div>
    </div>
    <div class="row reverse fade-in">
      <div class="col">
        <p class="heading">Feature 2</p>
        <h3>Lorem, ipsum dolor.</h3>
        <p class="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          sint voluptate placeat non sit vitae aliquid fuga autem delectus
          corrupti ut maiores ea illum velit vero, est, pariatur repellat
          explicabo!
        </p>
      </div>
      <div class="col">
        <img src="/assets/service.png" alt="Service画像" width="100%" />
      </div>
    </div>
    <div class="row fade-in">
      <div class="col">
        <p class="heading">Feature 3</p>
        <h3>Lorem, ipsum dolor.</h3>
        <p class="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          sint voluptate placeat non sit vitae aliquid fuga autem delectus
          corrupti ut maiores ea illum velit vero, est, pariatur repellat
          explicabo!
        </p>
      </div>
      <div class="col">
        <img src="/assets/service.png" alt="Service画像" width="100%" />
      </div>
    </div>
  </div>
</section>

`;function y(){return q}const x={"/":b,"/company":v,"/service":y,"/contact":f,"/recruit":L};function c(s){const t=x[s]||(()=>"<h1>404 Not Found</h1>"),i=document.getElementById("app");i&&(i.innerHTML=t())}c(window.location.pathname);document.addEventListener("DOMContentLoaded",()=>{l("#hero-title","Luma Works",120,0,()=>{l("#hero-subtitle","自然とモダンを融合したライフスタイル提案",60,500)}),p()});document.addEventListener("click",s=>{const t=s.target;t.matches("[data-link]")&&(s.preventDefault(),window.history.pushState(null,"",t.href),c(window.location.pathname))});window.addEventListener("popstate",()=>{c(window.location.pathname)});
