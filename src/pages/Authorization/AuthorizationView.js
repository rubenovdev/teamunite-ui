"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var js_cookie_1 = __importDefault(require("js-cookie"));
var static_1 = require("src/static");
var useInput_1 = __importDefault(require("src/hooks/useInput"));
var Input_1 = __importDefault(require("components/common/Input/Input"));
var Button_1 = __importDefault(require("components/common/Button/Button"));
var Authorization_module_scss_1 = __importDefault(require("./Authorization.module.scss"));
var AuthorizationView = function (_a) {
    var errorMessage = _a.errorMessage, loginCallback = _a.loginCallback;
    var history = react_router_dom_1.useHistory();
    var email = useInput_1.default('');
    var password = useInput_1.default('');
    var buttonDisabled = !email.value || !password.value;
    var handleSubmit = function (e) {
        e.preventDefault();
        loginCallback({ email: email.value, password: password.value });
    };
    if (js_cookie_1.default.get(static_1.token)) {
        history.push('/tasks');
    }
    return (react_1.default.createElement("div", { className: Authorization_module_scss_1.default.container },
        react_1.default.createElement("h2", { className: Authorization_module_scss_1.default.title }, "\u0412\u0445\u043E\u0434"),
        react_1.default.createElement("p", { className: Authorization_module_scss_1.default.prompt }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u043D\u0430 e.mospolytech"),
        react_1.default.createElement("form", { onSubmit: handleSubmit, className: Authorization_module_scss_1.default.loginForm },
            react_1.default.createElement(Input_1.default, { value: email.value, onChange: email.onChange, label: "\u041B\u043E\u0433\u0438\u043D", name: "email", type: "email", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D", inputGroupClassName: Authorization_module_scss_1.default.inputGutter, required: true }),
            react_1.default.createElement(Input_1.default, { value: password.value, onChange: password.onChange, label: "\u041F\u0430\u0440\u043E\u043B\u044C", name: "password", type: "password", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", inputGroupClassName: Authorization_module_scss_1.default.inputGutter, required: true }),
            errorMessage && react_1.default.createElement("p", { className: Authorization_module_scss_1.default.errorMessage }, errorMessage),
            react_1.default.createElement(Button_1.default, { text: "\u0412\u043E\u0439\u0442\u0438", type: "submit", style: "primary", isDisabled: buttonDisabled }))));
};
exports.default = AuthorizationView;
//# sourceMappingURL=AuthorizationView.js.map