<template>
  <div>
    <Navigation />
    <home />
    <services />
    <section class="section section-4">
      <div class="content-wrapper">
        <div class="animation-section-wrapper">
          <!--          <AnimationView />-->
          <LinesAnimation />
          <div>
            <p style="color:white; text-align: right; z-index: 1; font-weight: 600; font-size:64px; line-height: 78px;">
              Tvoříme umění
              <span style="color:#9747FF">bez hranic.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="tym" class="section section-5">
      <div style="position: absolute; width:100%;height: 100%" class="tym-bg-wrapper">
        <div class="c-left-team-div" />
        <div class="c-right-team-div" />
      </div>
      <!-- <img class="img c-left-team" src="@/assets/c-shape-gray.svg" /> -->
      <!-- <img class="img c-right-team" src="@/assets/c-shape-gray.svg" /> -->
      <div class="content-wrapper">
        <h2 class="headline">
          Tým
        </h2>
      </div>
    </section>
    <section id="kontakt" class="section section-6">
      <div class="content-wrapper">
        <h2 class="headline">
          Napište nám
        </h2>
        <!--        <contact />-->
      </div>
    </section>
    <footer-view />
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss">
@media screen and (max-width: 600px) {
  .nav { display: none !important}
}

.c-left-team-div {
  width:40%;
  height: 100vw;
  background-image: url(assets/c-team-top.svg);
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate(-10%,-10%);
}

.c-right-team-div {
  position: absolute;
  right: 0;
  bottom: 0;
  width:40%;
  height: 100vw;
  background-image: url(assets/c-team-bottom.svg);
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate(0%,10%);
}

.c-left-team {
  position: absolute;
  transform: translate(91px, 74px) rotate(68deg) scale(7.5);
  left: 0;
  top: 0;
}
.c-right-team {
  position: absolute;
  transform: translate(-73px, 548px) rotate(249deg) scale(7.5);
  top: 0;
  right: 0;
}

.section-3 {
  background: linear-gradient(180deg, #797979 7.29%, rgba(237, 207, 207, 0) 100%);

  padding-top: 50px;
}

.animation-section-wrapper {
  overflow: hidden;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.section-4 {
  overflow: hidden;
  background: black;
  position: relative;

}

.section-5 {
  position: relative;

}

.section-5 .headline {
  position: relative;
  color: black;
}

.section-6 {
  padding-top: 50px;
  background: linear-gradient(141.35deg, #FAFAFA -4.79%, rgba(0, 0, 0, 0.619792) -4.78%, rgba(0, 0, 0, 0.634054) 4.76%, #000000 71.66%, #000000 109.9%);
  height: calc(100vh - 100px);
}

.content-wrapper {
  width: 80%;

}
.centerized {
  display: flex;
  align-items: center;
  justify-content: center;
}

.headline {
  font-family: "Zacbel X";
  font-size: 96px;
  color: white;

}

.spacer {
  height: 100%;
  width: 2px;
  background-color: #FFFFFF;
  margin: 0 30px;
}
</style>
