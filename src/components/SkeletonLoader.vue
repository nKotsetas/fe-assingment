<template>
  <div class="skeleton-loader" :class="{ fullHeight }">
    <div
      v-if="type === 'temperature'"
      class="skeleton-line-wrapper temperature"
    >
      <div class="skeleton skeleton-header"></div>
      <div class="skeleton skeleton-line"></div>
      <div class="skeleton skeleton-card"></div>
    </div>

    <div v-else-if="type === 'cards'" class="skeleton-card-wrapper">
      <div
        v-for="index in cardCount"
        :key="index"
        class="skeleton skeleton-card"
      ></div>
    </div>

    <div v-if="type === 'chart'" class="skeleton-line-wrapper chart">
      <div class="skeleton skeleton-header"></div>

      <div class="skeleton skeleton-card"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  type: {
    type: String,
    default: "lines",
  },
  cardCount: {
    type: Number,
    default: 6,
  },
  fullHeight: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.skeleton-loader {
  display: flex;

  flex-direction: column;
  gap: 10px;
  padding: 20px;

  background-color: #fff;

  .skeleton {
    background: linear-gradient(90deg, #e0e0e0 25%, #f1f1f1 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px;

    &.skeleton-header {
      width: 60%;
      height: 20px;
    }

    &.skeleton-line {
      width: 80%;
      height: 15px;
    }

    &.skeleton-card {
      width: 100px;
      height: 120px;
      border-radius: 10px;
      padding: 25px;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  .skeleton-card-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  .skeleton-line-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &.temperature {
      display: flex;
      flex-direction: column;
      .skeleton-card {
        margin-left: auto;
      }
    }

    &.chart {
      .skeleton-card {
        width: 80%;
        height: 200px;
      }
    }
  }

  &.fullHeight {
    height: 100%;
  }
}
</style>
