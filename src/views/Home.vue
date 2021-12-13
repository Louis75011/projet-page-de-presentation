<template>
    <!-- npm run build avant de mettre en ligne pour le /dist -->
    <div class="puff-in-center">
        <h2>Ma page d'accueil</h2>
        <button v-on:click="display()">Gestion d'affichage</button>
        <div class="grid_container" v-if="isDisplay">
            <img v-if="displayPicture" src="../assets/img/FRone.jpg" class="img moi">
            <img v-else src="../assets/img/FRtwo.jpeg" class="img moi">
            <ul class="list">
                <li class="li">Prénom : Louis</li>
                <li class="li">Nom : Rouanet</li>
                <li class="li">Date de naissance : 5 septembre 1990</li>
                <li class="li">Nationalité : Française</li>
                <li class="li">Profession : Développeur dit frontal</li>
            </ul>
        </div>

        <!-- Lecteur audio -->
        <figure>
            <figcaption>Écoutez le message de bienvenue :</figcaption>
            <audio controls src="../assets/audio/intro.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </figure>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                // toutes les données JS dynamique
                isDisplay: true,
                displayPicture: true,
            }
        },
        created() {
            this.conditionnal()
        },
        methods: {
            // Toutes les fonctions anonymes
            display() {
                this.isDisplay = !this.isDisplay
            },
            numberGenerate() {
                return Math.random()
            },
            conditionnal() {
                if (this.numberGenerate() >= 0.5) {
                    this.displayPicture = false
                } else {
                    this.displayPicture = true
                }
            },
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

    button {
        padding: 4px;
        border-radius: 10px;
        box-shadow: 1px 1px 1px 1px;
        margin-top: 3rem;
    }

    button:hover {
        transform: scale(1.1);
        transition: 300ms ease-in;
    }

    button:active {
        transform: scale(1.2);
        transition: 300ms ease-out;
    }

    figcaption {
        margin-top: 3rem;
    }

    audio {
        margin-top: 1rem;
    }
</style>