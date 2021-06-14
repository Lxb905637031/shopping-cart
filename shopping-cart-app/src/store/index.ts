import { createStore } from 'redux'
import reducers from './reducers'

const { composeWithDevTools } = require('redux-devtools-extension')

const store = createStore(
    reducers,
    composeWithDevTools()
)

export default store