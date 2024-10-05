<script setup lang="ts">
const { signIn } = useAuth();

const signInWithCredentials = async (event: Event) => {
  const formData = new FormData(event.target as HTMLFormElement);

  const credentials = {
    identifier: formData.get("username") as string,
    password: formData.get("password") as string,
  };

  await signIn(credentials);
};
</script>

<template>
  <form
    @submit.prevent="signInWithCredentials"
    class="w-full max-w-lg space-y-4 max-sm:px-4"
  >
    <input
      id="username"
      name="username"
      type="text"
      autocomplete="username"
      placeholder="Username"
      required
      class="block w-full rounded-md border-0 py-1.5 focus:ring-2 focus:ring-inset focus:ring-amber-600"
    >
    <input
      id="password"
      name="password"
      type="password"
      autocomplete="current-password"
      placeholder="Password"
      required
      class="block w-full rounded-md border-0 py-1.5 focus:ring-2 focus:ring-inset focus:ring-amber-600"
    >

    <button
      type="submit"
      class="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 font-semibold text-white hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
    >
      Sign in
    </button>
  </form>
</template>