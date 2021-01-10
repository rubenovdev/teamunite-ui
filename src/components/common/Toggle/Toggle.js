"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Toggle_module_scss_1 = __importDefault(require("./Toggle.module.scss"));
var Toggle = function (_a) {
    var label = _a.label, name = _a.name, _b = _a.isChecked, isChecked = _b === void 0 ? false : _b, onChange = _a.onChange, toggleWrapperClassName = _a.toggleWrapperClassName;
    return (react_1.default.createElement("div", { className: classnames_1.default(Toggle_module_scss_1.default.toggleWrapper, toggleWrapperClassName) },
        label && (react_1.default.createElement("label", { className: Toggle_module_scss_1.default.label, htmlFor: name }, label)),
        react_1.default.createElement("label", { htmlFor: name, className: Toggle_module_scss_1.default.toggle },
            react_1.default.createElement("input", { type: "checkbox", id: name, defaultChecked: isChecked, onChange: onChange, className: Toggle_module_scss_1.default.checkbox }),
            react_1.default.createElement("span", { className: Toggle_module_scss_1.default.slider }))));
};
exports.default = Toggle;
//# sourceMappingURL=Toggle.js.map