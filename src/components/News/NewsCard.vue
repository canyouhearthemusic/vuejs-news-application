<script setup>
import moment from "moment";
import { computed, ref } from "vue";
import useSlug from "@/composables/useSlug.js";

const props = defineProps({
    post: Object
});

const datetime = computed(() => {
    return moment(props.post.publishedAt).format('lll')
});

const slug = ref(useSlug(props.post.title));
</script>

<template>
    <article
        class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <img :src="post.urlToImage ?? '../../../public/not_found.jpg'" :alt="post.urlToImage ?? '404'"
             class="absolute inset-0 -z-10 h-full w-full object-cover"/>
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"/>
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>

        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time class="mr-8">{{ datetime }}</time>
            <div class="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx="1" cy="1" r="1"/>
                </svg>
                {{ post.author }}
            </div>
        </div>
        <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
            <RouterLink
                :to="{
                    name: 'news',
                    params: {
                        slug,
                        post: JSON.stringify(post)
                    }
                }"
            >
                <span class="absolute inset-0"/>
                {{ post.title }}
            </RouterLink>
        </h3>
    </article>

</template>