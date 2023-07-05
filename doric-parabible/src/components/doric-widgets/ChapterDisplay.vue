<script setup lang="ts">
import { watch, ref, computed } from "vue"
import { useDoricOutput, useDoricInput } from 'doric-framework';
import VerseText from "./helpers/VerseText.vue"
import ReferenceParser from "referenceparser"
const rp = new ReferenceParser()

const setActiveWord = useDoricOutput("activeWord")

const passageReference = useDoricInput("passageReference")
const activeModules = useDoricInput("activeModules")
const actualModules = computed(() => {
    if (activeModules.value) {
        return JSON.parse(activeModules.value)
    }
    return []
})
const queryUrl = computed(() => {
    if (!passageReference.value || !actualModules.value) {
        return ""
    }
    const reference = rp.parse(passageReference.value)
    if (!reference) {
        return ""
    }
    const endpoint = "https://dev.parabible.com/api/v2/text"
    const query = new URLSearchParams({
        modules: actualModules.value.map((m: { abbreviation: string }) => m.abbreviation).join(","),
        reference: `${reference.book}${reference.chapter ? reference.chapter : 1}`
    })
    return `${endpoint}?${query.toString()}`
})

type MatchingText = {
    moduleId: number
    parallelId: number
    rid: number
    text: string
}
type TextResponse = {
    matchingText: MatchingText[]
    order: number[]
}
const matchingText = ref<MatchingText[]>([])
const order = ref<number[]>([])
const getMatchingTextFromOrderPid = (orderPid: number, moduleId: number) => {
    return matchingText.value.find((t: MatchingText) => t.parallelId === orderPid && t.moduleId === moduleId)
}

watch(queryUrl, () => {
    console.log("passageReference or activeModules changed")
    console.log(passageReference.value)
    console.log(activeModules.value)
    console.log(queryUrl.value)

    fetch(queryUrl.value).then(response => response.json()).then((result: TextResponse) => {
        matchingText.value = result.matchingText
        order.value = result.order
    }).catch(error => {
        console.error(error)
    })
})
const modulesWithContent = computed(() => {
    return actualModules.value.filter((m: { moduleId: number }) =>
        matchingText.value?.some((t) => t.moduleId === m.moduleId)
    )
})

const setActiveWordWithModuleId = (moduleId: number, wid: number) => {
    setActiveWord(JSON.stringify({ moduleId, wid }))
}

</script>

<template>
    <table style="table-layout: fixed; width: 100%;">
        <thead>
            <tr>
                <th v-for="m in modulesWithContent" :key="m.moduleId">{{ m.abbreviation }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pid in order" :key="pid">
                <td v-for="m in modulesWithContent" :key="m.moduleId">
                    <VerseText v-if="getMatchingTextFromOrderPid(pid, m.moduleId)?.text"
                        :text="getMatchingTextFromOrderPid(pid, m.moduleId)?.text || ''"
                        @activeWord="wid => setActiveWordWithModuleId(m.moduleId, wid)" />
                    <div v-else>none</div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
tbody tr:hover {
    background-color: #f8f8f8;
}

td {
    padding: 0.5rem;
}
</style>