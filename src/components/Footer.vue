<template>
    <div>
        <a href="mailto:louisrouanet@gmail.com">Contactez-nous</a>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    div {
        width: 100%;
        height: 80px;
        background: #00308F;
        padding: 1rem 1.5rem;
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
        opacity: 0.8;
    }

    a {
        color: white;
        font-style: italic;
        text-decoration: none;
        cursor: pointer;
        font-size: 22px;
        font-family: 'Alegreya', serif;
    }
</style>