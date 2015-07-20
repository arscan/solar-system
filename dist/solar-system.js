"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _planet = require("planet");

var _planet2 = _interopRequireDefault(_planet);

document.write(new _planet2["default"]("Hi"));
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Planet = (function () {
    function Planet() {
        var name = arguments.length <= 0 || arguments[0] === undefined ? "Planel" : arguments[0];

        _classCallCheck(this, Planet);

        this.name = name;
    }

    _createClass(Planet, [{
        key: "calculate",
        value: function calculate() {}
    }]);

    return Planet;
})();

exports["default"] = Planet;
module.exports = exports["default"];
//# sourceMappingURL=solar-system.js.map