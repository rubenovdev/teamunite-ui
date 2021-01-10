"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Checkbox_module_scss_1 = __importDefault(require("./Checkbox.module.scss"));
var Checkbox = function (_a) {
    var name = _a.name, _b = _a.isChecked, isChecked = _b === void 0 ? false : _b, onChange = _a.onChange, className = _a.className;
    return (react_1.default.createElement("label", { htmlFor: name, className: classnames_1.default(Checkbox_module_scss_1.default.checkboxWrapper, className) },
        react_1.default.createElement("input", { type: "checkbox", id: name, defaultChecked: isChecked, onChange: onChange, className: Checkbox_module_scss_1.default.checkbox }),
        react_1.default.createElement("span", { className: Checkbox_module_scss_1.default.box })));
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map