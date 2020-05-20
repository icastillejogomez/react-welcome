"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactWelcome = /** @class */ (function (_super) {
    __extends(ReactWelcome, _super);
    function ReactWelcome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactWelcome.prototype.render = function () {
        if (this.props.hide) {
            return this.props.children;
        }
        return (React.createElement("div", { className: "root" },
            React.createElement("div", { className: "animation-container" },
                React.createElement("h4", { className: "message" }, this.props.message || '¡Bienvenido!')),
            React.createElement("div", { className: "children" }, this.props.children),
            React.createElement("style", { jsx: true }, "\n          .root {\n            display: relative;\n          }\n\n          .children {\n            position: absolut;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n          }\n\n          .animation-container {\n            position: absolute;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n            background-color: #000;\n            z-index: 1400;\n            opacity: .99;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            animation-name: welcome-animation;\n            animation-duration: 2s;\n            animation-delay: 4s;\n            animation-fill-mode: forwards;\n            will-change: opacity;\n          }\n\n          @keyframes welcome-animation {\n            from {\n              opacity: 1;\n            }\n\n            to { \n              opacity: 0;\n            }\n          }\n\n          .message {\n            color: white;\n            font-size: 32px;\n            font-weight: 100;\n            opacity: 0;\n            animation-name: message-animation;\n            animation-duration: 4s;\n            animation-delay: 1s;\n            animation-fill-mode: forwards;\n            will-change: opacity;\n          }\n\n          @keyframes message-animation {\n            from {\n              opacity: 0;\n            }\n\n            50% {\n              opacity: 1;\n            }\n\n            70% {\n              opacity: 1\n            }\n\n            to { \n              opacity: 0;\n            }\n          }\n\n        ")));
    };
    return ReactWelcome;
}(React.Component));
exports.default = ReactWelcome;
//# sourceMappingURL=ReactWelcome.js.map