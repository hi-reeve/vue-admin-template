<script>
import { computed, provide, toRefs } from 'vue'
import Sidebar from "@/components/AppSidebar";
import AppHeader from "@/components/AppHeader";
import useSidebar from "@/hooks/useSidebar";

export default {
  name: 'App',
  components: {
    AppHeader,
    Sidebar
  },
  setup() {
    const {state, toggleSidebar} = useSidebar()
    provide('sidebarOpen', computed(() => state.open))
    provide('toggleSidebar', toggleSidebar)
    return {
      toggleSidebar,
      ...toRefs(state)
    }

  }
}
</script>

<template>
  <div>
    <app-header/>

    <sidebar @close-sidebar="open = false" :open="open"/>

    <div class="layout-content " :class="{
        'layout-content--open' : open
      }">
      <!--  this supposed to be router view component if using vue-router      -->
      Dashboard Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus eaque eum explicabo in
      ipsum iste maiores maxime quis sed, sequi, ut? Amet ea ex, impedit maxime nobis numquam pariatur.
    </div>
  </div>
</template>

<style>

:root {
  --color-white: #FFFFFF;
  --color-primary: #0772B3;
  --color-primary-dark: #004783;
  --color-primary-light: #57a0e5;
  --color-gray-dark: rgba(0, 0, 0, .84);
  --color-gray-light: rgba(0, 0, 0, .16);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --rounded-full: 9999px;
  --transition-default: all .3s ease-in-out;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  font-family: Lato, sans-serif;
}

.layout-wrapper {
  display: flex;
  flex-direction: row;
  position: relative;
}

.layout-content {
  margin-left: 0;
  padding: 2rem;
  transition: all .3s ease-in-out;
  position: relative;
  z-index: 0;
}

.layout-content--open {
  margin-left: 16vw;
  width: 100%;
  max-width: calc(100vw - (20vw + 1.5rem * 4));
}

@media (max-width: 991px) {
  .layout-content--open {
    margin-left: 0;
    width: auto;
    max-width: 100%;
  }
}
</style>