<script>
import IconCaretDown from "@/components/IconCaretDown";
import IconLogout from "@/components/IconLogout";
import useDropdown from "@/hooks/useDropdown";
import { onClickOutside } from "@vueuse/core";
import { inject } from 'vue'

export default {
  name: "AppHeader",
  components: {
    IconCaretDown,
    IconLogout
  },
  emits: ['toggle-sidebar'],
  setup() {
    const {open, toggleDropdown, dropdownTarget, closeDropdown} = useDropdown()
    onClickOutside(dropdownTarget, () => closeDropdown())
    const sidebarOpen = inject('sidebarOpen')
    const toggleSidebar = inject('toggleSidebar')
    return {
      open,
      closeDropdown,
      dropdownTarget,
      toggleDropdown,
      sidebarOpen,
      toggleSidebar
    }
  }
}
</script>

<template>

  <nav class="nav">
    <div class="nav__burger" :class="{'open' : sidebarOpen}" @click="toggleSidebar">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="nav__brand">
      <a href="#">
        <div class="nav__brand-logo">LOGO</div>
      </a>
    </div>

    <div class="nav__menu">
      <a class="nav__link" href="#">Test Link</a>
      <!--      <a class="nav__link nav__link&#45;&#45;active" href="#">Test Link Active</a>-->

      <div class="nav__dropdown">
        <div class="nav__dropdown-toggler" @click="toggleDropdown" ref="dropdownTarget">
          <img src="https://ui-avatars.com/api/?name=John Doe&size=40&background=random&color=fff"
               class="nav__avatar"/>
          <span class="nav__user">John Doe</span>
          <icon-caret-down class="nav__dropdown-caret"/>
        </div>
        <transition name="nav-dropdown">
          <div class="nav__dropdown-menu" v-if="open">
            <a href="#" class="nav__link">
              <icon-logout class="nav__icon--logout"/>
              <span>Logout</span>
            </a>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  padding: .5rem 1.5rem;
  align-items: center;
  background: var(--color-primary);
  position: relative;
  z-index: 101;
  box-shadow: var(--shadow-md)
}

.nav__burger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: var(--transition-default);
  border-radius: var(--rounded-full);

}

.nav__burger div {
  content: "";
  width: 100%;
  height: 0.175rem;
  display: block;
  background-color: var(--color-white);
  border-radius: 1rem;
  transition: var(--transition-default);
}

.nav__burger.open div:first-child {
  transform: translateY(7px) rotate(-45deg);
}

.nav__burger.open div:nth-child(2) {
  transform: translateX(-10px);
  opacity: 0;
}

.nav__burger.open div:last-child {
  transform: translateY(-9px) rotate(45deg);
}

.nav__brand {
  margin-left: 2rem;

}

.nav__brand a {
  text-decoration: none;
}

.nav__brand-logo {
  max-width: 150px;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.5rem;
  color: var(--color-white);
}

.nav__menu {
  display: flex;
  flex-direction: row;
  margin-left: auto;
  align-items: center;

}

.nav__link {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--color-white);
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0 .25rem;
  border-radius: 5px;
  transition: var(--transition-default);
}

.nav__link--active {
  background: var(--color-primary-dark);
}

.nav__link:hover {
  background: var(--color-primary-dark);
}

.nav__dropdown {
  position: relative;
}

.nav__dropdown-toggler {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.nav__user {
  margin-left: 0.5rem;
  color: var(--color-white);
}


.nav__avatar {
  border-radius: var(--rounded-full);
  width: 40px;
  height: 40px;
}

.nav__icon--logout {
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
}

.nav__dropdown-caret {
  color: var(--color-white);
  height: 1rem;
  width: 1rem;
  margin-left: .5rem;
}

.nav__dropdown-menu {
  display: flex;
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  background-color: var(--color-white);
  border-radius: 3px;
  box-shadow: var(--shadow-md);
}

.nav__dropdown-menu .nav__link {
  color: var(--color-gray-dark);
  margin: 0;
  width: 100%;
}

.nav__dropdown-menu:hover .nav__link {
  background-color: var(--color-gray-light);
  color: var(--color-gray-dark);
  transition: var(--transition-default);
}

.nav-dropdown-enter-active,
.nav-dropdown-leave-active {
  transition: var(--transition-default);
}

.nav-dropdown-enter-from,
.nav-dropdown-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.nav-dropdown-enter-to,
.nav-dropdown-leave-from {
  transform: translateY(0);
  opacity: 1;
}


@media (max-width: 991px) {
  .nav {
    padding: 0.5rem 1rem;
  }

  .nav__burger div {
    height: 0.20rem;
  }

  .nav__user {
    display: none;
  }

  .nav__brand {
    margin-left: 1rem;
  }

  .nav__brand-logo {
    letter-spacing: 0.25rem;
  }

  .nav__dropdown-menu {
    left: -80%;
    width: auto;
  }

  .nav__dropdown-menu .nav__link {
    width: auto;
  }
}
</style>