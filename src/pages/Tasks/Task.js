"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Button_1 = __importDefault(require("components/common/Button/Button"));
var Task_module_scss_1 = __importDefault(require("./Task.module.scss"));
var Task = function (_a) {
    var task = _a.task;
    var title = task.title, groups = task.groups, description = task.description;
    return (react_1.default.createElement("div", { className: Task_module_scss_1.default.container },
        react_1.default.createElement("h3", { className: Task_module_scss_1.default.title }, title),
        react_1.default.createElement("p", { className: Task_module_scss_1.default.groups }, groups.join(', ')),
        react_1.default.createElement("p", { className: Task_module_scss_1.default.description }, description),
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: Task_module_scss_1.default.viewButton },
            react_1.default.createElement(Button_1.default, { type: 'button', style: 'secondary', text: 'Просмотреть' })),
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/" },
            react_1.default.createElement(Button_1.default, { type: 'button', style: 'primary', text: 'Оценить' }))));
};
exports.default = Task;
//# sourceMappingURL=Task.js.map