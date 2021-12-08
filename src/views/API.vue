<template>
    <div>
        <h2>Requête aux API</h2>
        <h3>La 1ère image de chat aléatoire :</h3>
        <img :src="img" alt="cat" class="img">

        <h3>Studio Ghibli :</h3>
        <div class="container_movies">
            <div class="movie" v-for="movie in movies" :key="movie.id">
                <p>Titre : {{ movie.title }}</p>
                <p>Description : {{ movie.description }}</p>
                <p>Date de réalisation : {{ movie.release_date }}</p>
                <p>Temps en minutes : {{ movie.running_time }}</p>
                <img :src="movie.movie_banner" alt="movie" class="img">
            </div>
        </div>

        <h3>La 2e image de chat aléatoire :</h3>
        <img :src="imgCat" alt="cat2" class="img">
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
            // Requêtes à des API gratuites avec Axios https://github.com/public-apis/public-apis
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
            getCat2() {
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
            this.getCat2()
            this.getFilm()
        }
    }
</script>

<style>
    h2 {
        margin-top: 5rem;
    }

    .img {
        height: 300px;
    }
</style>