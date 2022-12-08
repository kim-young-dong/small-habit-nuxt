<script setup>
  //'https://kauth.kakao.com/oauth/authorize?client_id=795931948b0147ba49bbcd17e7943ed2&redirect_uri=http://localhost:3001/loading&response_type=code',
  const router = useRouter()
  async function kakaoLogin() {
    await navigateTo(
      'https://kauth.kakao.com/oauth/authorize?client_id=795931948b0147ba49bbcd17e7943ed2&redirect_uri=http://localhost:3001/loading&response_type=code',
      {
        external: true,
      },
    )
  }
</script>

<template>
  <div class="w-full h-full full flex flex-col justify-center items-center">
    <div class="cursor-pointer" @click="kakaoLogin">
      <img src="@assets/images/kakao_login.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
