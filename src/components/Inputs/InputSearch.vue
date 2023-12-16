<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline/index.js";
</script>

<template>
    <input type="text" name="q" id="q"
           class="block w-full rounded-full border-0 py-2 pl-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:italic focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           placeholder="E.g. Elon Musk"
    />

    <div class="absolute inset-y-0.5 left-4 flex py-1.5 pr-1.5">
        <MagnifyingGlassIcon
            class="inline-flex items-center w-6 h-6 text-xs text-gray-400">Search</MagnifyingGlassIcon>
    </div>
</template>