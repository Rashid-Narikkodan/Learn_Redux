const store=require('./app/store.js')
const { restoke, ordered } = require("./features/Cake/cakeSlice.js").cakeActions;
const { iceCreameAction } = require('./features/IceCreame/iceCreameSlice')
// console.log("Initial state :- ",store.getState())

const unsubscribe = store.subscribe(()=>{
    // console.log('Updated state :- ', store.getState())
})

console.log(store.dispatch(ordered()))
store.dispatch(iceCreameAction.ordered())
store.dispatch(restoke(5))
store.dispatch(iceCreameAction.restock(1))

unsubscribe()