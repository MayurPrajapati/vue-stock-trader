<template>
    <div class="container">
        <app-header class="mt-5"></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from "@/components/Header";

    export default {
        name: 'App',
        components: {
            AppHeader: Header
        },
    }
</script>

<style scoped>
    body {
        padding: 30px;
    }
</style>
