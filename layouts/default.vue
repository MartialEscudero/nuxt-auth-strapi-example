<script setup lang="ts">
const { signOut } = useAuth();
const user = useUser();
</script>

<template>
  <div class="bg-zinc-900">
    <button
      v-if="user"
      @click="signOut"
      class="absolute right-4 top-4 size-10 rounded-full bg-amber-600 px-2 py-1 text-white transition hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        fill="currentColor"
      ><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>
    </button>
    <main class="flex h-screen w-screen items-center justify-center">
      <slot />
    </main>
  </div>
</template>