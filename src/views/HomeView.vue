<template>
  <div class="flex">
    <!-- sidebar -->
    <div class="flex justify-between flex-col h-screen dark-purple">
      <div class="p-3 pt-6 relative">
        <div class="text-center mb-8 rounded p-2">
          <AnOutlinedMenu class="text-white cursor-pointer w-full text-lg" />
        </div>

        <div class="mb-3 text-center">
          <div class="p-2 icon rounded">
            <BsHouseFill class="text-white cursor-pointer w-full text-lg" />
          </div>
          <span class="text-white text-xs font-semibold">Home</span>
        </div>

        <div class="text-center mb-3">
          <div class="p-2 icon rounded">
            <ClChatConversationCircle class="text-white cursor-pointer w-full text-lg" />
          </div>
          <span class="text-white text-xs font-semibold">DMs</span>
        </div>

        <div class="text-center mb-3">
          <div class="p-2 icon rounded">
            <BsBell class="text-white cursor-pointer w-full text-lg" />
          </div>
          <span class="text-white text-xs font-semibold">Activity</span>
        </div>

        <div class="text-center mb-3">
          <div class="p-2 icon rounded">
            <BsBookmark class="text-white cursor-pointer w-full text-lg" />
          </div>
          <span class="text-white text-xs font-semibold">Later</span>
        </div>

        <div class="text-center mb-3">
          <div class="p-2 icon rounded">
            <BxDotsHorizontalRounded class="text-white cursor-pointer w-full text-lg" />
          </div>
          <span class="text-white text-xs font-semibold">More</span>
        </div>
      </div>

      <div>
        <div class="text-center p-4 pb-0">
          <div class="p-2 icon-hover hover:bg-purple-700 rounded-full">
            <BsPlusLg class="text-white cursor-pointer w-full text-lg" />
          </div>
        </div>

        <div class="p-4 pt-2">
          <img src="https://placehold.co/40x40" class="rounded" alt="" />
        </div>
      </div>
    </div>

    <!-- main bar -->
    <div class="flex flex-col w-full">
      <div class="p-2 flex dark-purple">
        <input
          type="text"
          placeholder="Search"
          class="w-2xl m-auto text-white icon-hover rounded p-1 cursor-pointer"
        />
      </div>

      <div class="grid grid-cols-3">
        <div class="first-section border-white p-3">
          <div class="flex justify-between content-center items-center">
            <h1 class="font-bold text-xl text-white">Zync</h1>

            <div class="p-2 icon rounded">
              <BsPencilSquare class="text-white cursor-pointer text-lg" />
            </div>
          </div>

          <div>
            <div class="p-2 icon rounded flex text-white items-center">
              <BsChatRightText />
              <div class="pl-2">Threads</div>
            </div>

            <div class="p-2 icon rounded flex text-white items-center">
              <ThHeadphoneAlt />
              <div class="pl-2">Huddles</div>
            </div>

            <div class="p-2 icon rounded flex text-white items-center">
              <BsSendArrowUp />
              <div class="pl-2">Drafts & sent</div>
            </div>
          </div>

          <div class="text-white mt-4">
            <div class="p-1">Channels</div>
            <div class="icon rounded p-0.5 pl-2"># Announcement</div>
            <div class="icon rounded p-0.5 pl-2"># Cloud</div>
            <div class="icon rounded p-0.5 pl-2"># Customer Engagement</div>
            <div class="icon rounded p-0.5 pl-2"># General</div>
            <div class="icon rounded p-0.5 pl-2"># QA</div>
            <div class="icon rounded p-0.5 pl-2"># Engineer</div>
            <div class="icon rounded p-0.5 pl-2"># Support</div>
            <div class="icon rounded p-0.5 pl-2"># UI</div>
            <div class="icon rounded p-0.5 pl-2"># Server</div>
          </div>
        </div>

        <div class="second-section border-white p-3">02</div>

        <div class="second-section border-white p-3">03</div>
      </div>
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
  BsPlusLg,
  BsPencilSquare,
  ThHeadphoneAlt,
  BsChatRightText,
  BsSendArrowUp,
  // @ts-ignore
} from '@kalimahapps/vue-icons'
</script>

<style>
.dark-purple {
  background-color: #381441;
}
.darker-purple {
  background-color: #211326;
}
.dark {
  background-color: #1b1d21;
}
.icon:hover {
  background-color: #63466a;
}
.icon-hover {
  background-color: #63466a;
}
.icon-hover:hover {
  background-color: #785a80;
}
.first-section {
  background-color: #211326;
}
.second-section {
  background-color: #1b1d21;
}
</style>
