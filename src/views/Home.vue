<template>
    <div>
        <h2>Ma page d'accueil</h2>
        <button class="button" v-on:click="display()">Gestion d'affichage</button>
        <div class="grid_container" v-if="isDisplay">
            <img src="../assets/img/FR.jpg" class="img">
            <ul class="list">
                <li class="li">Prénom : Florian</li>
                <li class="li">Nom : Rouanet</li>
                <li class="li">Date de naissance : 5 septembre 1990</li>
                <li class="li">Nationalité : Française</li>
                <li class="li">Profession : Développeur front-end</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                // toutes les données JS dynamique
                isDisplay: true
            }
        },
        methods: {
            // Toutes les fonctions anonymes
            display() {
                this.isDisplay = !this.isDisplay
            }
        }
    }
</script>

<style scoped>
    h2 {
        margin-top: 7rem;
        font-size: 2.5rem;
        font-family: 'Corinthia', cursive;
    }

    .grid_container {
        border-bottom: 1px black;
        display: flex;
        margin: 0rem 2rem 0rem 2rem;
        flex-direction: row;
        justify-content: center;
    }

    .img {
        margin-top: 5rem;
        border-radius: 3rem;
        height: 300px;
        border-radius: 1rem;
        box-shadow: 1px 1px 1px 1px;
    }

    .list {
        margin-top: 4.5rem;
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .li {
        margin-left: 2.5rem;
        line-height: 3rem;
        font-size: 20px;
        font-style: italic;
        font-size: 1.2rem;
        font-family: 'Alegreya', serif;
    }

    .button {
        padding: 4px;
        border-radius: 10px;
        box-shadow: 1px 1px 1px 1px;
        margin-top: 3rem;
    }

    .button:hover {
        transform: scale(1.1)
    }

    .button:active {
        transform: scale(1.2)
    }
</style>