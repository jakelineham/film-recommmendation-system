<script setup>
import {ref} from 'vue'

const props = defineProps({
    selectedFilms: Array
});

const emptyFilms = ref(false);
const recommendations = ref([]);

async function getRecs(films) {
    //Remove empty elements from selectedFilms array
    const filmsFiltered = films.filter(film => film);

    recommendations.value = [];

    if (filmsFiltered.length == 0) {
        emptyFilms.value = true;
        return;
    }

    emptyFilms.value = false;

    //Get the recommendations for each film chosen
    for (const film of filmsFiltered) {
        const recs = await getRecApi(film);

        recommendations.value.push(...recs);
    }
};

async function getRecApi(film) {
    const response = await fetch(
        `http://localhost:8080/recommend?filmId=${film.id}`
    );

    const recs = await response.json();

    return recs;
};

</script>

<template>
    <div>
        <button @click="getRecs(selectedFilms)">Get recommendations</button>

        <div v-if="emptyFilms">Please enter a film to get recommendations</div>

        <div 
        v-if="recommendations.length > 0" 
        v-for="film in recommendations" :key="film.id">
            {{ film.title }}
        </div>
    </div>
</template>