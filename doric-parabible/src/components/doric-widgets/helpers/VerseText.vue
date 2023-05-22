<script setup lang="ts">
import { emit } from 'process'
import { watch, ref } from 'vue'
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
})
const emit = defineEmits(["activeWord"])

const isHebrew = (text: string) => {
    const hebrew = /[\u0590-\u05FF\uFB1D-\uFB4F]/
    return hebrew.test(text)
}
const isGreek = (text: string) => {
    const greek = /[\u0370-\u03FF]/
    return greek.test(text)
}

type WordArray = {
    wid: number,
    leader: string,
    text: string,
    trailer: string,
}[]

type Language = "hebrew" | "greek" | "latinish"
const LANGUAGES: { [key: string]: Language } = {
    HEBREW: "hebrew",
    GREEK: "greek",
    LATINISH: "latinish",
}
const RtlLanguages = new Set([LANGUAGES.HEBREW])
const isRtl = (language: Language) => RtlLanguages.has(language)
const language = ref<Language>(LANGUAGES.LATINISH)
const htmlString = ref("")
const jsonString = ref<WordArray>([])

const parsePropText = (text: string) => {
    try {
        const parsed: WordArray = JSON.parse(text)
        jsonString.value = parsed
        htmlString.value = ""
        const t = parsed.map(({ leader, text, trailer }) => `${leader}${text}${trailer}`).join("")
        language.value = isHebrew(t)
            ? LANGUAGES.HEBREW
            : isGreek(text) ? LANGUAGES.GREEK : LANGUAGES.LATINISH
    }
    catch (error) {
        htmlString.value = text
        jsonString.value = []
        language.value = isHebrew(text)
            ? LANGUAGES.HEBREW
            : isGreek(text) ? LANGUAGES.GREEK : LANGUAGES.LATINISH
    }
}

watch(() => props.text, () => {
    parsePropText(props.text)
})

parsePropText(props.text)
</script>

<template>
    <div :class="language">
        <div v-if="htmlString" v-html="htmlString"></div>
        <div v-else>
            <template v-for="word in jsonString" :key="word.wid">{{ word.leader }}<button class="word"
                    @click="emit('activeWord', word.wid)">{{ word.text }}</button>{{ word.trailer }}</template>
        </div>
    </div>
</template>

<style scoped>
.hebrew {
    direction: rtl;
    font-family: SBL Biblit;
    font-size: 1.4rem;
}

.greek {
    font-family: SBL Biblit;
    font-size: 1.2rem;
}

.latinish {
    font-size: 1rem;
}

.word:hover {
    /* subtle, muted blue */
    color: #3b82f6;
}
</style>