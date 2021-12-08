<template>
    <div>
        <h2>Mon forum de compétences en développement</h2>
        <div class="container_forum">
            <h3>Technologie :</h3>
            <p>Mon texte :</p>
            <img src="" alt="image" class="img">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Forum',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    h2 {
        margin-top: 7rem;
        font-size: 2.5rem;
        font-family: 'Corinthia', cursive;
    }
    
    h3 {
        font-size: 2rem;
        margin-top: 7rem;
        font-family: 'Alegreya', serif;
    }

    p {
    font-size: 1.2rem;
    font-family: 'Alegreya', serif;
    margin-top: 7rem;
    }

    img {
        margin-top: 7rem;
    }
</style>