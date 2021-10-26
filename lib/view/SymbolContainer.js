"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SymbolContainer = exports.SymbolValue = void 0;

var _Symbol3 = require("./Symbol");

var PIXI = _interopRequireWildcard(require("pixi.js"));

var _MovingObj = require("./MovingObj");

var _Constant = require("./../constants/Constant");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var SymbolValue;
exports.SymbolValue = SymbolValue;

(function (SymbolValue) {
  SymbolValue[SymbolValue["LION"] = 1] = "LION";
  SymbolValue[SymbolValue["MONKEY"] = 2] = "MONKEY";
  SymbolValue[SymbolValue["BIRD"] = 3] = "BIRD";
  SymbolValue[SymbolValue["BEAR"] = 4] = "BEAR";
  SymbolValue[SymbolValue["EGG"] = 5] = "EGG";
  SymbolValue[SymbolValue["LEAF"] = 6] = "LEAF";
  SymbolValue[SymbolValue["CHILLI"] = 7] = "CHILLI";
  SymbolValue[SymbolValue["DIAMOND"] = 8] = "DIAMOND";
})(SymbolValue || (exports.SymbolValue = SymbolValue = {}));

var SymbolContainer = /*#__PURE__*/function (_Symbol2) {
  _inherits(SymbolContainer, _Symbol2);

  var _super = _createSuper(SymbolContainer);

  function SymbolContainer(app) {
    var _this;

    _classCallCheck(this, SymbolContainer);

    _this = _super.call(this, app);

    _defineProperty(_assertThisInitialized(_this), "container", void 0);

    _this.container = new PIXI.Container();

    if (!SymbolContainer.isTextureMap) {
      SymbolContainer.initTextureMap();
    }

    return _this;
  }

  _createClass(SymbolContainer, [{
    key: "show",
    value: function show() {
      for (var i = 0; i < _Constant.Constants.TOTAL_ROWS; i++) {
        for (var j = 0; j < _Constant.Constants.SYMBOLS_PER_ROW; j++) {
          var symbol = new _MovingObj.MovingObj(SymbolContainer.getRandomTexture());
          symbol.width = _Constant.Constants.SYMBOL_WIDTH;
          symbol.height = _Constant.Constants.SYMBOL_HEIGHT;
          symbol.x = _Constant.Constants.SYMBOL_WIDTH * j;
          symbol.y = _Constant.Constants.SYMBOL_HEIGHT * _Constant.Constants.TOTAL_ROWS - _Constant.Constants.SYMBOL_HEIGHT - _Constant.Constants.SYMBOL_HEIGHT * i;
          this.container.addChild(symbol);
        }
      }

      var rectMask = new PIXI.Graphics();
      rectMask.beginFill(0);
      rectMask.drawRect(0, 0, this.container.width * 0.75, this.container.height * 0.75);
      rectMask.endFill();
      this.container.mask = rectMask;
      this.container.x = 0;
      this.container.y = 0;
      this.container.scale.set(0.75, 0.75);
      this.app.stage.addChild(this.container);
    }
  }], [{
    key: "initTextureMap",
    value: function initTextureMap() {
      Object.values(SymbolValue).filter(function (value) {
        return !isNaN(parseInt(value));
      }).forEach(function (value) {
        SymbolContainer.textures[SymbolValue[value]] = PIXI.Loader.shared.resources[SymbolContainer.getTexturePath(value)].texture;
      });
      SymbolContainer.isTextureMap = true;
    }
  }, {
    key: "getRandomTexture",
    value: function getRandomTexture() {
      var allowedValues = Object.values(SymbolValue).filter(function (value) {
        return typeof value === 'number';
      });
      var value = allowedValues[Math.floor(Math.random() * allowedValues.length)];
      return PIXI.Loader.shared.resources[SymbolContainer.getTexturePath(value)].texture;
    }
  }, {
    key: "getTexturePath",
    value: function getTexturePath(value) {
      return SymbolContainer.baseTexturePath + value + '.png';
    }
  }]);

  return SymbolContainer;
}(_Symbol3.Symbol);

exports.SymbolContainer = SymbolContainer;

_defineProperty(SymbolContainer, "textures", {});

_defineProperty(SymbolContainer, "isTextureMap", false);

