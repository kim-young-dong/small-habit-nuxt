<script setup>
  const router = useRouter()
  const route = useRoute()
</script>

<template>
  <div class="w-full h-[40px] flex justify-end relative tabs">
    <a
      class="tab tab-bordered flex-1 text-sm"
      :class="{
        'tab-active': route.path === '/habit/today',
      }"
      @click="router.push('/habit/today')"
    >
      오늘의 습관
    </a>
    <a
      class="tab tab-bordered flex-1 text-sm"
      :class="{
        'tab-active': route.path === '/habit/total',
      }"
      @click="router.push('/habit/total')"
    >
      전체습관
    </a>
    <a class="tab tab-bordered flex-1 text-sm">통계자료</a>
  </div>
</template>

<style scoped lang="scss"></style>
