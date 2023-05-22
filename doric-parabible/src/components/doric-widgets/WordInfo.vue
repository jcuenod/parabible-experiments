<script setup lang="ts">
import { watch, ref } from "vue"
const props = defineProps({
    useDoricInput: {
        type: Function,
        required: true,
    }
})
const activeWord = props.useDoricInput("activeWord")

type WordFeature = {
    [key: string]: string
}
const wordFeatures = ref<WordFeature[]>([])

const STATE = {
    INITIAL: "initial",
    LOADING: "loading",
    LOADED: "loaded",
    ERROR: "error",
}
const state = ref(STATE.INITIAL)

watch(() => activeWord.value, () => {
    const { wid, moduleId } = JSON.parse(activeWord.value)
    if (wid && moduleId) {
        console.log(`wid: ${wid}, moduleId: ${moduleId}`)
    }
    state.value = STATE.LOADING
    fetch(`https://dev.parabible.com/api/v2/word?wid=${wid}&moduleId=${moduleId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            wordFeatures.value = data.data
            state.value = STATE.LOADED
        })
        .catch(error => {
            console.error(error)
            state.value = STATE.ERROR
        })
})
</script>

<template>
    <div>
        <div v-if="state === STATE.INITIAL">Select a word</div>
        <div v-else-if="state === STATE.LOADING">Loading...</div>
        <div v-else-if="state === STATE.ERROR">Error</div>
        <div v-else-if="state === STATE.LOADED">
            <table>
                <tr v-for="word in wordFeatures" :key="word.wid">
                    <td>{{ word.key }}</td>
                    <td>{{ word.value }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>