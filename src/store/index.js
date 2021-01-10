"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var redux_logger_1 = __importDefault(require("redux-logger"));
var reducers_1 = require("./reducers");
var enhancer = redux_1.applyMiddleware(redux_thunk_1.default, redux_logger_1.default);
var store = redux_1.createStore(reducers_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(enhancer));
exports.default = store;
//# sourceMappingURL=index.js.map