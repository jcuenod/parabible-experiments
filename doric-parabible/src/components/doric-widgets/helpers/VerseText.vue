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

type WordArray = {
    wid: number,
    leader: string,
    text: string,
    trailer: string,
}[]

const htmlString = ref("")
const jsonString = ref<WordArray>([])

const parsePropText = (text: string) => {
    try {
        const parsed = JSON.parse(text)
        parsed as WordArray
        jsonString.value = parsed
        htmlString.value = ""
        console.log(parsed)
    }
    catch (error) {
        htmlString.value = text
        jsonString.value = []
        console.log(text)
    }
}

watch(() => props.text, () => {
    parsePropText(props.text)
})

parsePropText(props.text)
</script>

<template>
    <div>
        <div v-if="htmlString" v-html="htmlString"></div>
        <div v-else>
            <template v-for="word in jsonString" :key="word.wid">
                {{ word.leader }}
                <button class="word" @click="emit('activeWord', word.wid)">{{ word.text }}</button>
                {{ word.trailer }}
            </template>
        </div>
    </div>
</template>

<style scoped>
.word:hover {
    /* subtle, muted blue */
    color: #3b82f6;
}
</style>