"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Wrapper_module_scss_1 = __importDefault(require("./Wrapper.module.scss"));
var Wrapper = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: Wrapper_module_scss_1.default.wrapper }, children);
};
exports.default = Wrapper;
//# sourceMappingURL=Wrapper.js.map