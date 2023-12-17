<script setup>
import { ref } from 'vue'
import Table from "@/components/Table.vue";

const stats = [
    { label: 'Vue.js', value: 'vuejslogo.png' },
    { label: 'Pinia', value: 'pinialogo.svg' },
    { label: 'TailwindCSS', value: 'tailwindlogo.svg' },
];

const mobileMenuOpen = ref(false)
</script>

<template>
    <div class="bg-gray-900 w-full px-6 pb-8 md:min-h-screen rounded-b-xl">
        <!-- Header -->
        <main class="relative isolate">
            <!-- Background -->
            <div class="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                 aria-hidden="true">
                <div
                    class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                    style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"/>
            </div>

            <!-- Header section -->
            <div class="px-6 lg:px-8">
                <div class="mx-auto max-w-2xl pt-20 text-center sm:pt-20">
                    <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl capitalize">About this
                        project</h2>
                </div>
            </div>

            <!-- Content section -->
            <div class="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div
                        class="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                        <div>
                            <p>News is the lifeblood of our modern world, keeping us informed and connected. But with
                                the sheer volume of information out there, staying on top of it all can feel
                                overwhelming. This is where your NewsAPI Frontend comes in, offering a sleek and
                                powerful platform to navigate the news landscape with ease.

                                Built with the latest web development advancements, your project boasts a powerful
                                stack.
                            </p>
                            <p class="mt-8"><strong>VueJS 3 Composition API:</strong> This modern approach gives you the flexibility and clarity to build expressive and maintainable user interfaces.</p>
                        </div>
                        <div>
                            <p><strong>Vue-Router:</strong> Say goodbye to clunky navigation! Vue-Router ensures seamless transitions between news categories and articles, offering a smooth and responsive experience.
                            </p>
                            <p class="mt-4"><strong>Pinia Store Management:</strong> Keep your data organized and centralized with Pinia. It streamlines state management, making your app reactive and efficient.
                            </p>
                            <p class="mt-4"><strong>TailwindCSS:</strong> Tailwind's utility-first approach empowers you to design stunning and customizable interfaces without getting bogged down in complex CSS.
                            </p>
                        </div>
                    </div>
                    <dl class="mt-16 flex justify-center gap-x-8 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                        <div v-for="(stat, statIdx) in stats" :key="statIdx"
                             class="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                            <img :src="`../../public/${stat.value}`" alt="" style="width: 75px; height: 75px">
                        </div>
                    </dl>
                    <Table />
                </div>
            </div>
        </main>
    </div>
</template>