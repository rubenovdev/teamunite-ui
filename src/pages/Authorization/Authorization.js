"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var actions_1 = require("src/store/auth/actions");
var selectors_1 = require("src/store/auth/selectors");
var AuthorizationView_1 = __importDefault(require("./AuthorizationView"));
var Authorization = function () {
    var dispatch = react_redux_1.useDispatch();
    var errorMessage = react_redux_1.useSelector(function (state) { return selectors_1.selectError(state); });
    var loginCallback = function (data) { return dispatch(actions_1.login(data)); };
    return react_1.default.createElement(AuthorizationView_1.default, { loginCallback: loginCallback, errorMessage: errorMessage });
};
exports.default = Authorization;
//# sourceMappingURL=Authorization.js.map