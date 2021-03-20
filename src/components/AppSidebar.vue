<script lang="ts">
import { defineComponent } from 'vue'
import IconHome from "./IconHome.vue";
import SidebarCollapsible from "./SidebarCollapsible.vue";

export default defineComponent({
  name: "Sidebar",
  components: {SidebarCollapsible, IconHome},
  emits: ['close-sidebar'],
  props: {
    open: {
      type: Boolean,
      default: true,
    }
  },
  setup() {
    const collapsibleMenuA = [
      {
        label: "Manage A 1",
        link: "#"
      },
      {
        label: "Manage A 2",
        link: "#"
      },
      {
        label: "Manage A 3",
        link: "#"
      }
    ]
    return {
      collapsibleMenuA
    }
  }
})
</script>

<template>
    <div class="sidebar" :class="{'open' : open}">
      <div class="sidebar__section">
        <span class="sidebar__section-title">Pages</span>
        <a href="#" class="sidebar__link sidebar__link--active">
          <icon-home class="sidebar__link-icon"/>
          <span>Dashboard</span>
        </a>
        <sidebar-collapsible :collapsible-menu="collapsibleMenuA" collapsibleLabel="Manage A"  collapsibleIcon="IconHome"/>
        <a href="#" class="sidebar__link">
          <icon-home class="sidebar__link-icon"/>
          <span>Manage B</span>
        </a>
      </div>
      <div class="sidebar__section">
        <span class="sidebar__section-title">Section 2</span>
        <a href="#" class="sidebar__link">
          <icon-home class="sidebar__link-icon"/>
          <span>Manage C</span>
        </a>
        <a href="#" class="sidebar__link">
          <icon-home class="sidebar__link-icon"/>
          <span>Manage D</span>
        </a>
        <a href="#" class="sidebar__link">
          <icon-home class="sidebar__link-icon"/>
          <span>Manage E</span>
        </a>
      </div>

    </div>
    <div class="sidebar__overlay" @click="$emit('close-sidebar')" v-if="open"></div>

</template>

<style>
.sidebar {
  display: flex;
  background-color: var(--color-white);
  flex-direction: column;
  max-width: calc(20vw - (1.5rem * 4));
  box-shadow: var(--shadow-md);
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 56px;
  transform: translateX(-20vw);
  z-index: 100;
  transition: var(--transition-default);
  overflow: auto;
  padding: 1rem;
}

.sidebar.open {
  transform: translateX(0);

}

.sidebar__section {
  margin-bottom: 1rem;
}

.sidebar__section-title {
  color: var(--color-gray-dark);
  font-weight: bold;
  margin-bottom: 1rem;
  display: block;
}


.sidebar__link {
  text-decoration: none;
  color: var(--color-gray-dark);
  transition: var(--transition-default);
  padding: .5rem 1rem .5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.sidebar__link--active {
  color: var(--color-primary);
  background : var(--color-gray-light);
}

.sidebar__link-icon {
  width: 1rem;
  height: 1rem;
  margin-right: .5rem;
}

.sidebar__link:hover {
  background-color: var(--color-gray-light);
}

.sidebar__collapsible {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.sidebar__collapsible-toggler {
  display: flex;
  align-items: center;
  transition: var(--transition-default);
  padding: .5rem 1rem .5rem 1rem;
}

.sidebar__collapsible-toggler:hover {
  background-color: var(--color-gray-light);
}

.sidebar__collapsible-caret {
  width: .75rem;
  height: .75rem;
  margin-left: auto;
}


.sidebar__collapsible-menu .sidebar__link {
  margin-left: 2rem;
}

@media screen and (max-width: 991px) {
  .sidebar {
    max-width: 30vw;
    top: 56px;
    transform: translateX(-80vw);
  }

  .sidebar.open + .sidebar__overlay {
    display: block;
    z-index: 99;
    position: fixed;
    top: 56px;
    left: 0;
    background-color: var(--color-gray-dark);
    opacity: 0.8;
    width: 100vw;
    height: 100vh;
  }
}

@media screen and (max-width: 525px) {
  .sidebar {
    max-width: 60vw;
  }
}
</style>