<template>
  <div class="flex">
    <div class="bg-purple-950 h-screen p-4 pt-6 relative">
      <div class="text-center mb-8 hover:bg-purple-800 rounded p-2">
        <AnOutlinedMenu class="text-white cursor-pointer w-full text-lg" />
      </div>

      <div class="mb-3 text-center">
        <div class="p-2 hover:bg-purple-800 rounded">
          <BsHouseFill class="text-white cursor-pointer w-full text-lg" />
        </div>
        <span class="text-white text-xs font-semibold">Home</span>
      </div>

      <div class="text-center mb-3">
        <div class="p-2 hover:bg-purple-800 rounded">
          <ClChatConversationCircle class="text-white cursor-pointer w-full text-lg" />
        </div>
        <span class="text-white text-xs font-semibold">DMs</span>
      </div>

      <div class="text-center mb-3">
        <div class="p-2 hover:bg-purple-800 rounded">
          <BsBell class="text-white cursor-pointer w-full text-lg" />
        </div>
        <span class="text-white text-xs font-semibold">Activity</span>
      </div>

      <div class="text-center mb-3">
        <div class="p-2 hover:bg-purple-800 rounded">
          <BsBookmark class="text-white cursor-pointer w-full text-lg" />
        </div>
        <span class="text-white text-xs font-semibold">Later</span>
      </div>

      <div class="text-center mb-3">
        <div class="p-2 hover:bg-purple-800 rounded">
          <BxDotsHorizontalRounded class="text-white cursor-pointer w-full text-lg" />
        </div>
        <span class="text-white text-xs font-semibold">More</span>
      </div>
    </div>
    <div class="p-7">
      <h1 class="text-2xl font-bold">Home page</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AnOutlinedMenu,
  BsHouseFill,
  ClChatConversationCircle,
  BsBell,
  BsBookmark,
  BxDotsHorizontalRounded,
  // @ts-ignore
} from '@kalimahapps/vue-icons'
</script>
