// Mutations
export const PORTFOLIO_BUY_STOCK_MUTATION = 'portfolio.mutations.BUY_STOCKS'
export const PORTFOLIO_SELL_STOCK_MUTATION = 'portfolio.mutations.SELL_STOCKS'

// Actions
export const PORTFOLIO_SELL_STOCK_ACTION = 'portfolio.actions.SELL_STOCKS'

const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    [PORTFOLIO_BUY_STOCK_MUTATION](state, {stockId, stockPrice, quantity}) {
        const record = state.stocks.find(element => element.id === stockId)
        if (record) {
            record.quantity += quantity
        } else {
            state.stocks.push({
                quantity: quantity,
                id: stockId,
            })
        }
        state.funds -= stockPrice * quantity
    },
    [PORTFOLIO_SELL_STOCK_MUTATION](state, {stockId, stockPrice, quantity}) {
        const record = state.stocks.find(element => element.id === stockId)
        if (quantity < record.quantity) {
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity
    }
}

const actions = {
    [PORTFOLIO_SELL_STOCK_ACTION](context, order) {
        context.commit(PORTFOLIO_SELL_STOCK_MUTATION, order)
    },
}

const getters = {
    stockPortfolio(state, getters) {
        console.log('stockPortfolio')
        // console.log(state)
        console.log(getters)
        let stocks = state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id)
            return {
                id: record.id,
                quantity: stock.quantity,
                price: record.price,
                name: record.name
            }
        })
        console.log("GETTER: Portfolio")
        console.log(stocks)
        return stocks
    },
    funds(state) {
        return state.funds
    }
}

export default {
    state, mutations, actions, getters
}