<template>
  <div id="about" class="about flex flex-col items-center flex-grow w-full">
    <transition name="fade" appear>
      <div class="fixed inset-0 bg-white"></div>
    </transition>
    <NavBar />

    <div
      class="z-10 flex flex-col items-center justify-center flex-grow max-w-xl p-6"
    >
      <img src="/img/smarthome-logo.png" class="h-32" />
      <img src="/img/logo-text.svg" class="h-4 mt-2" />
      <div class="mt-2 text-xs">Version: {{ $store.getters.appVersion }}</div>
      <span class="flex">
        A
        <ion-icon
          name="logo-pwa"
          class="mx-1 text-2xl text-blue-500"
        ></ion-icon>
        by
        <a
          href="https://linkedin.com/in/tomastrejdl"
          class="font-semibold text-blue-500"
          >Tomáš Trejdl</a
        >
      </span>
      <p class="py-4 text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto,
        provident animi eveniet modi dicta voluptatum ab, pariatur harum cumque
        incidunt beatae. Aliquam alias velit, voluptate, repellendus doloribus
        obcaecati totam officiis nesciunt accusantium rem numquam pariatur!
        Dolores, explicabo eum.
      </p>
      <router-link
        to="/licenses"
        class="flex items-center justify-between w-full py-4 font-semibold border-t"
      >
        <span>Open-source licenses</span>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </router-link>
      <a
        href="https://tomastrejdl.github.io/smart-home-platform"
        class="flex items-center justify-between w-full py-4 font-semibold border-t"
      >
        <div>
          <ion-icon name="logo-github"></ion-icon>
          <span class="ml-2">GitHub</span>
        </div>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
