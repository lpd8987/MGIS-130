<script lang="ts">
import { RouterLink } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent ({
    data() {
        return {
            pages: ["Introduction", "Definition", "Overview", "Current-and-Future", "Leading-Companies", "Pros-and-Cons", "Opinions", "FAQ", "Additional-Links", "Questions"],
            nextPage: "Definition",
            currentPage: "Introduction",
            previousPage: "NA",

            currentIndex: 0
        }
    },
    methods: {
        //increments the page index by a specified amount, and makes sure that it cannot go above or below the number of pages available
        incrementPage (increment:number) {
            //increment index
            this.currentIndex += increment;

            //special cases
            if(this.currentIndex >= this.pages.length){
                this.currentIndex = 0;
            }

            if(this.currentIndex != 0){
                this.previousPage = this.pages[this.currentIndex - 1];
            }

            //update names for routing
            this.currentPage = this.pages[this.currentIndex];
            this.nextPage = this.pages[this.currentIndex + 1]
        },

        changeHeader(newText:string) {
            let target = document.querySelector("#currentPageH1");
            if(target != undefined){
                target.innerHTML = newText;
            }
        }
    }
})

</script>

<template>
    <div class="is-flex is-flex-direction-row is-justify-content-space-evenly p-4">
        <!--The first two pages do not allow users to go back a page-->
        <RouterLink v-if="currentPage !== `Introduction` && currentPage !== `Definition`" @click="incrementPage(-1); ; changeHeader(currentPage)" class="button is-success" :to=previousPage>Previous: {{ previousPage }}</RouterLink>

        <p class="button" disabled>{{ currentPage }}</p>

        <!--The last page conditionally renders content of the last 'next' button-->
        <RouterLink v-if="currentPage !== `Questions`" class="button is-success" @click="incrementPage(1); changeHeader(currentPage)" :to=nextPage >Next: {{ nextPage }}</RouterLink>
        <RouterLink v-else class="button is-info" @click="incrementPage(1); changeHeader(`Introduction`)" to="/">Start from beginning</RouterLink>
    </div>
</template>

<style scoped>
@import "bulma/css/bulma.css";
</style>