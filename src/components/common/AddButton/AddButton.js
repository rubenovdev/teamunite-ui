"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var AddButton_module_scss_1 = __importDefault(require("./AddButton.module.scss"));
var AddButton = function (_a) {
    var type = _a.type, onClick = _a.onClick, className = _a.className;
    return react_1.default.createElement("button", { type: type, onClick: onClick, className: classnames_1.default(AddButton_module_scss_1.default.button, className) });
};
exports.default = AddButton;
//# sourceMappingURL=AddButton.js.map