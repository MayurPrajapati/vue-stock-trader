<template>
    <div class="row mt-3">
        <app-stock v-for="stock in stockPortfolio" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from "@/components/portfolio/Stock";

    export default {
        name: "Portfolio",
        computed: {
            stockPortfolio() {
                return this.$store.getters.stockPortfolio;
            }
        },
        components: {
            appStock: Stock
        },
        created() {
            // console.log("Portfolio")
            // console.log(this.stockPortfolio)
        }
    }
</script>

<style scoped>

</style>