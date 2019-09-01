import "./css/styles.css";
import linecase from "./img/linecase.png";
import * as illustrator from "./img/ill-ustrator.png";
import * as Bio from "./img/Bio-Bio.png";

// add icon to browser title
const head = document.getElementsByTagName("head")[0];
const link = document.createElement("link");
link.setAttribute("rel", "icon");
link.setAttribute("href", Bio);
head.appendChild(link);

document.getElementById("app").innerHTML = `
<!--Header-->
<header class="header">
<div class="wrapper">
  <div class="inner-wrapper">
    <a href="" class="links logo">
      <img src=${linecase} alt="" />
    </a>
    <img src=${illustrator} alt="" class="header__title" />
    <p class="header__description">
      As if I was never going to make a free PSD without a illustration of
      me in it?!
    </p>
    <div id="background-man"></div>
  </div>
</div>
</header>
<main class="main">
<section class="ill-works__container">
  <div class="wrapper">
    <div class="inner-wrapper">
      <h1 class="works__title">illustrative works</h1>
      <p class="works__description">
        Sed suscipit risus vel sapien fringilla elementum. Donec vulputate
        sapien suscipit nulla tincidunt sodales. Ut ut nisi in nisl
        convallis ultricies. Curabitur tristique faucibus tincidunt. Donec
        rutrum mi faucibus nisi luctus sodales facilisis neque semper.
      </p>
      <div class="slider">
        <div class="slider-img"></div>
        <div class="slider-img"></div>
        <div class="slider-img"></div>
        <div class="slider-img"></div>
        <div class="slider-img"></div>
      </div>
      <div class="slider-buttons">
        <div class="slider-button"></div>
        <div class="slider-button"></div>
        <div class="slider-button"></div>
        <div class="slider-button"></div>
      </div>
    </div>
  </div>
</section>
<section class="graph-works__container">
  <div class="wrapper">
    <div class="inner-wrapper">
      <h1 class="works__title">Graphical work</h1>
      <p class="works__description">
        Sed suscipit risus vel sapien fringilla elementum. Donec vulputate
        sapien suscipit nulla tincidunt sodales. Ut ut nisi in nisl
        convallis ultricies. Curabitur tristique faucibus tincidunt. Donec
        rutrum mi faucibus nisi luctus sodales facilisis neque semper.
      </p>
      <div class="slider">
        <div class="slider-img"></div>
        <div class="slider-img"></div>
        <div class="slider-img"></div>
        <div class="slider-img"></div>
        <div class="slider-img"></div>
      </div>
      <div class="slider-buttons">
        <div class="slider-button"></div>
        <div class="slider-button"></div>
        <div class="slider-button"></div>
        <div class="slider-button"></div>
      </div>
    </div>
  </div>
</section>
<section class="corp-works__container">
  <div class="wrapper">
    <div class="inner-wrapper">
      <h1 class="works__title">corporates</h1>
      <p class="works__description">
        Sed suscipit risus vel sapien fringilla elementum. Donec vulputate
        sapien suscipit nulla tincidunt sodales. Ut ut nisi in nisl
        convallis ultricies. Curabitur tristique faucibus tincidunt. Donec
        rutrum mi faucibus nisi luctus sodales facilisis neque semper.
      </p>
      <div class="slider"></div>
      <div class="slider-buttons"></div>
    </div>
  </div>
</section>
<section class="experience__container">
  <div class="wrapper">
    <div class="inner-wrapper">
      <div class="content-block">
        <h1 class="works__title">Design & illustrative</h1>
        <p class="works__description">
          Sed suscipit risus vel sapien fringilla elementum. Donec
          vulputate sapien suscipit nulla tincidunt sodales. Ut ut nisi in
          nisl convallis ultricies. Curabitur tristique faucibus
          tincidunt. Donec rutrum mi faucibus nisi luctus sodales
          facilisis neque semper.
        </p>
        <p class="works__description">
          Curabitur euismod dignissim orci, at vestibulum ligula convallis
          non. Etiam sagittis diam quis felis volutpat convallis. In
          vehicula, est sit amet iaculis venenatis, mauris felis euismod
          tellus, sed facilisis eros felis in nunc. Nam nec arcu vel magna
          posuere malesuada. Fusce pretium magna vitae elit imperdiet
          dignissim. Duis egestas quam sit amet tortor vestibulum ac
          rhoncus dolor vulputate. Maecenas sit amet neque in est iaculis
          vestibulum.
        </p>
      </div>
      <div class="content-block">
        <h1 class="works__title">Years of experience</h1>
        <p class="works__description">
          Sed suscipit risus vel sapien fringilla elementum. Donec
          vulputate sapien suscipit nulla tincidunt sodales. Ut ut nisi in
          nisl convallis ultricies. Curabitur tristique faucibus
          tincidunt. Donec rutrum mi faucibus nisi luctus sodales
          facilisis neque semper.
        </p>
        <p class="works__description">
          Curabitur euismod dignissim orci, at vestibulum ligula convallis
          non. Etiam sagittis diam quis felis volutpat convallis. In
          vehicula, est sit amet iaculis venenatis, mauris felis euismod
          tellus, sed facilisis eros felis in nunc. Nam nec arcu vel magna
          posuere malesuada. Fusce pretium magna vitae elit imperdiet
          dignissim. Duis egestas quam sit amet tortor vestibulum ac
          rhoncus dolor vulputate. Maecenas sit amet neque in est iaculis
          vestibulum.
        </p>
      </div>
    </div>
  </div>
</section>
</main>
<!--Footer-->
<footer class="footer">
<div class="wrapper">
  <div class="inner-wrapper">
    <a href="" class="links logo">
      <img src=${linecase} alt="" />
    </a>
    <div class="contact">
      <div class="email-content">
        <p class="works__description">
          It'll be ute when mad as a waratah. You little ripper rort where
          as busy as a captain.
        </p>
        <button class="email-btn">
          <span class="email-txt">Join our email newsletter</span>
        </button>
      </div>
      <div class="social-wrapper">
        <div class="social-networks">
          <a href="" class="social-container rss">
            <div id="rss"></div>
          </a>
          <a href="" class="social-container ball">
            <div id="ball"></div>
          </a>
          <a href="" class="social-container twitter">
            <div id="twitter"></div>
          </a>
          <a href="" class="social-container fb">
            <div id="fb"></div>
          </a>
        </div>
      </div>
    </div>
    <span class="down-info">Made by Max Razhnov</span>
  </div>
</div>
</footer>`;
