<template>
  <div class="flex items-center p-2 w-full header">
    <div class="w-4/5 md:w-1/5 flex items-center justify-between pr-4">
      <img src="~assets/svgs/logo.svg" alt="" />
      <div
        class="circle-arrow shadow-md"
        :class="{ close: isClosed }"
        @click="
          () => {
            toggleSidebar()
            toggle()
          }
        "
      >
        <img src="~assets/icons/circle-back-arrow.svg" alt="" />
      </div>
    </div>
    <div class="search w-3/5 px-2 py-4 hidden md:flex hidden items-center">
      <div class="flex items-center justify-between w-16 mr-2 dropdown">
        <p class="dropdown-text">All</p>
        <img src="~assets/icons/chevron-down.svg" alt="arrow down" />
      </div>
      <input
        type="search"
        placeholder="Search for anything"
        class="w-full bg-transparent outline-none"
      />
      <div class="">
        <img src="~assets/icons/search.svg" alt="search" />
      </div>
    </div>
    <div class="flex items-center justify-around w-1/5 ml-4">
      <div class="notification relative">
        <img src="~assets/icons/bell.svg" alt="bell" class="relative" />
        <div class="absolute top-2 right-2 badge">4</div>
      </div>
      <Avatar />
      <div class="hidden md:flex items-center justify-around w-1/2 border-0">
        <p class="dropdown-text">Solomon</p>
        <img src="~assets/icons/chevron-down.svg" alt="arrow down" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'

import Logo from './ui/Logo.vue'
import Avatar from './ui/Avatar.vue'

export default Vue.extend({
  components: { Logo, Avatar },
  data() {
    return {
      isClosed: false,
    }
  },
  methods: {
    ...mapMutations({
      toggleSidebar: 'layout/toggleSidebar',
    }),
    toggle() {
      this.isClosed = !this.isClosed
    },
  },
})
</script>

<style lang="css" scoped>
.header {
  height: 10vh;
}
.circle-arrow {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
}

.circle-arrow img {
  transition: all 0.3s linear;
}

.search {
  background-color: #f1f1f1;
}
.dropdown {
  border-right: 1px solid #e6e6e6;
  padding-right: 12px;
}
.dropdown-text {
  color: #9ca3af;
}
.notification {
  background: rgba(194, 226, 233, 0.2);
  border-radius: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.badge {
  background: red;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  font-size: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.close img {
  transform: rotate(180deg);
  transition: all 0.5s linear;
}
</style>
