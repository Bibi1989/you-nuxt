<template>
  <div class="grid grid-cols-4 items-center border-b">
    <div>
      <div class="card-plus flex items-center justify-center">
        <img src="~assets/icons/plus.svg" alt="" />
      </div>
    </div>
    <div class="col-span-3 card-detail">
      <p class="card-detail__name">{{ task.name }}</p>
      <p class="card-detail__address">{{ task.address }}</p>
      <p class="card-detail__bank">{{ task.bank }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
    },
  },
}
</script>

<style scoped>
.card-plus {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #46b2c8;
}

.card-detail {
  padding: 18px 20px 8px 8px;
}

.card-detail__name {
  font-family: BR Sonoma;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: #000000;
}

.card-detail__address {
  font-family: BR Sonoma;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: #acb6be;
}

.card-detail__bank {
  font-family: BR Sonoma;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: #acb6be;
}
</style>
