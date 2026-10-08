<script setup>
import {ref} from "vue";

const filmName = ref("");
const searchResults = ref([]);

const emit = defineEmits(['filmSelected']);

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
}

function selectFilm(film) {
    filmName.value = film.title;
    searchResults.value = [];

    emit('filmSelected', film);
}

function clear() {
    filmName.value = "";
    searchResults.value = [];

    selectFilm("");
}

</script>

<template>
    <div>
        <button @click="clear">Clear</button>

        <form @submit.prevent="submit">
            <input
            v-model="filmName"
            placeholder="Search for a film"/>

            <button type="submit">Search</button>
        </form>
        
        <div v-if="searchResults.length > 0">
            <button 
            v-for="film in searchResults" 
            :key = "film.id"
            @click="selectFilm(film)">
                {{ film.title }}
            </button>
        </div>
    </div>
</template>