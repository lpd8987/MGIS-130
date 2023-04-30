<script setup lang="ts">
import { RouterView } from 'vue-router';
import ExampleComponent from '@/components/ExampleComponent.vue';
import NavComponent from '@/components/NavComponent.vue';
import ButtonNavComponent from '@/components/ButtonNavComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
    <NavComponent />
    <RouterView />
    <ButtonNavComponent />
    <FooterComponent />
</template>
