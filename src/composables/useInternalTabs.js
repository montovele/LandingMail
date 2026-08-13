import { ref } from 'vue'

// Estado SEPARADO para las tabs internas dentro de LandingHome
const internalTab = ref('consultoria')

export function useInternalTabs() {
    const setInternalTab = (tab) => {
        internalTab.value = tab
    }

    return {
        internalTab,
        setInternalTab
    }
}
