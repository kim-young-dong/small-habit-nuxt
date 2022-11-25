<script setup></script>

<template>
  <div class="max-w-screen flex min-h-screen overflow-hidden justify-center">
    <div class="w-full max-w-[720px] flex flex-col px-4">
      <TheHeader />
      <main class="w-full flex-1">
        <slot></slot>
      </main>
      <button
        class="h-[30px] btn rounded-b-none text-white flex items-center justify-center"
      >
        새 습관 생성
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
