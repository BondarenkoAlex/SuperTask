import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const routermiddleware = routerMiddleware(history);

const enhancer = composeEnhancers(
  applyMiddleware(routermiddleware, thunk),
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
