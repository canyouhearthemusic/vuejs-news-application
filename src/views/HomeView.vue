<script setup>
import InputSearch from "@/components/Inputs/InputSearch.vue";
import NewsCard from "@/components/News/NewsCard.vue";
import { useFetch } from '@vueuse/core'
import { useApiStore } from "@/stores/api.js";
import { onMounted, reactive, ref } from "vue";
import useSlug from "@/composables/useSlug.js";

let { everything, topHeadlines, topHeadlinesWithSources } = useApiStore();

const { data, isFetching, error } = await useFetch(topHeadlines);

let posts = JSON.parse(data.value);
</script>

<template>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The latest big news</h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">Just type in the text-field below.</p>
            <div class="flex justify-center">
                <div class="relative mt-6 flex items-center w-96">
                    <InputSearch/>
                </div>
            </div>
        </div>
    </div>

    <div class="mx-auto mt-14 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <h1 v-if="isFetching" class="text-6xl">asd</h1>
        <NewsCard v-for="post in posts.articles" :key="post.id" :post="post"/>
    </div>
</template>