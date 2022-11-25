<script setup></script>

<template>
  <div class="card card-compact w-full shadow-xl bg-card-400">
    <div class="card-body flex-row gap-4">
      <div class="flex flex-col">
        <input
          type="checkbox"
          checked="checked"
          class="checkbox checkbox-md border-2"
        />
      </div>
      <div class="flex flex-col flex-1 gap-1">
        <div class="card-actions justify-between items-center">
          <p class="text-sm font-bold">[학습] 코딩 배우기</p>
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
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
        <div class="divider mt-0 mb-0" />
        <div class="flex flex-col">
          <ul>
            <li>We are using cookies for no reason.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
