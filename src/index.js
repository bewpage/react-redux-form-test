import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers';

import PostIndex from './components/PostIndex';
import PostsShow from './components/PostsShow';
import PostsNew from "./components/PostsNew";
import NavBar from "./components/NavBar";
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const middleware = applyMiddleware(thunk);

const store = createStore(
  reducer,
  compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <NavBar />
                <div className='container'>
                    <Route exact path='/' component={PostIndex} />
                    <Route path='/posts/new' component={PostsNew} />
                    <Route path='/post/:id' component={PostsShow}/>
                </div>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
