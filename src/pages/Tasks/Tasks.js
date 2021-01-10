"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var actions_1 = require("src/store/tasks/actions");
var selectors_1 = require("src/store/tasks/selectors");
var TasksView_1 = __importDefault(require("./TasksView"));
var Tasks = function () {
    var dispatch = react_redux_1.useDispatch();
    var errorMessage = react_redux_1.useSelector(function (state) { return selectors_1.selectError(state); });
    var tasks = react_redux_1.useSelector(function (state) { return selectors_1.selectTasks(state); });
    var getTasksCallback = function () { return dispatch(actions_1.getTasks()); };
    return react_1.default.createElement(TasksView_1.default, { getTasksCallback: getTasksCallback, tasks: tasks, errorMessage: errorMessage });
};
exports.default = Tasks;
//# sourceMappingURL=Tasks.js.map