<template>
  <div class="about w-full flex-grow flex flex-col items-center">
    <transition name="fade" appear>
      <div class="fixed inset-0 bg-white"></div>
    </transition>
    <NavBar />

    <div
      class="flex-grow flex flex-col justify-center items-center z-10 p-6 max-w-xl"
    >
      <img src="/img/smarthome-logo.png" class="h-32" />
      <img src="/img/logo-text.svg" class="h-4 mt-2" />
      <div class="mt-2 text-xs">Version: {{ $store.getters.appVersion }}</div>
      <span class="flex">
        A
        <ion-icon
          name="logo-pwa"
          class="text-2xl mx-1 text-blue-500"
        ></ion-icon>
        by
        <a
          href="https://linkedin.com/in/tomastrejdl"
          class="font-semibold text-blue-500"
          >Tomáš Trejdl</a
        >
      </span>
      <p class="text-left py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto,
        provident animi eveniet modi dicta voluptatum ab, pariatur harum cumque
        incidunt beatae. Aliquam alias velit, voluptate, repellendus doloribus
        obcaecati totam officiis nesciunt accusantium rem numquam pariatur!
        Dolores, explicabo eum.
      </p>
      <router-link
        to="/licenses"
        class="w-full flex justify-between items-center py-4 font-semibold border-t"
      >
        <span>Open-source licenses</span>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </router-link>
      <a
        href="https://tomastrejdl.github.io/smart-home-platform"
        class="w-full flex justify-between items-center py-4 font-semibold border-t"
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
