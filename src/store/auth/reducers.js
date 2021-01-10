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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountReducer = void 0;
var js_cookie_1 = __importDefault(require("js-cookie"));
var constants_1 = require("./constants");
var static_1 = require("src/static");
var initialState = { accessToken: js_cookie_1.default.get(static_1.token) || '', errorMessage: null };
var accountReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case constants_1.LOGIN_ERROR:
            var errorMessage = action.payload;
            return __assign(__assign({}, state), { errorMessage: errorMessage });
        default:
            return state;
    }
};
exports.accountReducer = accountReducer;
//# sourceMappingURL=reducers.js.map