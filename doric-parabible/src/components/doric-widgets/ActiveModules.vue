<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useDoricOutput, useDoricInput } from 'doric-framework';

const setActiveModules = useDoricOutput("activeModules")
const activeModules = useDoricInput("activeModules")
const activeModulesObj = computed(() => {
    if (activeModules.value) {
        return JSON.parse(activeModules.value)
    }
    return []
})

type Module = {
    moduleId: number,
    abbreviation: string,
}
const availableModules = ref<Module[]>([])
// const activeModules = ref<string[]>([])

onMounted(() => {
    fetch("https://dev.parabible.com/api/v2/module")
        .then(response => response.json())
        .then(modules => {
            availableModules.value = modules.data
            console.log(modules)
        })

})

const isSelected = (module: Module) => {
    return activeModulesObj.value.some((m: Module) => m.moduleId === module.moduleId)
}

const handleSelectionChange = (event: Event) => {
    const target = event.target as HTMLSelectElement
    const selected = Array.from(target.selectedOptions).map(option => option.value)
    const newActive = availableModules.value.filter((module: Module) => {
        return selected.includes(module.abbreviation)
    })
    setActiveModules(JSON.stringify(newActive))
}
</script>

<template>
    <div>
        <!-- multi select -->
        <select multiple @change="handleSelectionChange">
            <option v-for="module in availableModules" :key="module.moduleId" :value="module.abbreviation"
                :selected="isSelected(module)">
                {{ module.abbreviation }}
            </option>
        </select>
    </div>
</template>