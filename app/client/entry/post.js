import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../javascript/store/configurePostStore';
import {getPosts} from '../javascript/actions/app'
import App from '../javascript/containers/post';
import '../stylesheets/posts.scss'
import '../stylesheets/home.scss'
import '../stylesheets/users.scss'

const store = configureStore();

store.dispatch(getPosts())

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('root')
);



