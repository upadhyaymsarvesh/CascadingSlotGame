"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var PIXI = _interopRequireWildcard(require("pixi.js"));

var _Game = require("./module/Game");

var _Button = require("./view/button/Button");

var _Sound = require("./sound/Sound");

var _SymbolContainer = require("./view/SymbolContainer");

var _FallDown = require("./controller/FallDown");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    _defineProperty(this, "appli", void 0);

    _defineProperty(this, "gameState", void 0);

    _defineProperty(this, "spinButton", void 0);

    _defineProperty(this, "symbolContainer", void 0);

    _defineProperty(this, "sound", new _Sound.Sound());

    this.appli = new PIXI.Application({
      width: 1280,
      height: 720
    });
    this.gameState = new _Game.Game(this);
  }

  _createClass(App, [{
    key: "run",
    value: function run() {
      document.body.appendChild(this.appli.view);
      PIXI.Loader.shared.add(['assets/images/button/btn_spin_disabled.png', 'assets/images/button/btn_spin_hover.png', 'assets/images/button/btn_spin_normal.png', 'assets/images/button/btn_spin_pressed.png', 'assets/images/symbols/symbol_1.png', 'assets/images/symbols/symbol_2.png', 'assets/images/symbols/symbol_3.png', 'assets/images/symbols/symbol_4.png', 'assets/images/symbols/symbol_5.png', 'assets/images/symbols/symbol_6.png', 'assets/images/symbols/symbol_7.png', 'assets/images/symbols/symbol_8.png']).load(this.setup.bind(this));
    }
  }, {
    key: "setup",
    value: function setup() {
      var _this = this;

      this.buildScene();
      this.appli.ticker.add(function (delta) {
        return _this.gameLoop(delta);
      });
    }
  }, {
    key: "buildScene",
    value: function buildScene() {
      this.addSpinButton();
      this.addSymbols();
    }
  }, {
    key: "addSpinButton",
    value: function addSpinButton() {
      var _this2 = this;

      this.spinButton = new _Button.Button(this.appli);
      this.spinButton.show();
      this.spinButton.setOnClick(function (e) {
        if (_this2.spinButton.getState() !== _Button.ButtonState.DISABLED) {
          _this2.sound.playButtonClickSound();

          _this2.gameState = new _FallDown.FallDown(_this2);

          _this2.spinButton.setState(_Button.ButtonState.DISABLED);
        }
      });
    }
  }, {
    key: "addSymbols",
    value: function addSymbols() {
      this.symbolContainer = new _SymbolContainer.SymbolContainer(this.appli);
      this.symbolContainer.show();
    }
  }, {
    key: "gameLoop",
    value: function gameLoop(delta) {
      this.gameState.execute();
    }
  }, {
    key: "button",
    get: function get() {
      return this.spinButton;
    }
  }, {
    key: "symbols",
    get: function get() {
      return this.symbolContainer;
    }
  }, {
    key: "sounds",
    get: function get() {
      return this.sound;
    }
  }, {
    key: "setGameState",
    value: function setGameState(state) {
      this.gameState = state;
    }
  }]);

  return App;
}();

