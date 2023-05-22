<script setup lang="ts">
import { ref } from 'vue'
import { DoricFramework } from 'doric-framework'
import "doric-framework/dist/style.css"
import widgets from '@/components/doric-widgets/Widgets'
const workspace = ref([[
  { type: "passage-reference" }, { type: "active-modules" }],
[{ type: "chapter-display" }],
[{ type: "word-info" }]
])

</script>

<template>
  <div id="app">
    <DoricFramework :widgets="widgets" :workspace="workspace" :initial-state="[]" />
  </div>
</template>

<style scoped>
div {
  height: 100vh;
}
</style>