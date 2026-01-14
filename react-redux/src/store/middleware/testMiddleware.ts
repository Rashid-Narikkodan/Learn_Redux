//usually we dont ned to write middlewares in redux
// still we need to learn hw to write

const testMiddleware= store => next => action => {
  console.log('Get state',store.getState())
  console.log('Action',action)
  next(action)
  console.log('Get State after reducer',store.getState())
  console.log('-----------------------------------')
}

export default testMiddleware
