"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FallToView = void 0;

var _FallingSymbol2 = require("./FallingSymbol");

var _Game = require("./../module/Game");

var _SymbolContainer = require("../view/SymbolContainer");

var _Button = require("../view/button/Button");

var PIXI = _interopRequireWildcard(require("pixi.js"));

var _Constant = require("../constants/Constant");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FallToView = /*#__PURE__*/function (_FallingSymbol) {
  _inherits(FallToView, _FallingSymbol);

  var _super = _createSuper(FallToView);

  function FallToView() {
    _classCallCheck(this, FallToView);

    return _super.apply(this, arguments);
  }

  _createClass(FallToView, [{
    key: "getNextState",
    value: function getNextState() {
      return new _Game.Game(this.app);
    }
  }, {
    key: "isFinishedMoving",
    value: function isFinishedMoving(symbol) {
      var finalY = this.getFinalY(symbol);
      return symbol.y >= finalY;
    }
  }, {
    key: "onSymbolFinishedMoving",
    value: function onSymbolFinishedMoving(symbol) {
      this.app.sounds.playRandomReelStopSound();
      symbol.y = this.getFinalY(symbol);
    }
  }, {
    key: "init",
    value: function init() {
      for (var i = 0; i < _Constant.Constants.TOTAL_ROWS; i++) {
        for (var j = 0; j < _Constant.Constants.SYMBOLS_PER_ROW; j++) {
          var ind = _Constant.Constants.SYMBOLS_PER_ROW * i + j;
          var symbol = this.symbolContainer.children[ind];
          var globalPosition = new PIXI.Point(symbol.x, _Constant.Constants.SYMBOL_HEIGHT * (-1 - i));
          var localPosition = symbol.toLocal(globalPosition, this.symbolContainer);
          symbol.y = localPosition.y;
          symbol.texture = _SymbolContainer.SymbolContainer.getRandomTexture();
        }
      }

      _get(_getPrototypeOf(FallToView.prototype), "init", this).call(this);
    }
  }, {
    key: "onFinished",
    value: function onFinished() {
      _get(_getPrototypeOf(FallToView.prototype), "onFinished", this).call(this);

      this.app.button.setState(_Button.ButtonState.NORMAL);
    }
  }, {
    key: "getFinalY",
    value: function getFinalY(symbol) {
      var ind = this.symbolContainer.children.indexOf(symbol);
      var rowInd = Math.floor(ind / _Constant.Constants.SYMBOLS_PER_ROW);
      return (_Constant.Constants.TOTAL_ROWS - 1 - rowInd) * _Constant.Constants.SYMBOL_HEIGHT;
    }
  }]);

  return FallToView;
}(_FallingSymbol2.FallingSymbol);

