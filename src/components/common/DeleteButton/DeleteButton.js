"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var DeleteButton_module_scss_1 = __importDefault(require("./DeleteButton.module.scss"));
var DeleteButton = function (_a) {
    var type = _a.type, onClick = _a.onClick, className = _a.className;
    return react_1.default.createElement("button", { type: type, onClick: onClick, className: classnames_1.default(DeleteButton_module_scss_1.default.button, className) });
};
exports.default = DeleteButton;
//# sourceMappingURL=DeleteButton.js.map