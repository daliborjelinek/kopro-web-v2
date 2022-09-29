<template>
  <header>
    <div class="nav-wrapper .d-sm-none .d-md-block">
      <picture class="logo">
        <div class="logo-wrapper">
          <img class="logo-background" src="assets/logo.svg" />
        </div>
        <div class="logo-wrapper">
          <img class="logo-red" src="assets/logo.svg" />
        </div>
        <div class="logo-wrapper">
          <img class="logo-blue" src="assets/logo.svg" />
        </div>
      </picture>

      <div class="nav">
        <a v-smooth-scroll href="#sluzby"
          ><span class="nav-item">Služby</span></a
        >
        <span class="spacer"></span>
        <div class="inline-block relative">
        <a v-smooth-scroll href="#portfolio">
          <span class="nav-item">Porfolio</span></a
        >
          <ul class="dropdown-menu bg-black hidden absolute text-white pt-1 w-40">
            <li class=""><a class="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap" href="#">Video</a></li>
            <li class=""><a class="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap" href="#">Fotografie</a></li>
            <li class=""><a class="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap" href="#">Grafický desing</a></li>
            <li class=""><a class="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap" href="#">Livestreaming</a></li>
            <li class=""><a class="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap" href="#">Dronning</a></li>
          </ul>
        </div>

        <span class="spacer"></span>
        <a v-smooth-scroll href="#tym"> <span class="nav-item">O nás</span></a>
        <span class="spacer"></span>
        <a > <span class="nav-item">Tým</span></a>

      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  height: 100px;
  background-color: black;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10000;
}

.logo img {
  height: 100%;
}

@keyframes noise-anim-nav {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage(calc($i*(1/$steps)))} {
      clip: rect(random(60) + px, 9999px, random(250) + px, 0);
    }
  }
}

@keyframes noise-anim-nav-2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage(calc($i*(1/$steps)))} {
      clip: rect(random(60) + px, 9999px, random(250) + px, 0);
    }
  }
}

.logo {
  margin: 16px 0;
  position: relative;
  animation: noise-anim-nav 2s infinite linear alternate-reverse;
}

.logo-wrapper {
  height: 100%;
  position: absolute;
  background: black;
}

.logo:hover .logo-red {
  content: url('/assets/logo.svg');
  filter: drop-shadow(2px 0px 0px red);

  position: absolute;
  animation: noise-anim-nav 2s infinite linear alternate-reverse;
  left: 1px;
}

.logo:hover .logo-blue {
  content: url('/assets/logo.svg');
  filter: drop-shadow(-2px 0px 0px blue);
  position: absolute;

  left: -1px;
  animation: noise-anim-nav-2 2s infinite linear alternate-reverse;
}

.nav-item {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  transition: 0.3s;
}

.nav-item:hover {
  color: #9747FF;
  /* background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%); */

}

.nav {
  align-items: center;
  display: flex;
  margin: 27px 0px;
}

.nav a {
  text-decoration: none !important;
  transition: .3s;
}
.nav a:hover {
  //transform: skew(-10deg);
}

.nav-wrapper {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;

}

</style>
