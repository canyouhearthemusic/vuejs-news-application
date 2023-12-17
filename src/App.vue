<script setup>
import { RouterView, useRoute } from 'vue-router'
import Navbar from "@/shared/Navbar/Navbar.vue";
import Footer from "@/shared/Footer/Footer.vue";
import { computed } from "vue";

const route = useRoute();
const isNewsView = computed(() => route.name === 'news');
</script>

<template>
    <Navbar/>
    <main class="w-full mx-auto grow">
        <RouterView v-slot="{Component}">
            <template v-if="!isNewsView">
                <KeepAlive>
                    <Component :is="Component"/>
                </KeepAlive>
            </template>
            <template v-else>
                <Component :is="Component"/>
            </template>
        </RouterView>
    </main>
    <Footer/>
</template>