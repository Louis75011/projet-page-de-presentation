<template>
    <div>
        <h2 class="mb">Mon forum de compétences en développement</h2>
        <!-- Json-server - FORUM & CRUD -->
        <div class="container_forum post">
            <div>
                <h3>Langages :</h3>
                <div v-for="language in fetchLanguages" :key="language.id">
                    <h4>{{language.title}}</h4>
                    <img v-bind:src="language.img" alt="image language" class="img">
                    <p class="line-bottom">{{language.text}}</p>
                </div>
            </div>

            <div class="line-top">
                <h3>Technologies :</h3>
                <div v-for="technology in fetchTechnologies" :key="technology.id">
                    <h4>{{technology.title}}</h4>
                    <img v-bind:src="technology.img" alt="image technology" class="img">
                    <p class="line-bottom">{{technology.text}}</p>
                </div>
            </div>

            <div class="line-top">
                <h3>Concepts :</h3>
                <div v-for="concept in fetchConcepts" :key="concept.id">
                    <h4>{{concept.title}}</h4>
                    <img v-bind:src="concept.img" alt="image concept notion" class="img">
                    <p class="line-bottom">{{concept.text}}</p>
                </div>
            </div>

            <div class="line-top">
                <h3>Logiciels :</h3>
                <div v-for="software in fetchSoftwares" :key="software.id">
                    <h4>{{software.title}}</h4>
                    <img v-bind:src="software.img" alt="image software" class="img">
                    <p class="line-bottom">{{software.text}}</p>
                </div>
            </div>


        </div>
        <div class="mb"></div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'Forum',
        data() {
            return {
                fetchLanguages: [],
                fetchTechnologies: [],
                fetchConcepts: [],
                fetchSoftwares: []
            }
        },
        methods: {
            getLanguages() {
                axios.get("http://localhost:3000/languages").then((res) => {
                    // console.log(res.data)
                    this.fetchLanguages = res.data
                }).catch((err) => {
                    console.error(err)
                })
            },
            getTechnologies() {
                axios.get("http://localhost:3000/technologies").then((res) => {
                    // console.log(res.data)
                    this.fetchTechnologies = res.data
                }).catch((err) => {
                    console.error(err)
                })
            },
            getConcepts() {
                axios.get("http://localhost:3000/concepts").then((res) => {
                    // console.log(res.data)
                    this.fetchConcepts = res.data
                }).catch((err) => {
                    console.error(err)
                })
            },
            getSoftwares() {
                axios.get("http://localhost:3000/softwares").then((res) => {
                    // console.log(res.data)
                    this.fetchSoftwares = res.data
                }).catch((err) => {
                    console.error(err)
                })
            }
        },
        mounted() {
            this.getLanguages()
            this.getTechnologies()
            this.getConcepts()
            this.getSoftwares()
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
        text-decoration: underline;
        font-size: 2.3rem;
        margin-top: 2.5rem;
        font-family: 'Alegreya', serif;
    }

    h4 {
        color: crimson;
        font-size: 1.5rem;
        margin-top: 2rem;
        font-family: 'Alegreya', serif;
    }

    p {
        font-size: 1.3rem;
        font-style: italic;
        font-family: 'Alegreya', serif;
        margin-top: 1rem;
    }

    img {
        margin-top: 1rem;
        width: 80%;
        max-width: 200px;
        height: auto;
    }

    .post {
        border-width: 2px;
        border-style: dotted;
        border-color: black;
        margin: 0rem 1rem;
    }

    .end {
        margin-bottom: 3rem;
    }

    .line-top {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        border-top: 4px solid darkred;
        margin-top: 1rem;
    }

    .line-bottom {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        border-bottom: 2px solid gray;
    }

    .mb {
        margin-bottom: 3rem;
    }
</style>