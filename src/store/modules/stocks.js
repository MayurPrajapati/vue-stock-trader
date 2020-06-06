import stocks from "../../data/stocks";
import {PORTFOLIO_BUY_STOCK_MUTATION} from "@/store/modules/portfolio";

// Mutations
export const STOCKS_INIT_STOCKS_MUTATION = 'stocks.mutations.INIT_STOCKS'
export const STOCKS_RANDOMIZE_STOCKS_MUTATION = 'stocks.mutations.RANDOMIZE_STOCKS'

// Actions
export const STOCKS_INIT_STOCKS_ACTION = 'stocks.actions.INIT_STOCKS'
export const STOCKS_BUY_STOCKS_ACTION = 'stocks.actions.BUY_STOCKS'
export const STOCKS_RANDOMIZE_STOCKS_ACTION = 'stocks.actions.RANDOMIZE_STOCKS'

const state = {
    stocks: []
}

const mutations = {
    [STOCKS_INIT_STOCKS_MUTATION](state, stocks) {
        state.stocks = stocks
    },
    [STOCKS_RANDOMIZE_STOCKS_MUTATION](state) {
        state.stocks.forEach(stock => {
            stock.price =  Math.round(stock.price * (1 + Math.random() - 0.5))
        })
    }
}

const actions = {
    /**
     * Can be used as { commit } to extract commit function from context object
     * @param context
     * @param order
     */
    [STOCKS_BUY_STOCKS_ACTION](context, order) {
        context.commit(PORTFOLIO_BUY_STOCK_MUTATION, order);
    },
    [STOCKS_INIT_STOCKS_ACTION](context) {
        context.commit(STOCKS_INIT_STOCKS_MUTATION, stocks)     // Invokes STOCKS_INIT_STOCKS_MUTATION
    },
    [STOCKS_RANDOMIZE_STOCKS_ACTION](context) {
        context.commit(STOCKS_RANDOMIZE_STOCKS_MUTATION)
    }
}

const getters = {
    stocks(state) {
        console.log("Stocks GET stocks")
        return state.stocks
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}