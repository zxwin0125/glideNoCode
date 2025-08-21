<script setup lang="ts">
import { ApplicationMenu, DataSheet, Lightning, Page, Share } from '@icon-park/vue-next';
import { computed, defineComponent, h } from 'vue';
import { useRoute, RouterLink } from 'vue-router';


const linkItems = [
  {
    value: 'dataSource',
    label: 'Data',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(0, 196, 83, 0.2) 0%, rgba(0, 196, 83, 0) 100%)`,
    color: 'rgb(0, 196, 83)',
    borderColor: 'radial-gradient(50% 50%, rgb(0, 196, 83) 0%, rgba(0, 196, 83, 0) 100%)'
  },
  {
    value: 'layout',
    label: 'Layout',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(24, 190, 212, 0.2) 0%, rgba(24, 190, 212, 0) 100%)`,
    color: 'rgb(24, 190, 212)',
    borderColor: 'radial-gradient(50% 50%, rgb(24, 190, 212) 0%, rgba(24, 190, 212, 0) 100%)'
  },
  {
    value: 'actions',
    label: 'Actions',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(241, 60, 11, 0.2) 0%, rgba(241, 60, 11, 0) 100%)`,
    color: 'rgb(241, 60, 11)',
    borderColor: 'radial-gradient(50% 50%, rgb(241, 60, 11) 0%, rgba(241, 60, 11, 0) 100%)'
  }
]

defineProps<{
  msg: string;
}>();

const route = useRoute();

const activeLink = computed(() => route.name);

const Icon = defineComponent({
  setup(props) {
    switch (props.type) {
      case 'dataSource':
        return () => h(DataSheet, { size: 16 })
      case 'layout':
        return () => h(Page, { size: 16 })
      case 'actions':
        return () => h(Lightning, { size: 16 })
      default:
        return () => h('div');
    }
  },
  props: {
    type: {
      type: String,
      required: true
    }
  }
});

</script>

<template>
  <div class="app-navigator">
    <div class="app-info-wrapper">
      <RouterLink class="icon-button" to="/o">
        <ApplicationMenu size="16" />
      </RouterLink>
      <div class="app-logo">
        <img src="https://functions.prod.internal.glideapps.com/getEmoji/%E2%9C%88%EF%B8%8F" alt="">
      </div>
      <h1 class="app-name">Vbuilder</h1>
    </div>
    <div class="app-navigator-link-wrapper">
      <RouterLink class="app-navigator-link-item" v-for="item in linkItems" :key="item.value" :to="`/app/${item.value}`"
        :style="activeLink === item.value && { background: item.bg }">
        <div :style="{
          lineHeight: 0.7,
          color: activeLink === item.value ? item.color : 'var(--color-gray-700)',
        }">
          <Icon :type="item.value" :active="activeLink === item.value" />
        </div>
        <span class="item-title">
          {{ item.label }}
        </span>
        <div class="item-border" :style="activeLink === item.value ? { background: item.borderColor } : {}"></div>
      </RouterLink>
    </div>
    <div class="app-setting-wrapper">
      <div class="common-btn">
        <Share />
        发布
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-navigator {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  box-shadow: rgb(0 0 0 / 8%) 0 1px 0;
}

.app-info-wrapper {
  width: 1000px;
  display: flex;
  place-items: center;
}

.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  margin-left: 10px;
  color: var(--color-gray-800);

  &:hover {
    background-color: var(--color-gray-200);
  }
}

.app-logo {
  width: 32px;
  height: 32px;
  margin: 10px 8px 10px 8px;
  border-radius: 8px;
  background-color: #3D6583;
}

.app-logo img {
  width: 100%;
  height: 100%;
  padding: 6px;
}

.app-name {
  color: var(--color-gray-900);
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-bolder);
}

.app-navigator-link-wrapper {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-self: stretch;
}

.app-navigator-link-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin: 0 24px;
  align-self: stretch;
  background-color: var(--color-white);
}

.item-title {
  margin-left: 5px;
  color: var(--color-gray-800);
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bold);
}

.item-border {
  position: absolute;
  bottom: -1px;
  height: 1px;
  width: 100%;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  --rgb-string: 21, 173, 193;
  opacity: 1;
}

.app-setting-wrapper {
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 18px;
  gap: 12px;
}

.common-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  border-radius: 8px;
  background-color: var(--color-black);
  color: var(--color-white);
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  user-select: none;
}

.debug-btn {
  box-shadow: var(--color-gray-300) 0 0 0 1px;
  background-color: var(--color-white);
  color: var(--color-black);
}

.debug-btn.debug {
  color: var(--color-primary);
  box-shadow: var(--color-primary) 0 0 0 1px;
}
</style>
