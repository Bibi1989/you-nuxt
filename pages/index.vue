<template>
  <div class="h-screen">
    <Header />
    <div class="content">
      <!-- <div class="body w-full">
        <div class="body-bar"></div>
      </div> -->
      <Sidebar :class="{ hide: showSidebar }" />
      <!-- <Leftbar class="left" :class="{ hideTask: showTaskbar }" /> -->
      <Rightbar class="right" :class="{ hideAgent: showAgentbar }" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MapBody from '~/components/MapBody.vue'

export default Vue.extend({
  components: { MapBody },
  computed: {
    showSidebar() {
      // if (
      //   !this.$store.state.layout.showTaskbar &&
      //   this.$store.state.layout.showSidebar
      // ) {
      //   return !this.$store.state.layout.showTaskbar
      // }
      return this.$store.state.layout.showSidebar
    },
    showTaskbar() {
      return this.$store.state.layout.showTaskbar
    },
    showAgentbar() {
      return this.$store.state.layout.showAgentbar
    },
  },
  methods: {},
})
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.body-bar {
  height: 40px;
  width: 100%;
  background: #fdfdfd;
  position: absolute;
  z-index: 0;
}

.content {
  height: 90vh;
  display: flex;
  overflow: hidden;
  background-image: url('~assets/images/map.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

.left {
  transform: translateX(0);
  position: absolute;
  left: 241px;
  z-index: 0;
  transition: all 0.3s linear;
}

.right {
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.3s linear;
}

.hide {
  transform: translateX(-241px);
  transition: all 0.3s linear;
  z-index: -20;
}

.hideAgent {
  transform: translateX(330px);
  transition: all 0.3s linear;
}
</style>