_defineProperty(SymbolContainer, "baseTexturePath", 'assets/images/symbols/symbol_');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3L1N5bWJvbENvbnRhaW5lci50cyJdLCJuYW1lcyI6WyJTeW1ib2xWYWx1ZSIsIlN5bWJvbENvbnRhaW5lciIsImFwcCIsImNvbnRhaW5lciIsIlBJWEkiLCJDb250YWluZXIiLCJpc1RleHR1cmVNYXAiLCJpbml0VGV4dHVyZU1hcCIsImkiLCJDb25zdGFudHMiLCJUT1RBTF9ST1dTIiwiaiIsIlNZTUJPTFNfUEVSX1JPVyIsInN5bWJvbCIsIk1vdmluZ09iaiIsImdldFJhbmRvbVRleHR1cmUiLCJ3aWR0aCIsIlNZTUJPTF9XSURUSCIsImhlaWdodCIsIlNZTUJPTF9IRUlHSFQiLCJ4IiwieSIsImFkZENoaWxkIiwicmVjdE1hc2siLCJHcmFwaGljcyIsImJlZ2luRmlsbCIsImRyYXdSZWN0IiwiZW5kRmlsbCIsIm1hc2siLCJzY2FsZSIsInNldCIsInN0YWdlIiwiT2JqZWN0IiwidmFsdWVzIiwiZmlsdGVyIiwidmFsdWUiLCJpc05hTiIsInBhcnNlSW50IiwiZm9yRWFjaCIsInRleHR1cmVzIiwiTG9hZGVyIiwic2hhcmVkIiwicmVzb3VyY2VzIiwiZ2V0VGV4dHVyZVBhdGgiLCJ0ZXh0dXJlIiwiYWxsb3dlZFZhbHVlcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImJhc2VUZXh0dXJlUGF0aCIsIlN5bWJvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFWUEsVzs7O1dBQUFBLFc7QUFBQUEsRUFBQUEsVyxDQUFBQSxXO0FBQUFBLEVBQUFBLFcsQ0FBQUEsVztBQUFBQSxFQUFBQSxXLENBQUFBLFc7QUFBQUEsRUFBQUEsVyxDQUFBQSxXO0FBQUFBLEVBQUFBLFcsQ0FBQUEsVztBQUFBQSxFQUFBQSxXLENBQUFBLFc7QUFBQUEsRUFBQUEsVyxDQUFBQSxXO0FBQUFBLEVBQUFBLFcsQ0FBQUEsVztHQUFBQSxXLDJCQUFB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QyxVQUFBQyxLQUFLO0FBQUEsZUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCO0FBQUEsT0FBdkMsQ0FBcEI7QUFDQSxVQUFJQSxLQUFVLEdBQUdVLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkgsYUFBYSxDQUFDSSxNQUF6QyxDQUFELENBQTlCO0FBQ0EsYUFBTzdDLElBQUksQ0FBQ29DLE1BQUwsQ0FBWUMsTUFBWixDQUFtQkMsU0FBbkIsQ0FBNkJ6QyxlQUFlLENBQUMwQyxjQUFoQixDQUErQlIsS0FBL0IsQ0FBN0IsRUFBb0VTLE9BQTNFO0FBQ0g7OztXQUVELHdCQUE4QlQsS0FBOUIsRUFBMEQ7QUFDdEQsYUFBT2xDLGVBQWUsQ0FBQ2lELGVBQWhCLEdBQWtDZixLQUFsQyxHQUEwQyxNQUFqRDtBQUNIOzs7O0VBdERnQ2dCLGU7Ozs7Z0JBQXhCbEQsZSxjQUM2QixFOztnQkFEN0JBLGUsa0JBRThCLEs7O2dCQUY5QkEsZSxxQkFHd0IsK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTeW1ib2wgfSBmcm9tIFwiLi9TeW1ib2xcIjtcclxuaW1wb3J0IHsgVGV4dHVyZU1hcCB9IGZyb20gXCIuL1RleHR1cmVNYXBcIjtcclxuaW1wb3J0ICogYXMgUElYSSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBNb3ZpbmdPYmogfSBmcm9tIFwiLi9Nb3ZpbmdPYmpcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi8uLi9jb25zdGFudHMvQ29uc3RhbnQnXHJcblxyXG5leHBvcnQgZW51bSBTeW1ib2xWYWx1ZSB7XHJcbiAgICBMSU9OID0gMSxcclxuICAgIE1PTktFWSA9IDIsXHJcbiAgICBCSVJEID0gMyxcclxuICAgIEJFQVIgPSA0LFxyXG4gICAgRUdHID0gNSxcclxuICAgIExFQUYgPSA2LFxyXG4gICAgQ0hJTExJID0gNyxcclxuICAgIERJQU1PTkQgPSA4XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTeW1ib2xDb250YWluZXIgZXh0ZW5kcyBTeW1ib2wge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdGV4dHVyZXM6IFRleHR1cmVNYXAgPSB7fTtcclxuICAgIHByaXZhdGUgc3RhdGljIGlzVGV4dHVyZU1hcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYmFzZVRleHR1cmVQYXRoID0gJ2Fzc2V0cy9pbWFnZXMvc3ltYm9scy9zeW1ib2xfJztcclxuXHJcbiAgICByZWFkb25seSBjb250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFwcDogUElYSS5BcHBsaWNhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGFwcCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuICAgICAgICBpZiAoIVN5bWJvbENvbnRhaW5lci5pc1RleHR1cmVNYXApIHtcclxuICAgICAgICAgICAgU3ltYm9sQ29udGFpbmVyLmluaXRUZXh0dXJlTWFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3coKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uc3RhbnRzLlRPVEFMX1JPV1M7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvbnN0YW50cy5TWU1CT0xTX1BFUl9ST1c7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN5bWJvbCA9IG5ldyBNb3ZpbmdPYmooU3ltYm9sQ29udGFpbmVyLmdldFJhbmRvbVRleHR1cmUoKSk7XHJcbiAgICAgICAgICAgICAgICBzeW1ib2wud2lkdGggPSBDb25zdGFudHMuU1lNQk9MX1dJRFRIO1xyXG4gICAgICAgICAgICAgICAgc3ltYm9sLmhlaWdodCA9IENvbnN0YW50cy5TWU1CT0xfSEVJR0hUO1xyXG4gICAgICAgICAgICAgICAgc3ltYm9sLnggPSBDb25zdGFudHMuU1lNQk9MX1dJRFRIICogajtcclxuICAgICAgICAgICAgICAgIHN5bWJvbC55ID0gKENvbnN0YW50cy5TWU1CT0xfSEVJR0hUICogQ29uc3RhbnRzLlRPVEFMX1JPV1MgLSBDb25zdGFudHMuU1lNQk9MX0hFSUdIVClcclxuICAgICAgICAgICAgICAgICAgICAtIChDb25zdGFudHMuU1lNQk9MX0hFSUdIVCAqIGkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQoc3ltYm9sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZWN0TWFzazogUElYSS5HcmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgcmVjdE1hc2suYmVnaW5GaWxsKDApO1xyXG4gICAgICAgIHJlY3RNYXNrLmRyYXdSZWN0KDAsIDAsIHRoaXMuY29udGFpbmVyLndpZHRoICogMC43NSwgdGhpcy5jb250YWluZXIuaGVpZ2h0ICogMC43NSk7XHJcbiAgICAgICAgcmVjdE1hc2suZW5kRmlsbCgpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLm1hc2sgPSByZWN0TWFzaztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci54ID0gMDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci55ID0gMDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zY2FsZS5zZXQoMC43NSwgMC43NSk7XHJcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluaXRUZXh0dXJlTWFwKCk6IHZvaWQge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoU3ltYm9sVmFsdWUpLmZpbHRlcih2YWx1ZSA9PiAhaXNOYU4ocGFyc2VJbnQodmFsdWUgYXMgYW55KSkpLmZvckVhY2goKCh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIFN5bWJvbENvbnRhaW5lci50ZXh0dXJlc1tTeW1ib2xWYWx1ZVt2YWx1ZV1dID0gUElYSS5Mb2FkZXIuc2hhcmVkLnJlc291cmNlc1tTeW1ib2xDb250YWluZXIuZ2V0VGV4dHVyZVBhdGgodmFsdWUpXS50ZXh0dXJlO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBTeW1ib2xDb250YWluZXIuaXNUZXh0dXJlTWFwID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UmFuZG9tVGV4dHVyZSgpOiBQSVhJLlRleHR1cmUge1xyXG4gICAgICAgIGxldCBhbGxvd2VkVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhTeW1ib2xWYWx1ZSkuZmlsdGVyKHZhbHVlID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpO1xyXG4gICAgICAgIGxldCB2YWx1ZTogYW55ID0gYWxsb3dlZFZhbHVlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbGxvd2VkVmFsdWVzLmxlbmd0aCldO1xyXG4gICAgICAgIHJldHVybiBQSVhJLkxvYWRlci5zaGFyZWQucmVzb3VyY2VzW1N5bWJvbENvbnRhaW5lci5nZXRUZXh0dXJlUGF0aCh2YWx1ZSldLnRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0VGV4dHVyZVBhdGgodmFsdWU6IFN5bWJvbFZhbHVlKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3ltYm9sQ29udGFpbmVyLmJhc2VUZXh0dXJlUGF0aCArIHZhbHVlICsgJy5wbmcnO1xyXG4gICAgfVxyXG59Il19