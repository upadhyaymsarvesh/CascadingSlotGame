"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FallingSymbol = void 0;

var _GameState2 = require("./../module/GameState");

var _Constant = require("../constants/Constant");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FallingSymbol = /*#__PURE__*/function (_GameState) {
  _inherits(FallingSymbol, _GameState);

  var _super = _createSuper(FallingSymbol);

  function FallingSymbol(app) {
    var _this;

    _classCallCheck(this, FallingSymbol);

    _this = _super.call(this, app);

    _defineProperty(_assertThisInitialized(_this), "symbolContainer", void 0);

    _defineProperty(_assertThisInitialized(_this), "isInited", false);

    _defineProperty(_assertThisInitialized(_this), "finishedMoving", []);

    _defineProperty(_assertThisInitialized(_this), "allowedToMove", []);

    _defineProperty(_assertThisInitialized(_this), "allowedRows", []);

    _this.symbolContainer = app.symbols.container;
    return _this;
  }

  _createClass(FallingSymbol, [{
    key: "execute",
    value: function execute() {
      if (!this.isInited) {
        this.init();
      }

      var allFinished = true;

      for (var i = 0; i < _Constant.Constants.TOTAL_ROWS; i++) {
        if (this.allowedRows[i]) {
          for (var j = 0; j < _Constant.Constants.SYMBOLS_PER_ROW; j++) {
            if (this.allowedToMove[i][j]) {
              if (!this.finishedMoving[i][j]) {
                allFinished = false;
                var ind = _Constant.Constants.SYMBOLS_PER_ROW * i + j;
                var _symbol = this.symbolContainer.children[ind];
                _symbol.vy += 5;
                _symbol.y += _symbol.vy;

                if (this.isFinishedMoving(_symbol)) {
                  this.finishedMoving[i][j] = true;
                  _symbol.vy = 0;
                  this.onSymbolFinishedMoving(_symbol);
                }
              }
            } else {
              allFinished = false;
            }
          }
        } else {
          allFinished = false;
        }
      }

      if (allFinished) {
        this.onFinished();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      for (var i = 0; i < _Constant.Constants.TOTAL_ROWS; i++) {
        var allowedRow = [];

        for (var j = 0; j < _Constant.Constants.SYMBOLS_PER_ROW; j++) {
          allowedRow.push(false);
        }

        this.allowedToMove.push(allowedRow);
      }

      for (var _i = 0; _i < _Constant.Constants.TOTAL_ROWS; _i++) {
        var finishedRow = [];

        for (var _j = 0; _j < _Constant.Constants.SYMBOLS_PER_ROW; _j++) {
          finishedRow.push(false);
        }

        this.finishedMoving.push(finishedRow);
      }

      for (var _i2 = 0; _i2 < _Constant.Constants.TOTAL_ROWS; _i2++) {
        this.allowedRows.push(false);
      }

      var currentRow = 0;
      var rowsInterval = setInterval(function () {
        _this2.allowedRows[currentRow] = true;
        var currentSymbol = 0;
        var rowInterval = setInterval(function (row) {
          // @ts-ignore
          this.allowedToMove[row][currentSymbol] = true;
          currentSymbol++;

          if (currentSymbol === _Constant.Constants.SYMBOLS_PER_ROW) {
            clearInterval(rowInterval);
          }
        }.bind(_this2, currentRow), 50);
        currentRow++;

        if (currentRow === _Constant.Constants.TOTAL_ROWS) {
          clearInterval(rowsInterval);
        }
      }.bind(this), 100);
      this.isInited = true;
    }
  }, {
    key: "onFinished",
    value: function onFinished() {
      this.app.setGameState(this.getNextState());
    }
  }]);

  return FallingSymbol;
}(_GameState2.GameState);

exports.FallingSymbol = FallingSymbol;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL0ZhbGxpbmdTeW1ib2wudHMiXSwibmFtZXMiOlsiRmFsbGluZ1N5bWJvbCIsImFwcCIsInN5bWJvbENvbnRhaW5lciIsInN5bWJvbHMiLCJjb250YWluZXIiLCJpc0luaXRlZCIsImluaXQiLCJhbGxGaW5pc2hlZCIsImkiLCJDb25zdGFudHMiLCJUT1RBTF9ST1dTIiwiYWxsb3dlZFJvd3MiLCJqIiwiU1lNQk9MU19QRVJfUk9XIiwiYWxsb3dlZFRvTW92ZSIsImZpbmlzaGVkTW92aW5nIiwiaW5kIiwic3ltYm9sIiwiY2hpbGRyZW4iLCJ2eSIsInkiLCJpc0ZpbmlzaGVkTW92aW5nIiwib25TeW1ib2xGaW5pc2hlZE1vdmluZyIsIm9uRmluaXNoZWQiLCJhbGxvd2VkUm93IiwicHVzaCIsImZpbmlzaGVkUm93IiwiY3VycmVudFJvdyIsInJvd3NJbnRlcnZhbCIsInNldEludGVydmFsIiwiY3VycmVudFN5bWJvbCIsInJvd0ludGVydmFsIiwicm93IiwiY2xlYXJJbnRlcnZhbCIsImJpbmQiLCJzZXRHYW1lU3RhdGUiLCJnZXROZXh0U3RhdGUiLCJHYW1lU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFc0JBLGE7Ozs7O0FBT2xCLHlCQUFZQyxHQUFaLEVBQXNCO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxHQUFOOztBQURrQjs7QUFBQSwrREFMUSxLQUtSOztBQUFBLHFFQUo0QixFQUk1Qjs7QUFBQSxvRUFIMkIsRUFHM0I7O0FBQUEsa0VBRmtCLEVBRWxCOztBQUVsQixVQUFLQyxlQUFMLEdBQXdCRCxHQUFHLENBQUNFLE9BQUwsQ0FBaUNDLFNBQXhEO0FBRmtCO0FBR3JCOzs7O1dBRUQsbUJBQWdCO0FBQ1osVUFBSSxDQUFDLEtBQUtDLFFBQVYsRUFBb0I7QUFDaEIsYUFBS0MsSUFBTDtBQUNIOztBQUNELFVBQUlDLFdBQVcsR0FBRyxJQUFs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QS9CO0FBQ0EsWUFBSUcsYUFBYSxHQUFHLENBQXBCO0FBQ0EsWUFBSUMsV0FBVyxHQUFHRixXQUFXLENBQUUsVUFBVUcsR0FBVixFQUF1QjtBQUNsRDtBQUNBLGVBQUtsQixhQUFMLENBQW1Ca0IsR0FBbkIsRUFBd0JGLGFBQXhCLElBQXlDLElBQXpDO0FBQ0FBLFVBQUFBLGFBQWE7O0FBQ2IsY0FBSUEsYUFBYSxLQUFLckIsb0JBQVVJLGVBQWhDLEVBQWlEO0FBQzdDb0IsWUFBQUEsYUFBYSxDQUFDRixXQUFELENBQWI7QUFDSDtBQUNKLFNBUDZCLENBTzNCRyxJQVAyQixDQU90QixNQVBzQixFQU9oQlAsVUFQZ0IsQ0FBRCxFQU9GLEVBUEUsQ0FBN0I7QUFRQUEsUUFBQUEsVUFBVTs7QUFDVixZQUFJQSxVQUFVLEtBQUtsQixvQkFBVUMsVUFBN0IsRUFBeUM7QUFDckN1QixVQUFBQSxhQUFhLENBQUNMLFlBQUQsQ0FBYjtBQUNIO0FBQ0osT0FmOEIsQ0FlNUJNLElBZjRCLENBZXZCLElBZnVCLENBQUQsRUFlZixHQWZlLENBQTlCO0FBZ0JBLFdBQUs3QixRQUFMLEdBQWdCLElBQWhCO0FBQ0g7OztXQVFELHNCQUE2QjtBQUN6QixXQUFLSixHQUFMLENBQVNrQyxZQUFULENBQXNCLEtBQUtDLFlBQUwsRUFBdEI7QUFDSDs7OztFQTVGdUNDLHFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gXCIuLy4uL21vZHVsZS9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IHtBcHB9IGZyb20gXCIuLi9BcHBcIjtcclxuaW1wb3J0IHtTeW1ib2xDb250YWluZXJ9IGZyb20gXCIuLi92aWV3L1N5bWJvbENvbnRhaW5lclwiO1xyXG5pbXBvcnQge01vdmluZ09ian0gZnJvbSBcIi4uL3ZpZXcvTW92aW5nT2JqXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHMvQ29uc3RhbnRcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWxsaW5nU3ltYm9sIGV4dGVuZHMgR2FtZVN0YXRlIHtcclxuICAgIHByb3RlY3RlZCBzeW1ib2xDb250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgcHJvdGVjdGVkIGlzSW5pdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgZmluaXNoZWRNb3Zpbmc6IEFycmF5PEFycmF5PGJvb2xlYW4+PiA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIGFsbG93ZWRUb01vdmU6IEFycmF5PEFycmF5PGJvb2xlYW4+PiA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIGFsbG93ZWRSb3dzOiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwKTtcclxuICAgICAgICB0aGlzLnN5bWJvbENvbnRhaW5lciA9IChhcHAuc3ltYm9scyBhcyBTeW1ib2xDb250YWluZXIpLmNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0luaXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFsbEZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbnN0YW50cy5UT1RBTF9ST1dTOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dlZFJvd3NbaV0pIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uc3RhbnRzLlNZTUJPTFNfUEVSX1JPVzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dlZFRvTW92ZVtpXVtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmluaXNoZWRNb3ZpbmdbaV1bal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbEZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kID0gQ29uc3RhbnRzLlNZTUJPTFNfUEVSX1JPVyAqIGkgKyBqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN5bWJvbCA9IHRoaXMuc3ltYm9sQ29udGFpbmVyLmNoaWxkcmVuW2luZF0gYXMgTW92aW5nT2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sLnZ5ICs9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wueSArPSBzeW1ib2wudnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0ZpbmlzaGVkTW92aW5nKHN5bWJvbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkTW92aW5nW2ldW2pdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wudnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TeW1ib2xGaW5pc2hlZE1vdmluZyhzeW1ib2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsRmluaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGxGaW5pc2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbGxGaW5pc2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRmluaXNoZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25zdGFudHMuVE9UQUxfUk9XUzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxvd2VkUm93OiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvbnN0YW50cy5TWU1CT0xTX1BFUl9ST1c7IGorKykge1xyXG4gICAgICAgICAgICAgICAgYWxsb3dlZFJvdy5wdXNoKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFsbG93ZWRUb01vdmUucHVzaChhbGxvd2VkUm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25zdGFudHMuVE9UQUxfUk9XUzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBmaW5pc2hlZFJvdzogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDb25zdGFudHMuU1lNQk9MU19QRVJfUk9XOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGZpbmlzaGVkUm93LnB1c2goZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRNb3ZpbmcucHVzaChmaW5pc2hlZFJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uc3RhbnRzLlRPVEFMX1JPV1M7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFsbG93ZWRSb3dzLnB1c2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3VycmVudFJvdyA9IDA7XHJcbiAgICAgICAgbGV0IHJvd3NJbnRlcnZhbCA9IHNldEludGVydmFsKCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsb3dlZFJvd3NbY3VycmVudFJvd10gPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFN5bWJvbCA9IDA7XHJcbiAgICAgICAgICAgIGxldCByb3dJbnRlcnZhbCA9IHNldEludGVydmFsKChmdW5jdGlvbiAocm93OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dlZFRvTW92ZVtyb3ddW2N1cnJlbnRTeW1ib2xdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTeW1ib2wrKztcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3ltYm9sID09PSBDb25zdGFudHMuU1lNQk9MU19QRVJfUk9XKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChyb3dJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmJpbmQodGhpcywgY3VycmVudFJvdyksIDUwKTtcclxuICAgICAgICAgICAgY3VycmVudFJvdysrO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFJvdyA9PT0gQ29uc3RhbnRzLlRPVEFMX1JPV1MpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocm93c0ludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmJpbmQodGhpcyksIDEwMCk7XHJcbiAgICAgICAgdGhpcy5pc0luaXRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGlzRmluaXNoZWRNb3Zpbmcoc3ltYm9sOiBNb3ZpbmdPYmopOiBib29sZWFuO1xyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXROZXh0U3RhdGUoKTogR2FtZVN0YXRlO1xyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvblN5bWJvbEZpbmlzaGVkTW92aW5nKHN5bWJvbDogTW92aW5nT2JqKTogdm9pZDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25GaW5pc2hlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFwcC5zZXRHYW1lU3RhdGUodGhpcy5nZXROZXh0U3RhdGUoKSk7XHJcbiAgICB9XHJcbn0iXX0=