<template>
  <div>
    <h1>{{ title.text }} with {{ title.level }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Title } from './TestComponent'

export default defineComponent({
  setup() {
    const title: Title = {
      text: 'TestComponent',
      level: 1,
    }

    return { title }
  },
})
</script>

<style scoped></style>
