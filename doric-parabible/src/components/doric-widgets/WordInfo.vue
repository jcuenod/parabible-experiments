<script setup lang="ts">
import { watch, ref } from "vue"
import { features, values } from "@/assets/features.json"
import { isInteger } from "lodash-es"

type FeatureKey = { key: string, value: string, enum: boolean }
type FeatureValue = { feature: string, key: string, value: string }
const friendlyKey = (key: string) => {
    const feature = features.find((f: FeatureKey) => f?.key === key)
    return feature ? feature.value : key
}
const friendlyValue = (key: string, value: string) => {
    const feature = features.find((f: FeatureKey) => f?.key === key)
    if (feature?.enum) {
        return values.find((v: FeatureValue) => v.feature === key && v.key === value)?.value || value
    }
    return value
}

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
    if (!isInteger(wid) || !isInteger(moduleId)) {
        console.error("WordInfo: activeWord is not a valid word")
        return
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
                    <td>{{ friendlyKey(word.key) }}</td>
                    <td>{{ friendlyValue(word.key, word.value) }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
table {
    width: 100%;
}

tr:hover {
    background-color: #eee;
}

td {
    padding: 0.2rem 0.5rem;
}
</style>