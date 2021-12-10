<template>
    <div class="menu_container">
        <router-link to="/" tag="button" class="navbar">Accueil</router-link>
        <router-link to="/forum" tag="button" class="navbar">Forum compétence</router-link>
        <router-link to="/search" tag="button" class="navbar">Plan recherche</router-link>
        <router-link to="/API" tag="button" class="navbar">Tests API</router-link>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>
    button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 1.4rem;
        font-family: 'Alegreya', serif;
    }

    .menu_container {
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding: .5rem 1rem;
        background: #00308F;
        opacity: 0.8;
        top: 0;
        position: fixed;
    }

    .navbar {
        font-style: italic;
        line-height: 1.8;
    }
</style>