<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    props: {
        message: String
    },
    methods: {
        changeHeader() {
            let target = document.querySelector("#currentPageH1");
            if(target != undefined){
                target.innerHTML = "THIS WORKS";
            }
        }
    }
})
</script>

<template>
    <h2>{{ $props.message }}</h2>
    <button @click="changeHeader">CLICK ME</button>
</template>

<style>
</style>