<script setup>
import { useFetch } from '@vueuse/core'
import { useApiStore } from "@/stores/api.js";
import NewsCard from "@/components/News/NewsCard.vue";
import InputSearch from "@/components/Inputs/InputSearch.vue";
import InputCountry from "@/components/Inputs/InputCountry.vue";
import InputCategory from "@/components/Inputs/InputCategory.vue";
import { debounce } from "lodash";
import { onBeforeMount, reactive, ref, watch } from "vue";
import { useFlash } from "@/composables/useFlash.js";

let apiStore = useApiStore();
let { flash } = useFlash();

const posts = ref([]);
const loading = ref(true);
const form = reactive({
    country: '',
    category: '',
    search: '',
});

onBeforeMount(initialRequest);

watch(form, debounce(refetchData, 500));

async function refetchData(newValues) {
    apiStore.setData(newValues);

    if(apiStore.categoryValue === "" && apiStore.countryValue === "" && apiStore.searchValue === "") return

    posts.value = [];

    loading.value = true;

    let { data, onFetchError } = (apiStore.categoryValue === "" && apiStore.countryValue === "")
        ? await useFetch(apiStore.everything)
        : await useFetch(apiStore.topHeadlines);

    onFetchError(() => {
        flash(
            "Error detected",
            "Something went wrong.",
            "error",
            "<p class='text-sm'>Make sure you are connected to the network.</p>"
        );
    })

    posts.value = JSON.parse(data.value);

    loading.value = false;
}

async function initialRequest() {
    let { data, error, isFetching } = await useFetch(apiStore.topHeadlines);

    loading.value = isFetching.value;

    if(String(error.value).toLowerCase().includes("fail" || "error")) {
        flash(
            error.value,
            "Something went wrong.",
            "error",
            "<p class='text-sm'>Make sure that you are connected to the network.</p>"
        );
    }

    posts.value = JSON.parse(data.value);
}
</script>

<template>
    <Layout>
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="capitalize text-3xl font-bold tracking-normal text-gray-900 sm:text-4xl">The latest big news</h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">Just type in the text-field below.</p>
            <div class="mt-6 flex justify-center gap-x-5">
                <InputCountry @update:country="newValue => form.country = newValue" class="w-52 sm:w-full md:w-52"/>
                <InputCategory @update:category="newValue => form.category = newValue" class="w-52 sm:w-full md:w-52"/>
            </div>
            <div class="flex justify-center">
                <div class="relative mt-6 flex items-center w-96">
                    <InputSearch v-model:search="form.search"/>
                </div>
            </div>
        </div>

        <div v-if="loading" class="mt-40 flex justify-center w-full">
            <Loading color="black"/>
        </div>

        <div v-else
             class="mx-auto mt-14 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <NewsCard v-for="post in posts.articles" :key="post.id" :post="post"/>
        </div>
    </Layout>
</template>