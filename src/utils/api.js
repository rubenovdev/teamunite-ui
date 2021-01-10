"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var js_cookie_1 = __importDefault(require("js-cookie"));
var static_1 = require("src/static");
exports.default = axios_1.default.create({
    baseURL: 'https://api.teamunite.ru/v1',
    headers: { Authorization: "Bearer " + js_cookie_1.default.get(static_1.token) },
});
//# sourceMappingURL=api.js.map