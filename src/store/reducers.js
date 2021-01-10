"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var redux_1 = require("redux");
var reducers_1 = require("./auth/reducers");
var reducers_2 = require("./tasks/reducers");
exports.rootReducer = redux_1.combineReducers({
    account: reducers_1.accountReducer,
    tasks: reducers_2.tasksReducer,
});
//# sourceMappingURL=reducers.js.map