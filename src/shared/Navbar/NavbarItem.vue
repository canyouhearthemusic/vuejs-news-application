<script setup>
const props = defineProps({
    navigationItems: Array,
    viewName: String
});
</script>

<template>
    <RouterLink :to="{name: viewName}" class="capitalize rounded-md px-3 py-2 text-sm font-medium">
        <slot />
    </RouterLink>
</template>
