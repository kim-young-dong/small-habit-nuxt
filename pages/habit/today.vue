<script setup lang="ts">
  interface habit {
    id: number
    title: string
    description: string
    category: string
    color: string
    day: string
    isDone: boolean
  }

  const router = useRouter()
  const route = useRoute()

  let habitItems = ref(Array<habit>())

  let getHabit = async () => {
    let res = await fetch('http://localhost:3000/habit')
    let data = await res.json()
    habitItems.value = data
  }

  habitItems.value = [
    {
      id: 1,
      title: '코딩 배우기',
      description: '코딩 배우기',
      category: '학습',
      color: 'bg-card-800',
      day: '2021-08-01',
      isDone: true,
    },
    {
      id: 1,
      title: '코딩 배우기',
      description: '코딩 배우기',
      category: '학습',
      color: 'bg-card-800',
      day: '2021-08-01',
      isDone: true,
    },
  ]
</script>

<template>
  <div class="flex flex-col w-full h-full justify-between">
    <div class="flex flex-col w-full h-full gap-2">
      <div class="w-full font-bold text-sm flex justify-end mt-2">
        목표 {{ habitItems.length }}
      </div>
      <HabitCard v-for="item in habitItems" :key="item.id" :habitItem="item" />
    </div>
    <button
      class="h-[30px] btn rounded-b-none text-white flex items-center justify-center"
      @click="router.push('/habit/new')"
    >
      새 습관 생성
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
