"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
var Button = function (_a) {
    var type = _a.type, style = _a.style, _b = _a.isDisabled, isDisabled = _b === void 0 ? false : _b, text = _a.text, onClick = _a.onClick, _c = _a.isLarge, isLarge = _c === void 0 ? false : _c, className = _a.className;
    return (react_1.default.createElement("button", { type: type, disabled: isDisabled, onClick: onClick, style: { width: isLarge && '480px' }, className: classnames_1.default(Button_module_scss_1.default.button, Button_module_scss_1.default[style], className) }, text));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map