<template>
  <div class="h-full sidebar">
    <div class="sidebar-header flex flex-col justify-center px-9 h-24 mb-8">
      <h2 class="sidebar-header__h2">
        Cheta And <br />
        Daughters Limited
      </h2>
      <p class="sidebar-header__p">RC123456789</p>
    </div>
    <div
      v-for="menu in menus"
      :key="menu.id"
      class="pl-8 sidebar-menu relative"
      :class="{ active: menu.isActive }"
      @click="
        () => {
          setIsActive(menu.id)
          showLeftFunc(menu.menu)
        }
      "
    >
      <div class="p-2 mb-2 sidebar-menu__flex">
        <img :src="getImgUrl(menu.icon)" alt="menu icons" class="" />
        <p class="text-white">{{ menu.menu }}</p>
      </div>
      <div :class="{ 'sidebar-bar': menu.isActive }"></div>
    </div>
    <Leftbar class="left" :class="{ hideTask: showTaskbar }" />
    <!-- <Rightbar class="right" :class="{ hide: showSidebar }" /> -->
  </div>
</template>

<script>
import { menus } from '@/assets/data/menus'

export default {
  data() {
    return {
      menus,
    }
  },

  computed: {
    showTaskbar() {
      return this.$store.state.layout.showTaskbar
    },
  },

  methods: {
    getImgUrl(pic) {
      return require(`../assets/icons/${pic}`)
    },

    setIsActive(id) {
      const menus = this.menus.map((menu) => {
        if (menu.id === id) {
          menu.isActive = true
        } else {
          menu.isActive = false
        }
        return menu
      })

      this.menus = menus
    },

    showLeftFunc(tab) {},
  },
}
</script>

<style scoped>
.sidebar {
  background: #0f808c;
  max-width: 241px;
  width: 100%;
  position: relative;
  transition: all 0.3s linear;
  z-index: 96;
}

.sidebar-header {
  background: #1c697a;
}

.sidebar-header__h2 {
  font-family: BR Sonoma;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #c2e2e9;
}

.sidebar-header__p {
  font-family: Euclid Circular A Trial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #c2e2e9;
}

.sidebar-menu {
  cursor: pointer;
}

.sidebar-menu.active {
  background: #46b2c8;
  position: relative;
}

.sidebar-menu__flex {
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  gap: 10px;
}

.sidebar-bar {
  width: 4px;
  height: 100%;
  background: #ffffff;
  position: absolute;
  left: 0;
  top: 0;
}

.left {
  position: absolute;
  left: 241px;
  top: 0;
  z-index: 0;
  transition: all 0.3s linear;
}

.right {
  position: absolute;
  left: 100%;
  top: calc(40px + 10vh);
}

.hideTask {
  transform: translateX(-330px);
  transition: all 0.3s linear;
}
</style>
