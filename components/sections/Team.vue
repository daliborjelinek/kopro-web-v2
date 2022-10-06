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
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Integer vulputate sem a nibh rutrum consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus.
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

const members = [
  {
    name: 'Ondřej Kocar',
    role: 'Filmmaker, Fotograf, Pilot',
    description: 'Díky divadlu, možnosti být v několika filmových štábech a díky mnoha dalším externím spolupracím, jako je například zajištění a správa mezinárodních vysílání, vyučování audiovizuální tvorby na Masarykově univerzitě, natáčení portrétních videí. Výtvory!.',
    tag: 'Ondra'
  },
  {
    name: 'Dalibor Jelínek',
    role: 'Filmmaker, Fotograf, Zvukař',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Integer vulputate sem a nibh rutrum consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus.',
    tag: 'Dali'
  },
  {
    name: 'Denisa Klimešová',
    role: 'Fotografka',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Integer vulputate sem a nibh rutrum consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus.',
    tag: 'Denca'
  },
  {
    name: 'Anna Zahálková',
    role: 'PR, Sociální sítě',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Integer vulputate sem a nibh rutrum consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus.',
    tag: 'Anicka'
  },
  {
    name: 'Matyáš Vrba',
    role: 'Streamer',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Integer vulputate sem a nibh rutrum consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus.',
    tag: 'Maty'
  },
  {
    name: 'Šárka Portešová',
    role: 'Grafický design',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Integer vulputate sem a nibh rutrum consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus.',
    tag: 'Sarka'
  }

]
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

.member-wrapper:hover .member-description-wrapper {
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
