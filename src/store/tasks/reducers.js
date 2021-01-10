"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksReducer = void 0;
var constants_1 = require("./constants");
var initialState = { data: null, errorMessage: null };
var tasksReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case constants_1.GET_TASKS_SUCCESS:
            var data = action.payload;
            return __assign(__assign({}, state), { data: data });
        case constants_1.GET_TASKS_ERROR:
            var errorMessage = action.payload;
            return __assign(__assign({}, state), { errorMessage: errorMessage });
        default:
            return state;
    }
};
exports.tasksReducer = tasksReducer;
//# sourceMappingURL=reducers.js.map