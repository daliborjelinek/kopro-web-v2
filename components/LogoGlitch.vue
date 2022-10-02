<template>
  <div class="logo">
    <div class="logo-blue">
      <img src="@/assets/logo.svg">
    </div>
    <img class="logo-background" src="@/assets/logo.svg">
    <div class="logo-red">
      <img src="@/assets/logo.svg">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
@keyframes noise-anim-nav {
  $steps: 15;
  @for $i from 0 through $steps {
    #{percentage(calc($i*(1/$steps)))} {
      clip: rect(random(60) + px, 9999px, random(100) + px, 0);
    }
  }
}

@keyframes noise-anim-nav-2 {
  $steps: 15;
  @for $i from 0 through $steps {
    #{percentage(calc($i*(1/$steps)))} {
      clip: rect(random(40) + px, 9999px, random(100) + px, 0);
    }
  }
}

.logo {
  width: 80px;
  height: 80px;
  position: relative;

  // animation: noise-anim-nav 2s infinite linear alternate-reverse;
}

.logo img {
  width: 100%;
  padding: 1px ;
}

.logo:hover .logo-red, .logo:hover .logo-blue {
display: block;
}

.logo .logo-background {
  //content: url('~/assets/logo.svg');
  position: absolute;
  //animation: noise-anim-nav 2s infinite linear alternate-reverse;
}

.logo .logo-red {
  display: none;
  //content: url('~/assets/logo.svg');
  background-color: black;
  left: -2px;
  position: absolute;
  animation: noise-anim-nav 2s infinite linear alternate-reverse;

}

.logo .logo-red img{
  filter: drop-shadow(2px 0px 0px red);
}

.logo .logo-blue {
  right: 2px;
  top: 0;
  display: none;
  // content: url('~/assets/logo.svg');
  background-color: black;
  position: absolute;
  animation: noise-anim-nav-2 2s infinite linear alternate-reverse;
}

.logo .logo-blue img{
  filter: drop-shadow(-2px 0px 0px blue);
}
</style>
