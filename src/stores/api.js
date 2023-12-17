import { computed } from "vue";
import { defineStore } from "pinia";

export const useApiStore = defineStore('api', {
    state: () => ({
        apiUrl: "https://newsapi.org/v2",
        apiKey: import.meta.env.VITE_NEWS_API,
        countryValue: "us",
        categoryValue: "",
        searchValue: "",
    }),

    getters: {
        everything: (state) => {
            return `${state.apiUrl}/everything?q=${state.searchValue}&apiKey=${state.apiKey}`;
        },
        topHeadlines: (state) => {
            return `${state.apiUrl}/top-headlines?country=${state.countryValue}&q=${state.searchValue}&category=${state.categoryValue}&apiKey=${state.apiKey}`;
        }
    },

    actions: {
        setData(newRequisites) {
            let { country, category, search } = { ...newRequisites };
            this.countryValue = country.trim();
            this.categoryValue = category.trim();
            this.searchValue = search.trim();
        }
    }
})