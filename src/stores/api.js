import { computed } from "vue";
import { defineStore } from "pinia";

export const useApiStore = defineStore('api', () => {
    // state
    const apiUrl = "https://newsapi.org/v2";
    const apiKey = "8e12b81cebfa41bfb34ed2f427d2de52";

    // getters or computed properties
    const everything = computed(() => {
        return `${apiUrl}/everything?country=us&apiKey=${apiKey}`
    });

    const topHeadlines = computed(() => {
        return `${apiUrl}/top-headlines?country=us&apiKey=${apiKey}`
    });

    const topHeadlinesWithSources = computed(() => {
        return `${apiUrl}/top-headlines/sources?country=us&apiKey=${apiKey}`
    });

    return { everything, topHeadlines, topHeadlinesWithSources };
})