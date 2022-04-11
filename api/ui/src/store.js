import { reactive } from 'vue'

export const store = reactive({
    order: {
        size: null,
        drinks: []
    },
    inProgress: false,
    status: "Ready to serve!",
    setSize(size) {
        this.order.size = size
        console.log("Setting cup size to " + size)
    },
    addDrink(drink) {
        this.order.drinks.push(drink)
    },
    removeDrink(drink) {
        let inx = this.order.drinks.indexOf(drink)
        if (inx !== -1)
        this.order.drinks.splice(inx, 1)
    },
    setInProgress(state) {
        this.inProgress = state
    },
    setStatus(msg) {
        this.status = msg
    }
})