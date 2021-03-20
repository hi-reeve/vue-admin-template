import { onMounted, reactive } from "vue";
import { useMediaQuery } from "@vueuse/core";

export default function useSidebar() {
    const state = reactive({
        open: true,
    });
    const toggleSidebar = () => state.open = !state.open
    const isLargeScreen = useMediaQuery('(min-width :992px)');

    onMounted(() => {
        if (!isLargeScreen.value)
            state.open = false;
    })
    return {
        state,
        toggleSidebar
    }

}