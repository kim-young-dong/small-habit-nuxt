export default defineEventHandler(async event => {
  router.push('/kakao')
  return navigateTo(
    {
      path: 'https://kauth.kakao.com/oauth/authorize',
      query: {
        client_id: process.env.REST_API_KEY,
        redirect_uri: process.env.REDIRECT_URI,
        response_type: 'code',
      },
    },
    {
      external: true,
    },
  )
})
