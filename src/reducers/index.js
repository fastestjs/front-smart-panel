import { combineReducers } from 'redux';
import { testInfo } from '../datas/data-test';

const rootReducer = combineReducers({
    testInfo: testInfo
});

export default rootReducer;
