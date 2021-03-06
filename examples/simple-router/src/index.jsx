import React from 'react'
import createApp from 'mickey'
import Router from './Router'

// 1. Initialize
const app = createApp({ historyMode: 'hash' })

// 2. Model
app.model({
  namespace: 'topics',
  state: [
    'foo',
  ],
  add: (state, topic) => [...state, topic],
})

// 3. View
app.render(<Router />, document.getElementById('root'))
