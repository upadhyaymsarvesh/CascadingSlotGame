"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.ButtonState = void 0;

var PIXI = _interopRequireWildcard(require("pixi.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ButtonState;
exports.ButtonState = ButtonState;

(function (ButtonState) {
  ButtonState["NORMAL"] = "normal";
  ButtonState["HOVER"] = "hover";
  ButtonState["PRESSED"] = "pressed";
  ButtonState["DISABLED"] = "disabled";
})(ButtonState || (exports.ButtonState = ButtonState = {}));

var Button = /*#__PURE__*/function () {
  function Button(app) {
    _classCallCheck(this, Button);

    _defineProperty(this, "sprite", void 0);

    _defineProperty(this, "container", void 0);

    _defineProperty(this, "state", ButtonState.NORMAL);

    _defineProperty(this, "applic", void 0);

    this.applic = app;
    this.container = new PIXI.Container();
    this.sprite = new PIXI.Sprite(PIXI.Loader.shared.resources[Button.getDefaultTextureName()].texture);

    if (!Button.isTextureMapInited) {
      Button.initTextureMap();
    }
  }

  _createClass(Button, [{
    key: "show",
    value: function show() {
      this.container.addChild(this.sprite);
      this.container.scale.x = 0.75;
      this.container.scale.y = 0.75;
      this.container.x = 1280 - this.container.width;
      this.container.y = (720 - this.container.height) / 2;
      var style = new PIXI.TextStyle({
        fontFamily: "Comic Sans",
        fontSize: 36,
        fill: "white",
        stroke: '#974e1f',
        strokeThickness: 4
      }); // let text = new PIXI.Text("Spin", style);
      // text.pivot.set(0.5, 0.5);
      // text.y = this.container.height / 4;
      // text.x = this.container.width / 2;
      // this.container.addChild(text);

      this.initHandlers();
      this.applic.stage.addChild(this.container);
    }
  }, {
    key: "initHandlers",
    value: function initHandlers() {
      var _this = this;

      this.sprite.interactive = true;
      this.sprite.addListener('mouseover', function (e) {
        if (_this.state !== ButtonState.HOVER && _this.state !== ButtonState.DISABLED) {
          _this.setState(ButtonState.HOVER);
        }
      });
      this.sprite.addListener('mousedown', function (e) {
        if (_this.state !== ButtonState.PRESSED && _this.state !== ButtonState.DISABLED) {
          _this.setState(ButtonState.PRESSED);
        }
      });
      this.sprite.addListener('mouseout', function (e) {
        if (_this.state === ButtonState.PRESSED || _this.state === ButtonState.HOVER) {
          _this.setState(ButtonState.NORMAL);
        }
      });
    }
  }, {
    key: "setState",
    value: function setState(state) {
      this.state = state;
      this.sprite.texture = Button.textures[state];
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
  }, {
    key: "setOnClick",
    value: function setOnClick(func) {
      this.sprite.addListener('click', func);
    }
  }], [{
    key: "initTextureMap",
    value: function initTextureMap() {
      Object.values(ButtonState).forEach(function (value) {
        Button.textures[value] = PIXI.Loader.shared.resources[Button.getTexturePath(value)].texture;
      });
      Button.isTextureMapInited = true;
    }
  }, {
    key: "getDefaultTextureName",
    value: function getDefaultTextureName() {
      return Button.getTexturePath(ButtonState.NORMAL);
    }
  }, {
    key: "getTexturePath",
    value: function getTexturePath(state) {
      return Button.baseTexturePath + state + '.png';
    }
  }]);

  return Button;
}();

exports.Button = Button;

_defineProperty(Button, "baseTexturePath", 'assets/images/button/btn_spin_');

_defineProperty(Button, "textures", {});

_defineProperty(Button, "isTextureMapInited", false);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9CdXR0b24udHMiXSwibmFtZXMiOlsiQnV0dG9uU3RhdGUiLCJCdXR0b24iLCJhcHAiLCJOT1JNQUwiLCJhcHBsaWMiLCJjb250YWluZXIiLCJQSVhJIiwiQ29udGFpbmVyIiwic3ByaXRlIiwiU3ByaXRlIiwiTG9hZGVyIiwic2hhcmVkIiwicmVzb3VyY2VzIiwiZ2V0RGVmYXVsdFRleHR1cmVOYW1lIiwidGV4dHVyZSIsImlzVGV4dHVyZU1hcEluaXRlZCIsImluaXRUZXh0dXJlTWFwIiwiYWRkQ2hpbGQiLCJzY2FsZSIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIlRleHRTdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VUaGlja25lc3MiLCJpbml0SGFuZGxlcnMiLCJzdGFnZSIsImludGVyYWN0aXZlIiwiYWRkTGlzdGVuZXIiLCJlIiwic3RhdGUiLCJIT1ZFUiIsIkRJU0FCTEVEIiwic2V0U3RhdGUiLCJQUkVTU0VEIiwidGV4dHVyZXMiLCJmdW5jIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInZhbHVlIiwiZ2V0VGV4dHVyZVBhdGgiLCJiYXNlVGV4dHVyZVBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztJQU1ZQSxXOzs7V0FBQUEsVztBQUFBQSxFQUFBQSxXO0FBQUFBLEVBQUFBLFc7QUFBQUEsRUFBQUEsVztBQUFBQSxFQUFBQSxXO0dBQUFBLFcsMkJBQUFBLFc7O0lBT0NDLE07QUFVVCxrQkFBWUMsR0FBWixFQUFtQztBQUFBOztBQUFBOztBQUFBOztBQUFBLG1DQUhORixXQUFXLENBQUNHLE1BR047O0FBQUE7O0FBQy9CLFNBQUtDLE1BQUwsR0FBZUYsR0FBZjtBQUNBLFNBQUtHLFNBQUwsR0FBaUIsSUFBSUMsSUFBSSxDQUFDQyxTQUFULEVBQWpCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElB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LENBQVl5QixXQUFaLENBQXdCLE9BQXhCLEVBQWlDUSxJQUFqQztBQUNIOzs7V0FuRUQsMEJBQXNDO0FBQ2xDQyxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYzNDLFdBQWQsRUFBMkI0QyxPQUEzQixDQUFvQyxVQUFDQyxLQUFELEVBQXdCO0FBQ3hENUMsUUFBQUEsTUFBTSxDQUFDdUMsUUFBUCxDQUFnQkssS0FBaEIsSUFBeUJ2QyxJQUFJLENBQUNJLE1BQUwsQ0FBWUMsTUFBWixDQUFtQkMsU0FBbkIsQ0FBNkJYLE1BQU0sQ0FBQzZDLGNBQVAsQ0FBc0JELEtBQXRCLENBQTdCLEVBQTJEL0IsT0FBcEY7QUFDSCxPQUZEO0FBR0FiLE1BQUFBLE1BQU0sQ0FBQ2Msa0JBQVAsR0FBNEIsSUFBNUI7QUFDSDs7O1dBRUQsaUNBQWlEO0FBQzdDLGFBQU9kLE1BQU0sQ0FBQzZDLGNBQVAsQ0FBc0I5QyxXQUFXLENBQUNHLE1BQWxDLENBQVA7QUFDSDs7O1dBRUQsd0JBQThCZ0MsS0FBOUIsRUFBMEQ7QUFDdEQsYUFBT2xDLE1BQU0sQ0FBQzhDLGVBQVAsR0FBeUJaLEtBQXpCLEdBQWlDLE1BQXhDO0FBQ0g7Ozs7Ozs7O2dCQWhDUWxDLE0scUJBQ2dDLGdDOztnQkFEaENBLE0sY0FFNkIsRTs7Z0JBRjdCQSxNLHdCQUdvQyxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJ1xyXG5pbXBvcnQge1RleHR1cmVNYXB9IGZyb20gXCIuLy4uL1RleHR1cmVNYXBcIjtcclxuaW1wb3J0IHtBcHB9IGZyb20gXCIuLi8uLi9BcHBcIjtcclxuaW1wb3J0IHtTeW1ib2x9IGZyb20gXCIuLi9TeW1ib2xcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL0NvbnN0YW50JztcclxuXHJcbmV4cG9ydCBlbnVtIEJ1dHRvblN0YXRlIHtcclxuICAgIE5PUk1BTCA9ICdub3JtYWwnLFxyXG4gICAgSE9WRVIgPSAnaG92ZXInLFxyXG4gICAgUFJFU1NFRCA9ICdwcmVzc2VkJyxcclxuICAgIERJU0FCTEVEID0gJ2Rpc2FibGVkJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGJhc2VUZXh0dXJlUGF0aDogc3RyaW5nID0gJ2Fzc2V0cy9pbWFnZXMvYnV0dG9uL2J0bl9zcGluXyc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB0ZXh0dXJlczogVGV4dHVyZU1hcCA9IHt9O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNUZXh0dXJlTWFwSW5pdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJvdGVjdGVkIHNwcml0ZTogUElYSS5TcHJpdGU7XHJcbiAgICByZWFkb25seSBjb250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogQnV0dG9uU3RhdGUgPSBCdXR0b25TdGF0ZS5OT1JNQUw7XHJcbiAgICBwcml2YXRlIGFwcGxpYyA6IFBJWEkuQXBwbGljYXRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXBwOiBQSVhJLkFwcGxpY2F0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hcHBsaWMgID0gYXBwO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUoUElYSS5Mb2FkZXIuc2hhcmVkLnJlc291cmNlc1tCdXR0b24uZ2V0RGVmYXVsdFRleHR1cmVOYW1lKCldLnRleHR1cmUpO1xyXG4gICAgICAgIGlmICghQnV0dG9uLmlzVGV4dHVyZU1hcEluaXRlZCkge1xyXG4gICAgICAgICAgICBCdXR0b24uaW5pdFRleHR1cmVNYXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5pdFRleHR1cmVNYXAoKTogdm9pZCB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhCdXR0b25TdGF0ZSkuZm9yRWFjaCgoKHZhbHVlOiBCdXR0b25TdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBCdXR0b24udGV4dHVyZXNbdmFsdWVdID0gUElYSS5Mb2FkZXIuc2hhcmVkLnJlc291cmNlc1tCdXR0b24uZ2V0VGV4dHVyZVBhdGgodmFsdWUpXS50ZXh0dXJlO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBCdXR0b24uaXNUZXh0dXJlTWFwSW5pdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGdldERlZmF1bHRUZXh0dXJlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBCdXR0b24uZ2V0VGV4dHVyZVBhdGgoQnV0dG9uU3RhdGUuTk9STUFMKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRUZXh0dXJlUGF0aChzdGF0ZTogQnV0dG9uU3RhdGUpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBCdXR0b24uYmFzZVRleHR1cmVQYXRoICsgc3RhdGUgKyAnLnBuZyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2NhbGUueCA9IDAuNzU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2NhbGUueSA9IDAuNzU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIueCA9ICgxMjgwIC0gdGhpcy5jb250YWluZXIud2lkdGgpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnkgPSAoNzIwIC0gdGhpcy5jb250YWluZXIuaGVpZ2h0KS8yO1xyXG4gICAgICAgIGxldCBzdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgU2Fuc1wiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgICAgICAgIGZpbGw6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgc3Ryb2tlOiAnIzk3NGUxZicsXHJcbiAgICAgICAgICAgIHN0cm9rZVRoaWNrbmVzczogNFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGxldCB0ZXh0ID0gbmV3IFBJWEkuVGV4dChcIlNwaW5cIiwgc3R5bGUpO1xyXG4gICAgICAgIC8vIHRleHQucGl2b3Quc2V0KDAuNSwgMC41KTtcclxuICAgICAgICAvLyB0ZXh0LnkgPSB0aGlzLmNvbnRhaW5lci5oZWlnaHQgLyA0O1xyXG4gICAgICAgIC8vIHRleHQueCA9IHRoaXMuY29udGFpbmVyLndpZHRoIC8gMjtcclxuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0ZXh0KTtcclxuICAgICAgICB0aGlzLmluaXRIYW5kbGVycygpO1xyXG4gICAgICAgIHRoaXMuYXBwbGljLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRIYW5kbGVycygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuYWRkTGlzdGVuZXIoJ21vdXNlb3ZlcicsIGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQnV0dG9uU3RhdGUuSE9WRVIgJiYgdGhpcy5zdGF0ZSAhPT0gQnV0dG9uU3RhdGUuRElTQUJMRUQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQnV0dG9uU3RhdGUuSE9WRVIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuYWRkTGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQnV0dG9uU3RhdGUuUFJFU1NFRCAmJiB0aGlzLnN0YXRlICE9PSBCdXR0b25TdGF0ZS5ESVNBQkxFRCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShCdXR0b25TdGF0ZS5QUkVTU0VEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLmFkZExpc3RlbmVyKCdtb3VzZW91dCcsIGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQnV0dG9uU3RhdGUuUFJFU1NFRCB8fCB0aGlzLnN0YXRlID09PSBCdXR0b25TdGF0ZS5IT1ZFUikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShCdXR0b25TdGF0ZS5OT1JNQUwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGUoc3RhdGU6IEJ1dHRvblN0YXRlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmUgPSBCdXR0b24udGV4dHVyZXNbc3RhdGVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRlKCk6IEJ1dHRvblN0YXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPbkNsaWNrKGZ1bmM6ICgoZTogUElYSS5JbnRlcmFjdGlvbkV2ZW50KSA9PiB2b2lkKSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmMpO1xyXG4gICAgfVxyXG59Il19