<script setup lang="ts">
definePageMeta({
  middleware: "not-authenticated",
});

useSeoMeta({
  title: "Login",
});
</script>

<template>
  <LoginForm />
</template>