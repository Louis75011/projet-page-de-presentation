<template>
    <div>
        <!-- Interface de Programmation d'Application. L'API est une solution informatique qui permet à des applications de communiquer entre elles et de s'échanger mutuellement des services ou des données. -->
        <h2>Requêtes aux API</h2>

        <h3>1) Première image aléatoire de chat :</h3>
        <img :src="img" alt="cat" class="imgAPI">

        <h3>2) Films du Studio Ghibli :</h3>
        <div class="container_movies">
            <div class="movie" v-for="movie in movies" :key="movie.id">
                <img :src="movie.movie_banner" alt="movie" class="imgAPI">
                <p class="bold-margin">Titre : {{ movie.title }}</p>
                <p>Description : {{ movie.description }}</p>
                <p class="bold-margin">Date de réalisation : {{ movie.release_date }}</p>
                <p class="bold-margin line">Temps en minutes : {{ movie.running_time }}</p>
            </div>
        </div>

        <h3>3) Deuxième image aléatoire de chat :</h3>
        <img :src="imgCat" alt="cat2" class="imgAPI">
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'API',
        data() {
            return {
                img: "",
                imgCat: "",
                movies: [],
                apiKey: "5b0d10a0-a27f-49c0-8705-6a4b9390e7ac"
            }
        },
        methods: {
            // Requêtes GET avec Axios sur des API gratuites - https://github.com/public-apis/public-apis
            // Premier essai
            getCat() {
                axios.get("https://aws.random.cat/meow").then((res) => {
                    // console.log(res.data.file)
                    this.img = res.data.file
                }).catch((err) => {
                    console.error(err)
                })
            },
            // Clé API
            getCatTwo() {
                axios.get("https://api.thecatapi.com/v1/images/search", {
                    headers: {
                        "Authorization": 'Bearer ' + this.apiKey
                    }
                }).then((res) => {
                    // console.log(res.data[0].url)
                    this.imgCat = res.data[0].url
                }).catch((err) => {
                    console.error(err)
                })
            },
            // Itération
            getFilm() {
                axios.get("https://ghibliapi.herokuapp.com/films").then((res) => {
                    // console.log(res.data)
                    this.movies = res.data
                }).catch((err) => {
                    console.error(err)
                })
            }
        },
        // Page montée automatisée
        mounted() {
            this.getCat()
            this.getCatTwo()
            this.getFilm()
        }
    }
</script>

<style scoped>
    h2 {
        margin-top: 7rem;
        font-size: 3rem;
        font-family: 'Corinthia', cursive;
    }

    h3 {
        margin-top: 3rem;
        font-size: 2rem;
        text-decoration: underline;
        color: crimson;
        font-family: 'Alegreya', serif;
    }

    p {
        margin-top: 2rem;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        display: flex;
        text-align: center;
        font-size: 1.1rem;
        font-family: 'Alegreya', serif;
    }

    .bold-margin {
        font-weight: bold;
        margin-left: 1rem;
    }

    .line {
        border-bottom: 2px solid black;
        margin-bottom: 1rem;
    }

    .imgAPI {
        margin: 2rem 2rem;
        height: 300px;
        width: 50%;
        height: 50%;
        border-radius: 1rem;
        box-shadow: 1px 1px 1px 1px;
    }
</style>