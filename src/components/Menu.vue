<template>
    <div class="menu_container">
        <router-link to="/" tag="button" class="title">Accueil</router-link>
        <router-link to="/forum" tag="button" class="title">Forum compétence</router-link>
        <router-link to="/" tag="button" class="title">Texte de recherche</router-link>
        <router-link to="/API" tag="button" class="title">Exemple d'API</router-link>
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
        font-size: 22px;
    }

    .menu_container {
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding: .5rem 1rem;
        background: blue;
        top: 0;
        position: fixed;
    }

    .title {
        font-style: italic;
    }
</style>