import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export const initialState = {
    filter: {
        id: "spotify_peachy",
        name: "Spotify Peachy",
        colours: ["#ed3ea4", "#fec76c"]
    },
    blurValue: 0
}

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}