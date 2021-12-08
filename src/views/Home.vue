<template>
    <div>
        <h2>Ma page d'accueil</h2>
        <button v-on:click="display()">Gestion d'affichage</button>
        <div class="grid_container" v-if="isDisplay">
            <img src="../img/FR.jpg" class="img">
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
    .list {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 18px;
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 100%;
    }

    .grid_container {
        width: 100%;
        border-bottom: 1px black;
        display: grid;
        grid-template-rows: repeat(1, 350px);
        grid-template-columns: repeat(2, 350px);
        /* grid-gap: 30px; */
        flex-direction: row;
        justify-content: center;
    }

    .img {
        width: 60%;
        margin-top: 5rem;
    }

    .li {
        width: 100%;
        margin-top: 1rem;
        font-size: 20px;
        font-style: italic;
    }

    button {
        margin-top: 5rem;
        padding: 3px;
        border-radius: 10px;
        box-shadow: 1px 1px 1px 1px ;
    }

    h2 {
        margin-top: 5rem;
    }

    /* @media screen and (max-width: 450px) {
        .grid_container {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    } */
</style>