exports.FallToView = FallToView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL0ZhbGxUb1ZpZXcudHMiXSwibmFtZXMiOlsiRmFsbFRvVmlldyIsIkdhbWUiLCJhcHAiLCJzeW1ib2wiLCJmaW5hbFkiLCJnZXRGaW5hbFkiLCJ5Iiwic291bmRzIiwicGxheVJhbmRvbVJlZWxTdG9wU291bmQiLCJpIiwiQ29uc3RhbnRzIiwiVE9UQUxfUk9XUyIsImoiLCJTWU1CT0xTX1BFUl9ST1ciLCJpbmQiLCJzeW1ib2xDb250YWluZXIiLCJjaGlsZHJlbiIsImdsb2JhbFBvc2l0aW9uIiwiUElYSSIsIlBvaW50IiwieCIsIlNZTUJPTF9IRUlHSFQiLCJsb2NhbFBvc2l0aW9uIiwidG9Mb2NhbCIsInRleHR1cmUiLCJTeW1ib2xDb250YWluZXIiLCJnZXRSYW5kb21UZXh0dXJlIiwiYnV0dG9uIiwic2V0U3RhdGUiLCJCdXR0b25TdGF0ZSIsIk5PUk1BTCIsImluZGV4T2YiLCJyb3dJbmQiLCJNYXRoIiwiZmxvb3IiLCJGYWxsaW5nU3ltYm9sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLFU7Ozs7Ozs7Ozs7Ozs7V0FDVCx3QkFBb0M7QUFDaEMsYUFBTyxJQUFJQyxVQUFKLENBQVMsS0FBS0MsR0FBZCxDQUFQO0FBQ0g7OztXQUVELDBCQUEyQkMsTUFBM0IsRUFBdUQ7QUFDbkQsVUFBSUMsTUFBTSxHQUFHLEtBQUtDLFNBQUwsQ0FBZUYsTUFBZixDQUFiO0FBQ0EsYUFBT0EsTUFBTSxDQUFDRyxDQUFQLElBQVlGLE1BQW5CO0FBQ0g7OztXQUVELGdDQUFpQ0QsTUFBakMsRUFBMEQ7QUFDdEQsV0FBS0QsR0FBTCxDQUFTSyxNQUFULENBQWdCQyx1QkFBaEI7QUFDQUwsTUFBQUEsTUFBTSxDQUFDRyxDQUFQLEdBQVcsS0FBS0QsU0FBTCxDQUFlRixNQUFmLENBQVg7QUFDSDs7O1dBRUQsZ0JBQXVCO0FBQ25CLFdBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0Msb0JBQVVDLFVBQTlCLEVBQTBDRixDQUFDLEVBQTNDLEVBQStDO0FBQzNDLGFBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0Ysb0JBQVVHLGVBQTlCLEVBQStDRCxDQUFDLEVBQWhELEVBQW9EO0FBQ2hELGNBQUlFLEdBQUcsR0FBR0osb0JBQVVHLGVBQVYsR0FBNEJKLENBQTVCLEdBQWdDRyxDQUExQztBQUNBLGNBQUlULE1BQU0sR0FBRyxLQUFLWSxlQUFMLENBQXFCQyxRQUFyQixDQUE4QkYsR0FBOUIsQ0FBYjtBQUNBLGNBQUlHLGNBQWMsR0FBRyxJQUFJQyxJQUFJLENBQUNDLEtBQVQsQ0FBZWhCLE1BQU0sQ0FBQ2lCLENBQXRCLEVBQXlCVixvQkFBVVcsYUFBVixJQUEyQixDQUFDLENBQUQsR0FBS1osQ0FBaEMsQ0FBekIsQ0FBckI7QUFDQSxjQUFJYSxhQUFhLEdBQUduQixNQUFNLENBQUNvQixPQUFQLENBQWVOLGNBQWYsRUFBK0IsS0FBS0YsZUFBcEMsQ0FBcEI7QUFDQVosVUFBQUEsTUFBTSxDQUFDRyxDQUFQLEdBQVdnQixhQUFhLENBQUNoQixDQUF6QjtBQUNBSCxVQUFBQSxNQUFNLENBQUNxQixPQUFQLEdBQWlCQyxpQ0FBZ0JDLGdCQUFoQixFQUFqQjtBQUNIO0FBQ0o7O0FBQ0Q7QUFDSDs7O1dBRUQsc0JBQTZCO0FBQ3pCOztBQUNDLFdBQUt4QixHQUFMLENBQVN5QixNQUFWLENBQTRCQyxRQUE1QixDQUFxQ0Msb0JBQVlDLE1BQWpEO0FBQ0g7OztXQUVELG1CQUFrQjNCLE1BQWxCLEVBQTZDO0FBQ3pDLFVBQUlXLEdBQUcsR0FBRyxLQUFLQyxlQUFMLENBQXFCQyxRQUFyQixDQUE4QmUsT0FBOUIsQ0FBc0M1QixNQUF0QyxDQUFWO0FBQ0EsVUFBSTZCLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdwQixHQUFHLEdBQUdKLG9CQUFVRyxlQUEzQixDQUFiO0FBQ0EsYUFBTyxDQUFDSCxvQkFBVUMsVUFBVixHQUF1QixDQUF2QixHQUEyQnFCLE1BQTVCLElBQXNDdEIsb0JBQVVXLGFBQXZEO0FBQ0g7Ozs7RUF0QzJCYyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZVN0YXRlfSBmcm9tIFwiLi8uLi9tb2R1bGUvR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7RmFsbGluZ1N5bWJvbH0gZnJvbSBcIi4vRmFsbGluZ1N5bWJvbFwiO1xyXG5pbXBvcnQge01vdmluZ09ian0gZnJvbSBcIi4uL3ZpZXcvTW92aW5nT2JqXCI7XHJcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4vLi4vbW9kdWxlL0dhbWVcIjtcclxuaW1wb3J0IHtTeW1ib2xDb250YWluZXJ9IGZyb20gXCIuLi92aWV3L1N5bWJvbENvbnRhaW5lclwiO1xyXG5pbXBvcnQge0J1dHRvblN0YXRlfSBmcm9tIFwiLi4vdmlldy9idXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vdmlldy9idXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHMvQ29uc3RhbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWxsVG9WaWV3IGV4dGVuZHMgRmFsbGluZ1N5bWJvbCB7XHJcbiAgICBwcm90ZWN0ZWQgZ2V0TmV4dFN0YXRlKCk6IEdhbWVTdGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHYW1lKHRoaXMuYXBwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNGaW5pc2hlZE1vdmluZyhzeW1ib2w6IE1vdmluZ09iaik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBmaW5hbFkgPSB0aGlzLmdldEZpbmFsWShzeW1ib2wpO1xyXG4gICAgICAgIHJldHVybiBzeW1ib2wueSA+PSBmaW5hbFk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU3ltYm9sRmluaXNoZWRNb3Zpbmcoc3ltYm9sOiBNb3ZpbmdPYmopOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFwcC5zb3VuZHMucGxheVJhbmRvbVJlZWxTdG9wU291bmQoKTtcclxuICAgICAgICBzeW1ib2wueSA9IHRoaXMuZ2V0RmluYWxZKHN5bWJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25zdGFudHMuVE9UQUxfUk9XUzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uc3RhbnRzLlNZTUJPTFNfUEVSX1JPVzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kID0gQ29uc3RhbnRzLlNZTUJPTFNfUEVSX1JPVyAqIGkgKyBqO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN5bWJvbCA9IHRoaXMuc3ltYm9sQ29udGFpbmVyLmNoaWxkcmVuW2luZF0gYXMgTW92aW5nT2JqO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdsb2JhbFBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoc3ltYm9sLngsIENvbnN0YW50cy5TWU1CT0xfSEVJR0hUICogKC0xIC0gaSkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zaXRpb24gPSBzeW1ib2wudG9Mb2NhbChnbG9iYWxQb3NpdGlvbiwgdGhpcy5zeW1ib2xDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgc3ltYm9sLnkgPSBsb2NhbFBvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgICAgICBzeW1ib2wudGV4dHVyZSA9IFN5bWJvbENvbnRhaW5lci5nZXRSYW5kb21UZXh0dXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkZpbmlzaGVkKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uRmluaXNoZWQoKTtcclxuICAgICAgICAodGhpcy5hcHAuYnV0dG9uIGFzIEJ1dHRvbikuc2V0U3RhdGUoQnV0dG9uU3RhdGUuTk9STUFMKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEZpbmFsWShzeW1ib2w6IE1vdmluZ09iaik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGluZCA9IHRoaXMuc3ltYm9sQ29udGFpbmVyLmNoaWxkcmVuLmluZGV4T2Yoc3ltYm9sKTtcclxuICAgICAgICBsZXQgcm93SW5kID0gTWF0aC5mbG9vcihpbmQgLyBDb25zdGFudHMuU1lNQk9MU19QRVJfUk9XKTtcclxuICAgICAgICByZXR1cm4gKENvbnN0YW50cy5UT1RBTF9ST1dTIC0gMSAtIHJvd0luZCkgKiBDb25zdGFudHMuU1lNQk9MX0hFSUdIVDtcclxuICAgIH1cclxufSJdfQ==