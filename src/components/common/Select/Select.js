"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Select_module_scss_1 = __importDefault(require("./Select.module.scss"));
var Select = function (_a) {
    var label = _a.label, name = _a.name, value = _a.value, onChange = _a.onChange, _b = _a.isLarge, isLarge = _b === void 0 ? false : _b, options = _a.options, selectGroupClassName = _a.selectGroupClassName;
    return (react_1.default.createElement("div", { className: classnames_1.default(Select_module_scss_1.default.selectGroup, selectGroupClassName) },
        label && (react_1.default.createElement("label", { htmlFor: name, className: Select_module_scss_1.default.label }, label)),
        react_1.default.createElement("select", { name: name, id: name, value: value, onChange: onChange, style: { width: isLarge ? '480px' : '240px' }, className: Select_module_scss_1.default.select }, options.map(function (_a) {
            var text = _a.text, optionValue = _a.value;
            return (react_1.default.createElement("option", { key: optionValue, value: optionValue, disabled: !optionValue }, text));
        }))));
};
exports.default = Select;
//# sourceMappingURL=Select.js.map