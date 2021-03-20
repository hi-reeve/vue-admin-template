import { reactive,toRefs } from 'vue'


export default function useDropdown() {
    const state = reactive({
        open : false,
        dropdownTarget : null
    })

    const toggleDropdown = () => {
        state.open = !state.open
    }
    const closeDropdown = () => {
        state.open = false
    }


    return {
        ...toRefs(state),
        toggleDropdown,
        closeDropdown,
    }
}