<script setup>
import { RouterView } from 'vue-router'
import Navbar from "@/shared/Navbar/Navbar.vue";
import Footer from "@/shared/Footer/Footer.vue";
</script>

<template>
    <Navbar/>
    <main class="w-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex-1 pt-12">
        <RouterView v-slot="{Component}">
            <KeepAlive>
                <Component :is="Component"/>
            </KeepAlive>
        </RouterView>
    </main>
    <Footer/>
</template>