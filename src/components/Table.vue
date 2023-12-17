<script setup>
const socials = [
    { name: 'Telegram', profile: '@al1bekkkk' },
    { name: 'GitHub', profile: '@canyouhearthemusic' },
    { name: 'Mail', profile: 'alibektastan04@gmail.com' },
    // More people...
]
</script>

<template>
    <div class="flex my-16">
        <div class="mx-auto max-w-7xl">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-12 border rounded-lg">
                    <table class="min-w-full divide-y divide-gray-700">
                        <thead>
                        <th colspan="5" scope="colgroup"
                            class="py-3.5 pl-4 pr-2.5 text-left text-sm text-xl font-semibold text-white sm:pl-0 text-center">
                            To Contact with me
                        </th>
                        <tr>
                            <th scope="col"
                                class="py-3.5 pl-4 pr-2.5 text-left text-lg font-semibold text-white sm:pl-0">
                                Name
                            </th>
                            <th scope="col" class="px-3 py-3.5 text-left text-lg font-semibold text-white">
                                Title
                            </th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-800">
                        <tr v-for="social in socials" :key="social.name">
                            <td class="whitespace-nowrap py-4 pl-4 pr-2.5 text-md font-medium text-white sm:pl-0">
                                {{ social.name }}
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-md text-gray-300 italic">{{
                                    social.profile
                                }}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</template>