"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FallDown = void 0;

var _FallToView = require("./FallToView");

var _FallingSymbol2 = require("./FallingSymbol");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FallDown = /*#__PURE__*/function (_FallingSymbol) {
  _inherits(FallDown, _FallingSymbol);

  var _super = _createSuper(FallDown);

  function FallDown() {
    _classCallCheck(this, FallDown);

    return _super.apply(this, arguments);
  }

  _createClass(FallDown, [{
    key: "getNextState",
    value: function getNextState() {
      return new _FallToView.FallToView(this.app);
    }
  }, {
    key: "isFinishedMoving",
    value: function isFinishedMoving(symbol) {
      return symbol.getGlobalPosition().y >= 720;
    }
  }, {
    key: "onSymbolFinishedMoving",
    value: function onSymbolFinishedMoving() {}
  }]);

  return FallDown;
}(_FallingSymbol2.FallingSymbol);

exports.FallDown = FallDown;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL0ZhbGxEb3duLnRzIl0sIm5hbWVzIjpbIkZhbGxEb3duIiwiRmFsbFRvVmlldyIsImFwcCIsInN5bWJvbCIsImdldEdsb2JhbFBvc2l0aW9uIiwieSIsIkZhbGxpbmdTeW1ib2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLFE7Ozs7Ozs7Ozs7Ozs7V0FDVCx3QkFBb0M7QUFDaEMsYUFBTyxJQUFJQyxzQkFBSixDQUFlLEtBQUtDLEdBQXBCLENBQVA7QUFDSDs7O1dBRUQsMEJBQTJCQyxNQUEzQixFQUF1RDtBQUNuRCxhQUFPQSxNQUFNLENBQUNDLGlCQUFQLEdBQTJCQyxDQUEzQixJQUFnQyxHQUF2QztBQUNIOzs7V0FFRCxrQ0FBeUMsQ0FDeEM7Ozs7RUFWeUJDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb3ZpbmdPYmp9IGZyb20gXCIuLi92aWV3L01vdmluZ09ialwiO1xyXG5pbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSBcIi4vLi4vbW9kdWxlL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQge0ZhbGxUb1ZpZXd9IGZyb20gXCIuL0ZhbGxUb1ZpZXdcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9Db25zdGFudFwiO1xyXG5pbXBvcnQgeyBGYWxsaW5nU3ltYm9sIH0gZnJvbSBcIi4vRmFsbGluZ1N5bWJvbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhbGxEb3duIGV4dGVuZHMgRmFsbGluZ1N5bWJvbCB7XHJcbiAgICBwcm90ZWN0ZWQgZ2V0TmV4dFN0YXRlKCk6IEdhbWVTdGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGYWxsVG9WaWV3KHRoaXMuYXBwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNGaW5pc2hlZE1vdmluZyhzeW1ib2w6IE1vdmluZ09iaik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBzeW1ib2wuZ2V0R2xvYmFsUG9zaXRpb24oKS55ID49IDcyMDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TeW1ib2xGaW5pc2hlZE1vdmluZygpOiB2b2lkIHtcclxuICAgIH1cclxufSJdfQ==