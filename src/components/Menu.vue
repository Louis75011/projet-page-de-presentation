<template>
    <div class="menu_container">
        <router-link to="/" tag="button">Accueil</router-link>
        <router-link to="/" tag="button">Forum</router-link>
        <router-link to="/" tag="button">To-Do-Liste</router-link>
        <router-link to="/" tag="button">API</router-link>
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
</style>