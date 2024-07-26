<script setup lang="ts">
import { ref } from "vue"

const count = ref(0)

function increase() {
  count.value += 1
}
</script>

<template>
  <main class="flex flex-col justify-center items-center">
    <img src="/logo.png" alt="Chrome Extension Vue Logo" width="128" height="128">
    <p class="font-bold text-4xl">
      Hello Vue 3!
    </p>
    <button @click="increase">
      count: {{ count }}
    </button>
  </main>
</template>
