import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/index.js';
import reporter from './redux-reporter.js'

export default () => createStore(reducer, applyMiddleware(reporter));
