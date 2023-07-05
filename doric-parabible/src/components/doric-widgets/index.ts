import ActiveModules from "@/components/doric-widgets/ActiveModules.vue"
import ChapterDisplay from "@/components/doric-widgets/ChapterDisplay.vue"
import PassageReference from "@/components/doric-widgets/PassageReference.vue"
import WordInfo from "@/components/doric-widgets/WordInfo.vue"

export default {
    "active-modules": {
        defaultLabel: "Active Modules",
        widget: ActiveModules,
    },
    "chapter-display": {
        defaultLabel: "Chapter Display",
        widget: ChapterDisplay,
    },
    "passage-reference": {
        defaultLabel: "Passage Reference",
        widget: PassageReference,
    },
    "word-info": {
        defaultLabel: "Word Info",
        widget: WordInfo,
    },
}