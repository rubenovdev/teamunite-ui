"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var classnames_1 = __importDefault(require("classnames"));
var Header_module_scss_1 = __importDefault(require("./Header.module.scss"));
var logo_svg_1 = __importDefault(require("assets/images/logo.svg"));
var Header = function () {
    return (react_1.default.createElement("header", { className: Header_module_scss_1.default.header },
        react_1.default.createElement("img", { src: logo_svg_1.default, alt: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u041F\u043E\u043B\u0438\u0442\u0435\u0445", width: 140, height: 37, className: Header_module_scss_1.default.logo }),
        react_1.default.createElement("nav", null,
            react_1.default.createElement("ul", { className: Header_module_scss_1.default.menu },
                react_1.default.createElement("li", { className: Header_module_scss_1.default.menuItem },
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: classnames_1.default(Header_module_scss_1.default.menuLink, Header_module_scss_1.default.addFileIcon) })),
                react_1.default.createElement("li", { className: Header_module_scss_1.default.menuItem },
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: classnames_1.default(Header_module_scss_1.default.menuLink, Header_module_scss_1.default.layersIcon) })),
                react_1.default.createElement("li", { className: Header_module_scss_1.default.menuItem },
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: classnames_1.default(Header_module_scss_1.default.menuLink, Header_module_scss_1.default.logoutIcon) }))))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map