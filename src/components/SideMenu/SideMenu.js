"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var classnames_1 = __importDefault(require("classnames"));
var SideMenu_module_scss_1 = __importDefault(require("./SideMenu.module.scss"));
var SideMenu = function () {
    return (react_1.default.createElement("aside", { className: SideMenu_module_scss_1.default.sideMenu },
        react_1.default.createElement("nav", { className: SideMenu_module_scss_1.default.nav },
            react_1.default.createElement("ul", { className: SideMenu_module_scss_1.default.menu },
                react_1.default.createElement("li", { className: SideMenu_module_scss_1.default.menuItem },
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: classnames_1.default(SideMenu_module_scss_1.default.menuLink, SideMenu_module_scss_1.default.checkIcon) })),
                react_1.default.createElement("li", { className: SideMenu_module_scss_1.default.menuItem },
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: classnames_1.default(SideMenu_module_scss_1.default.menuLink, SideMenu_module_scss_1.default.retakeIcon) })),
                react_1.default.createElement("li", { className: SideMenu_module_scss_1.default.menuItem },
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: classnames_1.default(SideMenu_module_scss_1.default.menuLink, SideMenu_module_scss_1.default.dashboardIcon) })),
                react_1.default.createElement("li", { className: SideMenu_module_scss_1.default.menuItem },
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: classnames_1.default(SideMenu_module_scss_1.default.menuLink, SideMenu_module_scss_1.default.addAdminIcon) }))))));
};
exports.default = SideMenu;
//# sourceMappingURL=SideMenu.js.map