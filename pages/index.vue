<script setup lang="ts">
definePageMeta({
  middleware: "not-authenticated",
});

useSeoMeta({
  title: "Home",
});
</script>

<template>
  <NuxtLink
    to="/login"
    class="rounded-md bg-amber-600 px-3 py-1.5 font-semibold leading-6 text-white hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
  >
    Se connecter
  </NuxtLink>
</template>