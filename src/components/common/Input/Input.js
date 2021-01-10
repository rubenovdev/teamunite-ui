"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Input_module_scss_1 = __importDefault(require("./Input.module.scss"));
var Input = function (_a) {
    var label = _a.label, name = _a.name, type = _a.type, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange, error = _a.error, inputGroupClassName = _a.inputGroupClassName, inputWidth = _a.inputWidth, required = _a.required;
    return (react_1.default.createElement("div", { className: classnames_1.default(Input_module_scss_1.default.inputGroup, inputGroupClassName) },
        label && (react_1.default.createElement("label", { className: Input_module_scss_1.default.label, htmlFor: name }, label)),
        react_1.default.createElement("div", { className: Input_module_scss_1.default.mainContent },
            react_1.default.createElement("input", { required: required, type: type, id: name, name: name, placeholder: placeholder, value: value, onChange: onChange, style: { width: (inputWidth || 480) + "px" }, className: classnames_1.default(Input_module_scss_1.default.input, value && Input_module_scss_1.default.inputActive, error && Input_module_scss_1.default.inputError) }),
            error && react_1.default.createElement("span", { className: Input_module_scss_1.default.errorMessage },
                "* ",
                error))));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map