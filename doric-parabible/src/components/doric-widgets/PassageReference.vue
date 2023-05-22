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

const refToString = (ref) => {
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
    const ref = rp.parse(passageReference.value)
    return ref ? refToString(ref) : ""
})

const submit = (event: Event) => {
    const ref = rp.parse(passageReference.value)
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
        <input type="text" v-model="passageReference.value" @keydown.enter="submit" />
        <button @click="submit">Go!</button>
    </div>
    <div>{{ impliedReference }}</div>
</template>