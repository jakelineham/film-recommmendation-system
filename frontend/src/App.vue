<script setup>
import SearchBox from './components/SearchBox.vue'
import Recommend from './components/Recommend.vue'
import {ref} from "vue";

const selectedFilms = ref(["","","",""]);

function selectFilm(film, index) {
    selectedFilms.value[index] = film;
}

</script>

<template>
  <header>
    <h1>Film Recommender</h1>
  </header>

  <main>
    <h2>Search for up to 4 films</h2>

    <SearchBox @filmSelected="selectFilm($event, 0)" />
    
    <SearchBox @filmSelected="selectFilm($event, 1)" />
    
    <SearchBox @filmSelected="selectFilm($event, 2)" />
    
    <SearchBox @filmSelected="selectFilm($event, 3)" />

    <Recommend :selectedFilms="selectedFilms"/>
  </main>
</template>