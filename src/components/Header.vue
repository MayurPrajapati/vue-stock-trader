<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light animate__backOutLeft">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link to="portfolio" class="nav-item nav-link" active-class="active">Portfolio</router-link>
                <router-link to="stocks" class="nav-item nav-link" active-class="active">Stocks</router-link>
            </ul>
            <div class="nav navbar-nav">
                <a class="nav-item nav-link btn" @click="endDay">End Day</a>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown" :class="{show: dropdownOpened}">
                        <a
                                class="nav-link dropdown-toggle"
                                href="#" id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                @click="dropdownOpened = !dropdownOpened"
                        >
                            Save & Load
                        </a>
                        <ul class="dropdown-menu" :class="{show: dropdownOpened}">
                            <li class="dropdown-item" @click="dropdownOpened = false"><a href="#">Save Data</a></li>
                            <li class="dropdown-item" @click="dropdownOpened = false"><a href="#">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
                <strong class="navbar-text float-right">Funds: {{ funds | currency}}</strong>
            </div>
        </div>
    </nav>
</template>

<script>
    import {STOCKS_RANDOMIZE_STOCKS_ACTION} from "@/store/modules/stocks";

    export default {
        name: "Header",
        data() {
            return {
                dropdownOpened: false
            }
        },
        methods: {
            endDay() {
                this.$store.dispatch(STOCKS_RANDOMIZE_STOCKS_ACTION)
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        }
    }
</script>

<style scoped>

</style>