<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    data () {
        return {
            footerActive: true
        }
    },

    methods: {
        toggleFooter () {
            if(this.footerActive){
                this.footerActive = false;
            }
            else{
                this.footerActive = true;
            }
        }
    }
})
</script>

<template>
    <footer v-if="footerActive" @click="toggleFooter()" class="navbar is-success is-fixed-bottom">
        <div class="navbar-item has-text-centered"  >Tyler Gazdik, Louie D'Angelo, Evan Macko</div>
    </footer>
</template>

<style>
@import "bulma/css/bulma.css";
</style>