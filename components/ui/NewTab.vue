<template>
  <div
    class="shadow-md h-full"
    :class="{
      'flex space-x-4': variant === 'horizontal',
    }"
  >
    <ul
      class="list-none bg-white text-center overflow-auto whitespace-nowrap"
      :class="{
        'flex items-center': variant === 'vertical',
      }"
    >
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="w-full px-4 py-1.5"
        :class="{
          active: index + 1 === activeTab,
        }"
      >
        <div v-if="isStringTab">
          <label
            :for="`${_uid}${index}`"
            v-text="tab"
            class="cursor-pointer block tab-label"
            :class="{ textActive: index + 1 === activeTab }"
          />
          <input
            :id="`${_uid}${index}`"
            type="radio"
            :name="`${_uid}-tab`"
            :value="index + 1"
            v-model="activeTab"
            class="hidden"
          />
        </div>
        <div v-else>
          <label
            :for="`${_uid}${index}`"
            class="cursor-pointer block tab-label flex items-center"
            :class="{ textActive: index + 1 === activeTab }"
            ><img v-if="tab.icon !== ''" :src="getImgUrl(tab.icon)" alt="" class="pr-2" />
            {{ tab.tab }}</label
          >
          <input
            :id="`${_uid}${index}`"
            type="radio"
            :name="`${_uid}-tab`"
            :value="index + 1"
            v-model="activeTab"
            class="hidden"
          />
        </div>
      </li>
    </ul>
    <template v-for="(tab, index) in tabs">
      <div
        :key="index"
        v-if="index + 1 === activeTab"
        class="flex-grow bg-white p-4"
      >
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      required: false,
      default: () => 'horizontal',
      validator: (value) => ['horizontal', 'vertical'].includes(value),
    },
  },
  data() {
    return {
      activeTab: 1,
      isStringTab: true,
    }
  },
  methods: {
    typeofTabs(tab) {
      if (typeof tab === 'object') {
        this.isStringTab = false
      }
    },

    getImgUrl(pic) {
      return require(`../../assets/icons/${pic}`)
    },
  },
  mounted() {
    this.typeofTabs(this.$props.tabs[0])
  },
}
</script>

<style scoped>
.active {
  border-bottom: 1px solid #023a59;
  color: #023a59;
}

li {
  font-family: BR Sonoma;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
  color: #c4c4c4;
}
</style>
