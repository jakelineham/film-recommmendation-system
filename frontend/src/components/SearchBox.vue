<script setup>
import {ref} from "vue";

const filmName = ref("");
const searchResults = ref([]);

async function submit() {
    //If the input is blank, prevent an API call
    if (!filmName.value) {
        searchResults.value = [];
        return;
    }

    const response = await fetch(
        `http://localhost:8080/search?filmName=${filmName.value}`
    );

    searchResults.value = await response.json();

    console.log(searchResults.value.length);
}
</script>

<template>
    <div>
        <form @submit.prevent="submit">
            <input
            v-model="filmName"
            placeholder="Search for a film"/>

            <button type="submit">Search</button>
        </form>

        <div v-if="searchResults.length > 0">
            <button v-for="film in searchResults" :key = "film.id">{{ film.title }}</button>
        </div>
    </div>
</template>