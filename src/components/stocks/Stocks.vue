<template>
    <div class="row mt-3">
        <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id"></app-stock>
    </div>
</template>

<script>
    import Stock from "@/components/stocks/Stock";
    import {STOCKS_INIT_STOCKS_ACTION} from "@/store/modules/stocks";

    export default {
        name: "Stocks",
        components: {
            AppStock: Stock
        },
        created() {
            this.$store.dispatch(STOCKS_INIT_STOCKS_ACTION)
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks
            }
        }
    }
</script>

<style scoped>

</style>