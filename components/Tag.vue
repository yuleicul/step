<script setup>
defineProps({
  value: String,
  variant: String,
});
</script>

<template>
  <div :class="'tag ' + (variant || 'default')" title="Time spent">
    <span class="undisplayed">(</span>
    <span v-if="!variant">+</span>
    <span class="hour">{{ value }}</span>
    <span class="undisplayed">)</span>
  </div>
</template>

<style>
.tag {
  display: inline-block;
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  margin-left: 4px;
  margin-bottom: 4px;
  padding: 2px 8px 2px 8px;
  border-radius: 8px;
  vertical-align: middle;
}
.tag.brand {
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}
.tag.default {
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}
.tag.red {
  background-color: var(--vp-badge-danger-text);
  color: var(--vp-c-bg);
}
.undisplayed {
  /* Hack: this is for showing on the outline */
  display: none;
}
.hour {
  margin: 0 3px;
}
</style>
