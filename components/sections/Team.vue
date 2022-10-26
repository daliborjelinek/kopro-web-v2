<template>
  <div style="position: absolute; width:100%;height: 100%" class="tym-bg-wrapper bg-[#ebebeb] hidden sm:block">
    <div class="c-left-team-div" />
    <div class="c-right-team-div" />
  </div>

  <div class="w-full z-10">
    <div class="w-4/5 m-auto">
      <h2 class="headline relative text-primary">
        O nás
      </h2>
      <p class="lg:w-1/2 w-full">
        {{ description }}
      </p>
      <div class="w-full flex justify-center hidden my-5 sm:block">
        <div class="flex justify-between flex-wrap gap-3.5 max-w-[850px] m-auto">
          <div v-for="member in members" class="card">
            <div class="flex flex-col w-60 member-wrapper">
              <div class="relative h-[248px]">
                <img :src="`/faces/${member.tag}.png`" class="absolute top-0">
                <img :src="`/faces/${member.tag}_wild.png`" class=" transition duration-300 absolute top-0 opacity-0 hover:opacity-100">
              </div>
              <div>
                <div class="h-52 bg-primary p-2 member-description-wrapper">
                  <p class="text-white font-bold text-lg">
                    {{ member.name }}
                  </p>
                  <p class="text-white text-sm font-light leading-3">
                    {{ member.role }}
                  </p>

                  <p class="text-white mt-3 text-sm font-light leading-4">
                    {{ member.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MembersCarousel :members="members" class="my-4 w-full sm:hidden" />
  </div>
</template>

<script setup>
import MembersCarousel from '../MembersCarousel'

import { members, description } from '../../assets/data/team'
</script>

<style lang="scss">
.member-description-wrapper {
  height: 60px;
  overflow: hidden;
  transition: cubic-bezier(.17,.67,.59,1.2) .3s;

}

.member-wrapper {
  height: 480px;
}

.member-wrapper:hover .member-description-wrapper, .member-open {
  height: 215px;
  background-color: black;
}

.c-left-team-div {
  width:40vw;
  height: 40vw;
  background-image: url(assets/c-team-top.svg);
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate(-10%,-10%);
}

.c-right-team-div {
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
  width:40vw;
  height: 40vw;
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

</style>
