<template>
        <div class="col-sm-6 col-md-4">
            <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
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
                                <button class="btn btn-success" @click="buyStock"
                                        :disabled="!Number.isInteger(quantity) || quantity <= 0 || insufficientFunds">Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import {STOCKS_BUY_STOCKS_ACTION} from "@/store/modules/stocks";

    export default {
        name: "Stock",
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }

                this.$store.dispatch(STOCKS_BUY_STOCKS_ACTION, order)
                this.quantity = 0
            }
        },
        computed: {
            insufficientFunds() {
                return (this.$store.getters.funds - this.stock.price * this.quantity) < 0
            }
        },
        props: {
            stock: {
                id: Number,
                name: String,
                price: Number
            }
        }
    }
</script>

<style scoped>

</style>