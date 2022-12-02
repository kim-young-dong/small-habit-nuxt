<script setup>
  const router = useRouter()
  async function kakaoLogin() {
    await navigateTo(
      {
        path: 'https://kauth.kakao.com/oauth/authorize',
        query: {
          client_id: '795931948b0147ba49bbcd17e7943ed2',
          redirect_uri: 'http://localhost:3001/loading',
          response_type: 'code',
        },
      },
      {
        external: true,
      },
    )
  }
</script>

<template>
  <div class="w-full full flex justify-end relative">
    <div>logo</div>
    <div @click="kakaoLogin">kakao</div>
  </div>
</template>

<style scoped lang="scss"></style>
