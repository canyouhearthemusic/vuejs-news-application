<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon, NewspaperIcon } from '@heroicons/vue/24/outline'
import NavbarItem from "@/shared/Navbar/NavbarItem.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const navigation = [
    { name: 'home' },
    { name: 'about' }
];
</script>

<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                        <span class="sr-only">Open main menu</span>
                        <NewspaperIcon v-if="!open" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-8 w-8" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-between sm:items-center sm:justify-between">
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <NavbarItem
                                v-for="item in navigation"
                                :key="item.id"
                                :view-name="item.name"
                                :aria-current="item.current ? 'page' : undefined"
                                :class="item.name === route.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'"
                            >
                                {{ item.name }}
                            </NavbarItem>
                        </div>
                    </div>
                    <NewspaperIcon class="relative md:right-10 w-12 h-12 text-gray-200" />
                    <a href="https://newsapi.org" class="capitalize rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        News API
                    </a>
                </div>

            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'capitalize block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
                    {{ item.name }}
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>