exports.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAudHMiXSwibmFtZXMiOlsiQXBwIiwiU291bmQiLCJhcHBsaSIsIlBJWEkiLCJBcHBsaWNhdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZVN0YXRlIiwiR2FtZSIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidmlldyIsIkxvYWRlciIsInNoYXJlZCIsImFkZCIsImxvYWQiLCJzZXR1cCIsImJpbmQiLCJidWlsZFNjZW5lIiwidGlja2VyIiwiZGVsdGEiLCJnYW1lTG9vcCIsImFkZFNwaW5CdXR0b24iLCJhZGRTeW1ib2xzIiwic3BpbkJ1dHRvbiIsIkJ1dHRvbiIsInNob3ciLCJzZXRPbkNsaWNrIiwiZSIsImdldFN0YXRlIiwiQnV0dG9uU3RhdGUiLCJESVNBQkxFRCIsInNvdW5kIiwicGxheUJ1dHRvbkNsaWNrU291bmQiLCJGYWxsRG93biIsInNldFN0YXRlIiwic3ltYm9sQ29udGFpbmVyIiwiU3ltYm9sQ29udGFpbmVyIiwiZXhlY3V0ZSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsRztBQVFULGlCQUFhO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsbUNBRlUsSUFBSUMsWUFBSixFQUVWOztBQUNULFNBQUtDLEtBQUwsR0FBWSxJQUFJQyxJQUFJLENBQUNDLFdBQVQsQ0FBcUI7QUFDN0JDLE1BQUFBLEtBQUssRUFBRSxJQURzQjtBQUU3QkMsTUFBQUEsTUFBTSxFQUFFO0FBRnFCLEtBQXJCLENBQVo7QUFJQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLFVBQUosQ0FBUyxJQUFULENBQWpCO0FBQ0g7Ozs7V0FFRCxlQUFZO0FBQ1JDLE1BQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUtULEtBQUwsQ0FBV1UsSUFBckM7QUFDQVQsTUFBQUEsSUFBSSxDQUFDVSxNQUFMLENBQVlDLE1BQVosQ0FBbUJDLEdBQW5CLENBQXVCLENBQ25CLDRDQURtQixFQUVuQix5Q0FGbUIsRUFHbkIsMENBSG1CLEVBSW5CLDJDQUptQixFQUtuQixvQ0FMbUIsRUFNbkIsb0NBTm1CLEVBT25CLG9DQVBtQixFQVFuQixvQ0FSbUIsRUFTbkIsb0NBVG1CLEVBVW5CLG9DQVZtQixFQVduQixvQ0FYbUIsRUFZbkIsb0NBWm1CLENBQXZCLEVBYUdDLElBYkgsQ0FhUSxLQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0IsSUFBaEIsQ0FiUjtBQWNIOzs7V0FFRCxpQkFBc0I7QUFBQTs7QUFDbEIsV0FBS0MsVUFBTDtBQUNBLFdBQUtqQixLQUFMLENBQVdrQixNQUFYLENBQWtCTCxHQUFsQixDQUFzQixVQUFBTSxLQUFLO0FBQUEsZUFBSSxLQUFJLENBQUNDLFFBQUwsQ0FBY0QsS0FBZCxDQUFKO0FBQUEsT0FBM0I7QUFDSDs7O1dBRUQsc0JBQTJCO0FBQ3ZCLFdBQUtFLGFBQUw7QUFDQSxXQUFLQyxVQUFMO0FBQ0g7OztXQUVELHlCQUE4QjtBQUFBOztBQUMxQixXQUFLQyxVQUFMLEdBQWtCLElBQUlDLGNBQUosQ0FBVyxLQUFLeEIsS0FBaEIsQ0FBbEI7QUFDQSxXQUFLdUIsVUFBTCxDQUFnQkUsSUFBaEI7QUFDQSxXQUFLRixVQUFMLENBQWdCRyxVQUFoQixDQUEyQixVQUFBQyxDQUFDLEVBQUk7QUFDNUIsWUFBSyxNQUFJLENBQUNKLFVBQU4sQ0FBNEJLLFFBQTVCLE9BQTJDQyxvQkFBWUMsUUFBM0QsRUFBcUU7QUFDakUsVUFBQSxNQUFJLENBQUNDLEtBQUwsQ0FBV0Msb0JBQVg7O0FBQ0EsVUFBQSxNQUFJLENBQUMzQixTQUFMLEdBQWlCLElBQUk0QixrQkFBSixDQUFhLE1BQWIsQ0FBakI7O0FBQ0MsVUFBQSxNQUFJLENBQUNWLFVBQU4sQ0FBNEJXLFFBQTVCLENBQXFDTCxvQkFBWUMsUUFBakQ7QUFDSDtBQUNKLE9BTkQ7QUFPSDs7O1dBRUQsc0JBQTJCO0FBQ3ZCLFdBQUtLLGVBQUwsR0FBdUIsSUFBSUMsZ0NBQUosQ0FBb0IsS0FBS3BDLEtBQXpCLENBQXZCO0FBQ0EsV0FBS21DLGVBQUwsQ0FBcUJWLElBQXJCO0FBQ0g7OztXQUVELGtCQUFpQk4sS0FBakIsRUFBc0M7QUFDbEMsV0FBS2QsU0FBTCxDQUFlZ0MsT0FBZjtBQUNIOzs7U0FFRCxlQUFpQztBQUM3QixhQUFPLEtBQUtkLFVBQVo7QUFDSDs7O1NBRUQsZUFBMkM7QUFDdkMsYUFBTyxLQUFLWSxlQUFaO0FBQ0g7OztTQUVELGVBQW9CO0FBQ2hCLGFBQU8sS0FBS0osS0FBWjtBQUNIOzs7V0FFRCxzQkFBYU8sS0FBYixFQUErQjtBQUMzQixXQUFLakMsU0FBTCxHQUFpQmlDLEtBQWpCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnXHJcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4vbW9kdWxlL0dhbWVcIjtcclxuaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4vbW9kdWxlL0dhbWVTdGF0ZSdcclxuaW1wb3J0IHtCdXR0b25TdGF0ZX0gZnJvbSBcIi4vdmlldy9idXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi92aWV3L2J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IHtTb3VuZH0gZnJvbSBcIi4vc291bmQvU291bmRcIjtcclxuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gXCIuL2NvbnN0YW50cy9Db25zdGFudFwiO1xyXG5pbXBvcnQgeyBTeW1ib2xDb250YWluZXIgfSBmcm9tICcuL3ZpZXcvU3ltYm9sQ29udGFpbmVyJztcclxuaW1wb3J0IHsgRmFsbERvd24gfSBmcm9tICcuL2NvbnRyb2xsZXIvRmFsbERvd24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICByZWFkb25seSBhcHBsaTogUElYSS5BcHBsaWNhdGlvbjtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIHByaXZhdGUgc3BpbkJ1dHRvbjogQnV0dG9uIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBzeW1ib2xDb250YWluZXI6IFN5bWJvbENvbnRhaW5lciB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgc291bmQ6IFNvdW5kID0gbmV3IFNvdW5kKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFwcGxpID1uZXcgUElYSS5BcHBsaWNhdGlvbih7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjgwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDcyMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gbmV3IEdhbWUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5hcHBsaS52aWV3KTtcclxuICAgICAgICBQSVhJLkxvYWRlci5zaGFyZWQuYWRkKFtcclxuICAgICAgICAgICAgJ2Fzc2V0cy9pbWFnZXMvYnV0dG9uL2J0bl9zcGluX2Rpc2FibGVkLnBuZycsXHJcbiAgICAgICAgICAgICdhc3NldHMvaW1hZ2VzL2J1dHRvbi9idG5fc3Bpbl9ob3Zlci5wbmcnLFxyXG4gICAgICAgICAgICAnYXNzZXRzL2ltYWdlcy9idXR0b24vYnRuX3NwaW5fbm9ybWFsLnBuZycsXHJcbiAgICAgICAgICAgICdhc3NldHMvaW1hZ2VzL2J1dHRvbi9idG5fc3Bpbl9wcmVzc2VkLnBuZycsXHJcbiAgICAgICAgICAgICdhc3NldHMvaW1hZ2VzL3N5bWJvbHMvc3ltYm9sXzEucG5nJyxcclxuICAgICAgICAgICAgJ2Fzc2V0cy9pbWFnZXMvc3ltYm9scy9zeW1ib2xfMi5wbmcnLFxyXG4gICAgICAgICAgICAnYXNzZXRzL2ltYWdlcy9zeW1ib2xzL3N5bWJvbF8zLnBuZycsXHJcbiAgICAgICAgICAgICdhc3NldHMvaW1hZ2VzL3N5bWJvbHMvc3ltYm9sXzQucG5nJyxcclxuICAgICAgICAgICAgJ2Fzc2V0cy9pbWFnZXMvc3ltYm9scy9zeW1ib2xfNS5wbmcnLFxyXG4gICAgICAgICAgICAnYXNzZXRzL2ltYWdlcy9zeW1ib2xzL3N5bWJvbF82LnBuZycsXHJcbiAgICAgICAgICAgICdhc3NldHMvaW1hZ2VzL3N5bWJvbHMvc3ltYm9sXzcucG5nJyxcclxuICAgICAgICAgICAgJ2Fzc2V0cy9pbWFnZXMvc3ltYm9scy9zeW1ib2xfOC5wbmcnXHJcbiAgICAgICAgXSkubG9hZCh0aGlzLnNldHVwLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5idWlsZFNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5hcHBsaS50aWNrZXIuYWRkKGRlbHRhID0+IHRoaXMuZ2FtZUxvb3AoZGVsdGEpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRTY2VuZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFkZFNwaW5CdXR0b24oKTtcclxuICAgICAgICB0aGlzLmFkZFN5bWJvbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFNwaW5CdXR0b24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGluQnV0dG9uID0gbmV3IEJ1dHRvbih0aGlzLmFwcGxpKTtcclxuICAgICAgICB0aGlzLnNwaW5CdXR0b24uc2hvdygpO1xyXG4gICAgICAgIHRoaXMuc3BpbkJ1dHRvbi5zZXRPbkNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoKHRoaXMuc3BpbkJ1dHRvbiBhcyBCdXR0b24pLmdldFN0YXRlKCkgIT09IEJ1dHRvblN0YXRlLkRJU0FCTEVEKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kLnBsYXlCdXR0b25DbGlja1NvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IG5ldyBGYWxsRG93bih0aGlzKTtcclxuICAgICAgICAgICAgICAgICh0aGlzLnNwaW5CdXR0b24gYXMgQnV0dG9uKS5zZXRTdGF0ZShCdXR0b25TdGF0ZS5ESVNBQkxFRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFN5bWJvbHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xDb250YWluZXIgPSBuZXcgU3ltYm9sQ29udGFpbmVyKHRoaXMuYXBwbGkpO1xyXG4gICAgICAgIHRoaXMuc3ltYm9sQ29udGFpbmVyLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdhbWVMb29wKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZS5leGVjdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJ1dHRvbigpOiBCdXR0b24gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwaW5CdXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN5bWJvbHMoKTogU3ltYm9sQ29udGFpbmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2xDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNvdW5kcygpOiBTb3VuZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R2FtZVN0YXRlKHN0YXRlOiBHYW1lU3RhdGUpIHtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG59Il19