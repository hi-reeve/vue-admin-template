<script>
import IconHome from "@/components/IconHome";
import IconCaretDown from "@/components/IconCaretDown";
import { ref } from 'vue'
import IconCaretUp from "@/components/IconCaretUp";

export default {
  name: "SidebarCollapsible",
  components: {IconCaretUp, IconCaretDown, IconHome},
  props: {
    collapsibleMenu: {
      type: [Array, Object],
      required: true,
    },
    collapsibleLabel: {
      type: String,
      required: true,
    },
    collapsibleIcon: {
      type: String,
    }
  },
  setup() {
    const open = ref(false)
    return {
      open
    }
  }
}
</script>

<template>
  <div class="sidebar__collapsible">
    <div class="sidebar__collapsible-toggler" @click="open = !open">

      <!--  better import global the icon this is just an example with imported locally icon    -->
      <component :is="collapsibleIcon" v-if="collapsibleIcon" class="sidebar__link-icon"/>
      <span>{{ collapsibleLabel }}</span>
      <icon-caret-down v-if="!open" class="sidebar__collapsible-caret"/>
      <icon-caret-up v-else class="sidebar__collapsible-caret" />
    </div>

    <div class="sidebar__collapsible-menu" v-if="open">
      <a href="#" class="sidebar__link">Manage A 1</a>
      <a href="#" class="sidebar__link">Manage A 2</a>
      <a href="#" class="sidebar__link">Manage A 3</a>
    </div>
  </div>

</template>
