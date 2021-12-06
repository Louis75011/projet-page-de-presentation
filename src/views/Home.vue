<template>
    <div>
        <h1>Ma page d'accueil</h1>
        <button @click="display()"> Cacher/Afficher</button>
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
    }
    h1 {
        margin-top: 5rem;
    }
</style>