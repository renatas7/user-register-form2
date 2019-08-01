import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducers, rootSaga } from '../../state';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const devTools =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;

const enhancers = compose(
  applyMiddleware(...middlewares),
  devTools
);

const store = createStore(reducers, enhancers);

sagaMiddleware.run(rootSaga);

export default store;
