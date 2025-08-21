<script setup lang="ts">
import AppLeftPanel from '@/components/AppLeftPanel/AppLeftPanel.vue';
import AppPreviewer from '@/components/AppPreviewer/AppPreviewer.vue';
import AppRightPanel from '@/components/AppRightPanel/AppRightPanel.vue';

</script>

<template>
  <div class="layout-wrapper">
    <AppLeftPanel />
    <AppPreviewer />
    <AppRightPanel />
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>