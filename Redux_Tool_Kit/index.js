const store=require('./app/store.js')
const { restoke, ordered } = require("./features/Cake/cakeSlice.js").cakeActions;
const { iceCreameAction } = require('./features/IceCreame/iceCreameSlice');
const { fetchUsers } = require('./features/user/userSlice.js');

// console.log('dsds',fetchUsers())

// store.dispatch(ordered())
// store.dispatch(restoke(5))
// console.log('____________________________________')
// store.dispatch(iceCreameAction.ordered())
// store.dispatch(iceCreameAction.restock(1))
// console.log('____________________________________')
store.dispatch(fetchUsers())