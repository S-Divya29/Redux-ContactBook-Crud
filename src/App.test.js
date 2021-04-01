import {render} from '@testing-library/react'
import App from './App'

import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('render App component',()=>{
    test('has rendered properly',()=>{
        render(<App/>)
        

    })
})
describe('full app rendering/navigating',()=>{
    test('has rendered properly',()=>{
        const history = createMemoryHistory()
        render(
            <Router history={history}>
              <App />
            </Router>
          )

    })
    
})
