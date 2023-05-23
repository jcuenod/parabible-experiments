<script setup lang="ts">
import { computed } from "vue"
import ReferenceParser from "referenceparser"
const rp = new ReferenceParser()
const props = defineProps({
    useDoricOutput: {
        type: Function,
        required: true,
    },
    useDoricInput: {
        type: Function,
        required: true,
    }
})
const setPassageReference = props.useDoricOutput("passageReference")
const passageReference = props.useDoricInput("passageReference")

type Reference = {
    book: string,
    chapter?: number,
    verse?: number,
}
const refToString = (ref: Reference) => {
    if (ref) {
        if (ref.verse) {
            return `${ref.book} ${ref.chapter}:${ref.verse}`
        }
        else if (ref.chapter) {
            return `${ref.book} ${ref.chapter}`
        }
        else
            return ref.book
    }
    return ""
}

const impliedReference = computed(() => {
    const ref = rp.parse(passageReference.value) as Reference
    return ref ? refToString(ref) : ""
})

const submit = (event: Event) => {
    const ref = rp.parse(passageReference.value) as Reference
    if (ref) {
        if (!ref.verse) {
            ref.verse = 1
        }
        if (!ref.chapter) {
            ref.chapter = 1
        }
        console.log(refToString(ref))
        setPassageReference(refToString(ref))
    }
    else {
        console.warn("No reference parsed")
        console.warn(ref)
    }
}
</script>

<template>
    <div>
        <input
            class="block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500"
            type="text" v-model="passageReference.value" @keydown.enter="submit" placeholder="Enter a reference" />
    </div>
    <div class="mt-2 text-gray-400 uppercase text-xs font-bold">{{ impliedReference || "..." }}</div>
</template>