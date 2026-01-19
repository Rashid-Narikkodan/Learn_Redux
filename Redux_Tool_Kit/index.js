const store=require('./app/store.js')
const { restoke, ordered } = require("./features/Cake/cakeSlice.js").cakeActions;
const { iceCreameAction } = require('./features/IceCreame/iceCreameSlice')

store.dispatch(ordered())
store.dispatch(restoke(5))
console.log('____________________________________')
store.dispatch(iceCreameAction.ordered())
store.dispatch(iceCreameAction.restock(1))
