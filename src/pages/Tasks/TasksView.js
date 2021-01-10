"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Input_1 = __importDefault(require("components/common/Input/Input"));
var useInput_1 = __importDefault(require("src/hooks/useInput"));
var Task_1 = __importDefault(require("./Task"));
var Tasks_module_scss_1 = __importDefault(require("./Tasks.module.scss"));
var TasksView = function (_a) {
    var getTasksCallback = _a.getTasksCallback, tasks = _a.tasks, errorMessage = _a.errorMessage;
    var search = useInput_1.default('');
    react_1.useEffect(function () {
        !tasks && getTasksCallback();
    }, [tasks, getTasksCallback]);
    var filter = function (arr) {
        return arr.filter(function (task) { return task.title.toLowerCase().includes(search.value.toString().toLowerCase().trim()); });
    };
    if (errorMessage) {
        return (react_1.default.createElement("div", { className: Tasks_module_scss_1.default.container },
            react_1.default.createElement("p", null, errorMessage)));
    }
    if ((tasks === null || tasks === void 0 ? void 0 : tasks.length) === 0) {
        return (react_1.default.createElement("div", { className: Tasks_module_scss_1.default.container },
            react_1.default.createElement("p", null, "\u0417\u0430\u0434\u0430\u0447 \u043D\u0435\u0442")));
    }
    if (!tasks && !errorMessage) {
        return (react_1.default.createElement("div", { className: Tasks_module_scss_1.default.container },
            react_1.default.createElement("p", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")));
    }
    return (react_1.default.createElement("div", { className: Tasks_module_scss_1.default.container },
        react_1.default.createElement("h2", { className: Tasks_module_scss_1.default.title }, "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430"),
        react_1.default.createElement(Input_1.default, { value: search.value, onChange: search.onChange, name: "search", type: "text", placeholder: "\u041F\u043E\u0438\u0441\u043A", inputGroupClassName: Tasks_module_scss_1.default.search, required: true }),
        react_1.default.createElement("div", null, filter(tasks).map(function (task) { return (react_1.default.createElement(Task_1.default, { key: task._id, task: task })); }))));
};
exports.default = TasksView;
//# sourceMappingURL=TasksView.js.map