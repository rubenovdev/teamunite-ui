"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useInput = function (initialValue) {
    var _a = __read(react_1.useState(initialValue), 2), value = _a[0], setValue = _a[1];
    var onChange = function (e) {
        setValue(e.target.value);
    };
    var clear = function () { return setValue(''); };
    return {
        value: value,
        onChange: onChange,
        clear: clear,
    };
};
exports.default = useInput;
//# sourceMappingURL=useInput.js.map