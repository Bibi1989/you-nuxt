<template>
  <div>
    <div class="task-bar">
      <p>Tasks</p>
      <div
        class="
          w-10
          h-10
          flex
          items-center
          justify-center
          rounded
          bg-gray-800
          bar
        "
        :class="{ close: closeIcon }"
        @click="
          () => {
            toggleTask()
            toggle()
          }
        "
      >
        <img src="~assets/icons/chevron-down.svg" alt="" />
      </div>
    </div>
    <NewTab :tabs="tabList" variant="vertical" class="tab">
      <template v-slot:tabPanel-1
        ><div v-for="task in tasks" :key="task.id" class="tab-card">
          <LeftbarCard :task="task" /></div
      ></template>
      <template v-slot:tabPanel-2
        ><div v-for="task in tasks" :key="task.id" class="tab-card">
          <LeftbarCard :task="task" /></div
      ></template>
      <template v-slot:tabPanel-3
        ><div v-for="task in tasks" :key="task.id" class="tab-card">
          <LeftbarCard :task="task" /></div
      ></template>
    </NewTab>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'

import NewTab from './ui/NewTab.vue'
import Tab from './ui/Tab.vue'
import { tasks } from '@/assets/data/tasks'
import LeftbarCard from './LeftbarCard.vue'

export default Vue.extend({
  components: { Tab, NewTab, LeftbarCard },
  props: {
    left: {
      type: String,
    },
  },
  data() {
    return {
      tabList: ['24 Unassigned', '12 assigned', '30 Completed'],
      tasks,
      closeIcon: false,
    }
  },
  methods: {
    ...mapMutations({
      toggleTask: 'layout/toggleTaskbar',
    }),
    toggle() {
      this.closeIcon = !this.closeIcon
    },
  },
})
</script>

<style scoped>
.task-bar {
  height: 40px;
  background: #46b2c8;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 15px;
  color: #ffffff;
}

.tab {
  width: 330px;
  height: 90vh;
  overflow-y: auto;
}

.tab-card {
  overflow-y: auto;
}

.bar {
  transform: translateX(273px) rotate(90deg);
}

.close {
  transform: translateX(273px) rotate(-90deg);
}

.bar img {
  transition: all 0.5s linear;
}

.close img {
  transition: all 0.5s linear;
}
</style>
