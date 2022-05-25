import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modal from './modal';
import task from './task';
import ui from './ui';

const rootReducer = combineReducers({
    task,
    ui,
    modal,
    form: formReducer,
});

export default rootReducer;
