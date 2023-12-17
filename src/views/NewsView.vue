<script setup>
import { useRoute } from "vue-router";
import { onDeactivated, ref } from "vue";
import Layout from "@/shared/Layout.vue";

let route = useRoute();
let post = ref({});
post.value = JSON.parse(route.params.post);

onDeactivated(() => {
    post.value = {};
});

</script>

<template>
    <Layout>
        <div class="bg-white py-12 sm:pt-20 sm:pb-15 sm:px-10 rounded-xl">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:pr-4">
                        <div
                            class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <img class="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                                 :src="post.urlToImage === '' ? '../../public/not_found.jpg' : post.urlToImage" alt=""
                            />
                            <div class="absolute inset-0 bg-gray-900 mix-blend-multiply"/>
                            <div
                                class="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                                aria-hidden="true">
                                <div
                                    class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
                            </div>
                            <figure class="relative isolate">
                                <blockquote class="mt-6 text-xl font-semibold leading-8 text-white">
                                    <p>{{ post.title }}</p>
                                </blockquote>
                                <figcaption class="mt-6 text-sm leading-6 text-gray-300"><strong
                                    class="font-semibold text-white">{{ post.author }} • </strong>
                                    <i>Source by: {{ post.source.name }}</i></figcaption>
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
                            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {{ post.title }}
                            </h1>
                            <div class="max-w-xl">
                                <p class="mt-6">
                                    {{ post.description }}
                                </p>
                                <p class="mt-8">
                                    {{ post.content }}
                                </p>
                            </div>
                        </div>
                        <div class="mt-10 flex">
                            <a :href="post.url" class="text-base font-semibold leading-7 text-indigo-600">Learn more
                                from original source <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>