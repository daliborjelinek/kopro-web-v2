<template>
  <footer class="flex justify-center flex w-full min-h-[100px]">
    <div class="content-wrapper py-2">
      <div class="footer flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
        <img src="~/assets/logo-full.svg">
        <p class="text-white text-sm font-bold hidden sm:block">
          KO.PRO 2022
        </p>

        <div class="text-white text-2xl flex flex-col md:flex-row">
          <a class="mr-2" href="https://www.facebook.com/profile.php?id=100086360689291" target="_blank">
            <IcoMdi:facebook /> <span class="text-sm">Kocar Production </span>
          </a>
          <a href="https://www.instagram.com/kopro.team" target="_blank">
            <IcoMdi:instagram /> <span class="text-sm">kopro.team</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>

.footer {
  height: 100%;
  width: 100%;
}
</style>
