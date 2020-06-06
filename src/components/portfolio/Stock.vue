<template>
    <div class="col-sm-6 col-md-4">
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
            <div class="card-header">
                {{ stock.name }}
                <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col col-9">
                        <div class="float-left">
                            <input type="number" class="form-control" placeholder="Quantity" v-model.number="quantity">
                        </div>
                    </div>
                    <div class="col col-3">
                        <div class="float-right">
                            <button class="btn btn-info" @click="sellStock"
                                    :disabled="!Number.isInteger(quantity) || quantity <= 0 || quantity > stock.quantity">Sell
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {PORTFOLIO_SELL_STOCK_ACTION} from "@/store/modules/portfolio";

    export default {
        name: "Stock",
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.stock.quantity
                }

                this.$store.dispatch(PORTFOLIO_SELL_STOCK_ACTION, order)
                this.quantity = 0
            }
        },
        created() {
            console.log("Portfolio/Stocks")
            console.log(this.stock)
        },
        props: {
            stock: {
                id: Number,
                name: String,
                price: Number,
                quantity: Number
            }
        }
    }
</script>

<style scoped>

</style>