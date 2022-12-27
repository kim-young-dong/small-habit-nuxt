<script setup>
  const router = useRouter()
  const route = useRoute()
</script>

<template>
  <div class="max-w-screen flex min-h-screen overflow-hidden justify-center">
    <div class="w-full max-w-[720px] flex flex-col px-4 pt-4">
      <TheHeader />
      <Navigation v-if="route.path.includes('/habit')" />
      <main class="w-full flex-1">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
