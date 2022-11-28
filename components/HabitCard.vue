<script setup lang="ts">
  interface habit {
    id: number
    title: string
    description: string
    category: string
    color: string
    day: Array<string>
    isDone: boolean
  }
  let props = defineProps<{
    habitItem: habit
  }>()

  let cardColor = computed(() => {
    if (props.habitItem.isDone) {
      return props.habitItem.color
    } else {
      return 'bg-gray-200'
    }
  })
</script>

<template>
  <div
    class="card card-compact w-full shadow-xl"
    :class="{
      [cardColor]: true,
    }"
  >
    <div class="card-body flex-row gap-4">
      <div class="flex flex-col">
        <input
          type="checkbox"
          :checked="habitItem.isDone"
          class="checkbox checkbox-md border-2"
          @change=""
        />
      </div>
      <div class="flex flex-col flex-1 gap-1">
        <div class="card-actions justify-between items-center">
          <p class="text-sm font-bold">
            [{{ habitItem.category }}] {{ habitItem.title }}
          </p>
          <div class="dropdown dropdown-end">
            <label tabindex="0">
              <button class="btn btn-ghost btn-sm btn-circle">
                <Icon type="ellipsis-vertical" />
              </button>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a>수정</a></li>
              <li><a>삭제</a></li>
            </ul>
          </div>
        </div>
        <div class="divider mt-0 mb-0" />
        <div class="flex flex-col">
          <ul>
            <li>{{ props.habitItem.description }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
