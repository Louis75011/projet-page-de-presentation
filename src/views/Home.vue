<template>
    <div>
        <button @click="display()"> Cacher/Afficher</button>
        <ul class="list" v-if="isDisplay">
            <li>Prénom : Florian</li>
            <li>Nom : Rouanet</li>
            <li>Date de naissance : 5 septembre 1990</li>
            <li>Nationalité : Française</li>
        </ul>
        
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data(){
            return {
                // toutes les données JS dynamique
                isDisplay : true
            }
        },
        methods: {
            // Toutes les fonctions
            display(){
                this.isDisplay = !this.isDisplay
            }
        }
    }
</script>

<style scoped>
    .list {
        font-family: Helvetica,Arial,sans-serif;
        font-size: 18px;
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    button {
        margin-top: 5rem;
    }
</style>