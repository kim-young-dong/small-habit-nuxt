<script setup lang="ts">
  const router = useRouter()
  const route = useRoute()

  async function kakaoLogin() {
    let response = await $fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: {
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:3000/loading',
        client_id: '795931948b0147ba49bbcd17e7943ed2',
        code: route.query.code,
        client_secret: 'eTSsrF73dkoGmEacU9PSdlhLY9bl4lVo',
      },
    })
  }
  kakaoLogin()
</script>

<template>
  <div class="flex flex-col w-full h-full">로딩중...</div>
</template>

<style scoped lang="scss"></style>
