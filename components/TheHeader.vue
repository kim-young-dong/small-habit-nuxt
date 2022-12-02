<script setup>
  //'https://kauth.kakao.com/oauth/authorize?client_id=795931948b0147ba49bbcd17e7943ed2&redirect_uri=http://localhost:3001/loading&response_type=code',
  const router = useRouter()
  async function kakaoLogin() {
    router.push({
      path: 'https://kauth.kakao.com/oauth/authorize',
      query: {
        client_id: '795931948b0147ba49bbcd17e7943ed2',
        redirect_uri: 'http://localhost:3001/loading',
        response_type: 'code',
      },
    })
    // await navigateTo(
    //   {
    //     path: 'https://google.com',
    //     query: {
    //       page: 10,
    //       client_id: '795931948b0147ba49bbcd17e7943ed2',
    //       redirect_uri: 'http://localhost:3001/loading',
    //       response_type: 'code',
    //     },
    //   },
    //   {
    //     external: true,
    //   },
    // )
  }
</script>

<template>
  <div class="w-full full flex justify-end relative">
    <div>logo</div>
    <div @click="kakaoLogin">kakao</div>
  </div>
</template>

<style scoped lang="scss"></style>
