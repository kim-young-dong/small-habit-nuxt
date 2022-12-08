<script setup>
  const router = useRouter()
  const route = useRoute()
</script>

<template>
  <div class="w-full full flex justify-between relative mb-4">
    <div>logo</div>
    <button
      v-if="route.path !== '/login'"
      class="btn btn-sm"
      @click="router.push('/login')"
    >
      로그인
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
