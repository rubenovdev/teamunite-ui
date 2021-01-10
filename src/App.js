"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var js_cookie_1 = __importDefault(require("js-cookie"));
var static_1 = require("src/static");
var Wrapper_1 = __importDefault(require("components/Wrapper/Wrapper"));
var Header_1 = __importDefault(require("components/Header/Header"));
var SideMenu_1 = __importDefault(require("components/SideMenu/SideMenu"));
var Authorization_1 = __importDefault(require("./pages/Authorization/Authorization"));
var Tasks_1 = __importDefault(require("./pages/Tasks/Tasks"));
var App = function () {
    var privateRoute = function (page) {
        if (js_cookie_1.default.get(static_1.token)) {
            return page;
        }
        else {
            return react_1.default.createElement(react_router_dom_1.Redirect, { to: "/auth" });
        }
    };
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Wrapper_1.default, null,
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(SideMenu_1.default, null),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/auth", component: Authorization_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/tasks", render: function () { return privateRoute(react_1.default.createElement(Tasks_1.default, null)); } })))));
};
exports.default = App;
//# sourceMappingURL=App.js.map