<template>
    <div>
        <button @click='onClick' class="button-props">{{title}}</button>
    </div>
</template>

<script>
    export default {
        name: "Props",
        // Nouveau composant props complète
        props: {
            // Passer une string
            title: {
                type: String,
                required: true,
                default: "Accepter"
            },
            onClick: Function,
        }
    }
</script>

<style>
    .button-props {
        width: 100px;
        height: 40px;
        border: none;
        border-radius: 10px;
        background: darkgreen;
        color: white;
        transition: .3s;
        margin: 1rem 0rem 0rem 1rem;
    }

    .button-props:hover {
        transform: translateY(4px);
    }

    .button-props:active {
        transform: scale(1.1);
        transition: 200ms ease-in-out;
    }
</style>