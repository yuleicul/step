<script setup>
defineProps({
  value: String,
});
</script>

<template>
  <p class="timestamp">{{ value }}</p>
</template>

<style>
.timestamp {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  position: relative;
  top: -13px;
}
</style>
