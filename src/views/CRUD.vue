<template>
    <div>
        <!-- router absent du menu -->
        <h2>Publier une compétence !</h2>

        <h3>Publier un langage</h3>
        <div>
            <form>
                <input type="text" placeholder="ex:javascript" v-model="languageTitle">
                <input type="text" placeholder="URL image" v-model="languageImage">
                <input type="text" placeholder="Ajouter une description" v-model="languageDesc">
            </form>
            <div>
                <button @click="postLanguage()">Envoyer</button>
            </div>
        </div>

        <h3>Publier une technologie</h3>
        <div>
            <form>
                <input type="text" placeholder="ex:sass" v-model="technologyTitle">
                <input type="text" placeholder="URL image" v-model="technologyImage">
                <input type="text" placeholder="Ajouter une description" v-model="technologyDesc">
            </form>
            <div>
                <button @click="postTechnology()">Envoyer</button>
            </div>
        </div>

        <h3>Publier un concept</h3>
        <div>
            <form>
                <input type="text" placeholder="ex:seo" v-model="conceptTitle">
                <input type="text" placeholder="URL image" v-model="conceptImage">
                <input type="text" placeholder="Ajouter une description" v-model="conceptDesc">
            </form>
            <div>
                <button @click="postConcept()">Envoyer</button>
            </div>
        </div>

        <h3>Publier un logiciel</h3>
        <div>
            <form>
                <input type="text" placeholder="ex:vscode" v-model="softwareTitle">
                <input type="text" placeholder="URL image" v-model="softwareImage">
                <input type="text" placeholder="Ajouter une description" v-model="softwareDesc">
            </form>
            <div>
                <button @click="postSoftware()">Envoyer</button>
            </div>
        </div>

        <div>
            <h4>Modification / Suppression :</h4>
            <h5>Langages :</h5>
            <div v-for="language in fetchLanguages" :key="language.id">
                <h4>{{language.title}}</h4>
                <img v-bind:src="language.img" alt="image language" class="img">
                <p>{{language.text}}</p>

                <button v-on:click="displayLanguages()">Afficher la modification</button>
                <div v-if="showLanguages">
                    <form>
                        <input type="text" placeholder="ex:html/css" v-model="languageTitle">
                        <input type="text" placeholder="URL image" v-model="languageImage">
                        <input type="text" placeholder="Ajouter une description" v-model="languageDesc">
                        <button @click="updateLanguages(language.id)">Modifier</button>
                    </form>
                </div>

                <button @click="deleteLanguages(language.id)">Supprimer</button>
            </div>

            <h5>Technologies :</h5>
            <div v-for="technology in fetchTechnologies" :key="technology.id">
                <h4>{{technology.title}}</h4>
                <img v-bind:src="technology.img" alt="image technology" class="img">
                <p>{{technology.text}}</p>

                <button v-on:click="displayTechnologies()">Afficher la modification</button>
                <div v-if="showTechnologies">
                    <form>
                        <input type="text" placeholder="ex:bootstrap" v-model="technologyTitle">
                        <input type="text" placeholder="URL image" v-model="technologyImage">
                        <input type="text" placeholder="Ajouter une description" v-model="technologyDesc">
                        <button @click="updateTechnologies(technology.id)">Modifier</button>
                    </form>
                </div>

                <button @click="deleteTechnologies(technology.id)">Supprimer</button>
            </div>

            <h5>Concepts :</h5>
            <div v-for="concept in fetchConcepts" :key="concept.id">
                <h4>{{concept.title}}</h4>
                <img v-bind:src="concept.img" alt="image concept notion" class="img">
                <p>{{concept.text}}</p>

                <button v-on:click="displayConcepts()">Afficher la modification</button>
                <div v-if="showConcepts">
                    <form>
                        <input type="text" placeholder="ex:w3c" v-model="conceptTitle">
                        <input type="text" placeholder="URL image" v-model="conceptImage">
                        <input type="text" placeholder="Ajouter une description" v-model="conceptDesc">
                        <button @click="updateConcepts(concept.id)">Modifier</button>
                    </form>
                </div>

                <button @click="deleteConcepts(concept.id)">Supprimer</button>
            </div>

            <h5>Logiciels :</h5>
            <div v-for="software in fetchSoftwares" :key="software.id">
                <h4>{{software.title}}</h4>
                <img v-bind:src="software.img" alt="image software" class="img">
                <p>{{software.text}}</p>

                <button v-on:click="displaySoftwares()">Afficher la modification</button>
                <div v-if="showSoftwares">
                    <form>
                        <input type="text" placeholder="ex:postman" v-model="softwareTitle">
                        <input type="text" placeholder="URL image" v-model="softwareImage">
                        <input type="text" placeholder="Ajouter une description" v-model="softwareDesc">
                        <button @click="updateSoftwares(software.id)">Modifier</button>
                    </form>

                </div>
                <button @click="deleteSoftwares(software.id)">Supprimer</button>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: "CRUD",
        data() {
            return {
                // Données à afficher
                languageTitle: "",
                languageImage: "",
                languageDesc: "",

                technologyTitle: "",
                technologyImage: "",
                technologyDesc: "",

                conceptTitle: "",
                conceptImage: "",
                conceptDesc: "",

                softwareTitle: "",
                softwareImage: "",
                softwareDesc: "",

                // Tableau vide pour stocker dans les requêtes
                fetchLanguages: [],
                fetchTechnologies: [],
                fetchConcepts: [],
                fetchSoftwares: [],

                // Afficher le bouton pour modifier
                showLanguages: false,
                showTechnologies: false,
                showConcepts: false,
                showSoftwares: false
            }
        },
        methods: {
            // Post
            postLanguage() {
                axios.post("http://localhost:3000/languages", {
                    title: this.languageTitle,
                    img: this.languageImage,
                    text: this.languageDesc
                }).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.error(err);
                })
            },
            postTechnology() {
                axios.post("http://localhost:3000/technologies", {
                    title: this.technologyTitle,
                    img: this.technologyImage,
                    text: this.technologyDesc
                }).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.error(err);
                })
            },
            postConcept() {
                axios.post("http://localhost:3000/concepts", {
                    title: this.conceptTitle,
                    img: this.conceptImage,
                    text: this.conceptDesc
                }).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.error(err);
                })
            },
            postSoftware() {
                axios.post("http://localhost:3000/softwares", {
                    title: this.softwareTitle,
                    img: this.softwareImage,
                    text: this.softwareDesc
                }).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.error(err);
                })
            },
            // Get
            getLanguages() {
                axios.get("http://localhost:3000/languages").then((res) => {
                    console.log(res.data)
                    this.fetchLanguages = res.data
                }).catch((err) => {
                    console.error(err)
                })
            },
            getTechnologies() {
                axios.get("http://localhost:3000/technologies").then((res) => {
                    console.log(res.data)
                    this.fetchTechnologies = res.data
                }).catch((err) => {
                    console.error(err)
                })
            },
            getConcepts() {
                axios.get("http://localhost:3000/concepts").then((res) => {
                    console.log(res.data)
                    this.fetchConcepts = res.data
                }).catch((err) => {
                    console.error(err)
                })
            },
            getSoftwares() {
                axios.get("http://localhost:3000/softwares").then((res) => {
                    console.log(res.data)
                    this.fetchSoftwares = res.data
                }).catch((err) => {
                    console.error(err)
                })
            },
            // Update
            updateLanguages(id) {
                axios.patch(`http://localhost:3000/languages/${id}`, {
                    title: this.languageTitle,
                    img: this.languageImage,
                    text: this.languageDesc
                }).then((res) => {
                    console.log(res.data)
                    this.getLanguages();
                }).catch((err) => {
                    console.error(err)
                })
            },
            updateTechnologies(id) {
                axios.patch(`http://localhost:3000/technologies/${id}`, {
                    title: this.technologyTitle,
                    img: this.technologyImage,
                    text: this.technologyDesc
                }).then((res) => {
                    console.log(res.data)
                    this.getTechnologies();
                }).catch((err) => {
                    console.error(err)
                })
            },
            updateConcepts(id) {
                axios.patch(`http://localhost:3000/concepts/${id}`, {
                    title: this.conceptTitle,
                    img: this.conceptImage,
                    text: this.conceptDesc
                }).then((res) => {
                    console.log(res.data)
                    this.getConcepts();
                }).catch((err) => {
                    console.error(err)
                })
            },
            updateSoftwares(id) {
                axios.patch(`http://localhost:3000/softwares/${id}`, {
                    title: this.softwareTitle,
                    img: this.softwareImage,
                    text: this.softwareDesc
                }).then((res) => {
                    console.log(res.data)
                    this.getSoftwares();
                }).catch((err) => {
                    console.error(err)
                })
            },
            // Delete
            deleteLanguages(id) {
                axios.delete(`http://localhost:3000/languages/${id}`).then((res) => {
                    console.log(res);
                    this.getLanguages() // Récupère l'id pour le supprimer
                }).catch((err) => {
                    console.error(err);
                })
            },
            deleteTechnologies(id) {
                axios.delete(`http://localhost:3000/technologies/${id}`).then((res) => {
                    console.log(res);
                    this.getTechnologies()
                }).catch((err) => {
                    console.error(err);
                })
            },
            deleteConcepts(id) {
                axios.delete(`http://localhost:3000/concepts/${id}`).then((res) => {
                    console.log(res);
                    this.getConcepts()
                }).catch((err) => {
                    console.error(err);
                })
            },
            deleteSoftwares(id) {
                axios.delete(`http://localhost:3000/softwares/${id}`).then((res) => {
                    console.log(res);
                    this.getSoftwares()
                }).catch((err) => {
                    console.error(err);
                })
            },
            // Display
            displayLanguages() {
                this.showLanguages = !this.showLanguages
            },
            displayTechnologies() {
                this.showTechnologies = !this.showTechnologies
            },
            displayConcepts() {
                this.showConcepts = !this.showConcepts
            },
            displaySoftwares() {
                this.showSoftwares = !this.showSoftwares
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

<style>
    h2 {
        margin-top: 7rem;
        font-size: 2.5rem;
        font-family: 'Corinthia', cursive;
    }

    h4 {
        font-size: 1.5rem;
        margin-top: 3rem;
        font-family: 'Alegreya', serif;
    }

    h5 {
        font-size: 2rem;
        margin-top: 4rem;
        font-family: 'Alegreya', serif;
    }

    p {
        font-size: 1.2rem;
        font-family: 'Alegreya', serif;
        margin-top: 3rem;
    }

    img {
        margin-top: 3rem;
        width: 80%;
        max-width: 200px;
        height: auto;
    }

    .end {
        margin-bottom: 3rem;
    }
</style>