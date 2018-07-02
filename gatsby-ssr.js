import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import createStore, { initialState } from './src/state/store'

const store = createStore(initialState)

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {

    const ConnectedBody = () => (
        <Provider store={store}>
            {bodyComponent}
        </Provider>
    )

    replaceBodyHTMLString(renderToString(<ConnectedBody />))
}