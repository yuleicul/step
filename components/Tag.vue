<script setup>
defineProps({
  value: String,
  variant: String,
})
</script>

<template>
  <div :class="'tag ' + (variant === 'total' ? 'default' : 'outline')">
    <span v-if="variant !== 'total'">+</span>
    {{ value }}
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
.tag.default {
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}
.tag.outline {
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}
</style>
