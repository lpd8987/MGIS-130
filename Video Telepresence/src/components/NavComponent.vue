<script lang="ts">
import { RouterLink } from 'vue-router'
import { defineComponent } from 'vue';

export default defineComponent({
    data (){
        return {
            currentPage: "Introduction"
        };
    },
    methods: {
        setCurrentPage (pageTitle:string) {
            this.currentPage = pageTitle;
        },

        adjustButtonNav () {
            
        }
    },
})

</script>

<template>
    <nav class="navbar is-success has-shadow">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="../assets/android-chrome-512x512.png">
                &nbsp;
                <h1 class="title">Video Telepresence</h1>
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
                
                <div class="navbar-item has-dropdown is-hoverable">
                    <h1 id="currentPageH1" class="navbar-link">{{ currentPage }}</h1>

                    <div class="navbar-dropdown is-right">
                        <RouterLink @click="setCurrentPage('Introduction')" class="navbar-item" to="home">Introduction</RouterLink>
                        <RouterLink @click="setCurrentPage('Definition')" class="navbar-item" to="Definition">Definition</RouterLink>
                        <RouterLink @click="setCurrentPage('Overview')" class="navbar-item" to="Overview">Overview</RouterLink>
                        <RouterLink @click="setCurrentPage('Current and Future')" class="navbar-item" to="Current-and-Future">Current and Future</RouterLink>
                        <RouterLink @click="setCurrentPage('Leading Companies')" class="navbar-item" to="Leading-Companies">Leading Companies</RouterLink>
                        <RouterLink @click="setCurrentPage('Pros and Cons')" class="navbar-item" to="Pros-and-Cons">Pros and Cons</RouterLink>
                        <RouterLink @click="setCurrentPage('Opinions')" class="navbar-item" to="Opinions">Opinions</RouterLink>
                        <RouterLink @click="setCurrentPage('FAQ')" class="navbar-item" to="FAQ">FAQ</RouterLink>
                        <RouterLink @click="setCurrentPage('Additional Links')" class="navbar-item" to="Additional-Links">Additional Links</RouterLink>
                        <RouterLink @click="setCurrentPage('Questions')" class="navbar-item" to="Questions">Questions</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>

<style>
@import "bulma/css/bulma.css";
</style>