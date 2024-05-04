<script setup lang="ts">
definePageMeta({
  middleware: "authenticated",
});

useSeoMeta({
  title: "Logged",
});

const user = useUser();
</script>

<template>
  <div class="text-lg text-white">
    <pre>{{ user }}</pre>
  </div>
</template>