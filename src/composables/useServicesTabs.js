import { ref } from 'vue'

const activeTab = ref('home')

export function useServicesTabs() {

    const setActiveTab = (tab) => {

        activeTab.value = tab

    }

    return {

        activeTab,

        setActiveTab

    }

}