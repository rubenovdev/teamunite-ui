"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectError = exports.selectTasks = void 0;
var selectTasks = function (state) { return state.tasks.data; };
exports.selectTasks = selectTasks;
var selectError = function (state) { return state.tasks.errorMessage; };
exports.selectError = selectError;
//# sourceMappingURL=selectors.js.map