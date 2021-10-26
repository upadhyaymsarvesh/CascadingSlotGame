"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sound = void 0;

var _howler = require("howler");

var _Constant = require("./../constants/Constant");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sound = /*#__PURE__*/function () {
  function Sound() {
    _classCallCheck(this, Sound);

    _defineProperty(this, "sounds", {});

    var reelStopSoundIds = [];

    for (var i = 1; i <= 5; i++) {
      reelStopSoundIds.push(Sound.getReelStopSoundId(i));
    }

    var _iterator = _createForOfIteratorHelper(reelStopSoundIds.concat(_Constant.Constants.SPIN_BUTTON_SOUND)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var id = _step.value;
        this.sounds[id] = new _howler.Howl({
          src: id
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  _createClass(Sound, [{
    key: "playButtonClickSound",
    value: function playButtonClickSound() {
      this.sounds[_Constant.Constants.SPIN_BUTTON_SOUND].play();
    }
  }, {
    key: "playRandomReelStopSound",
    value: function playRandomReelStopSound() {
      var index = Math.ceil(Math.random() * 5);
      var id = Sound.getReelStopSoundId(index);
      this.sounds[id].play();
    }
  }], [{
    key: "getReelStopSoundId",
    value: function getReelStopSoundId(num) {
      return _Constant.Constants.REEL_STOP_SOUND_PATH + num + '.mp3';
    }
  }]);

  return Sound;
}();

exports.Sound = Sound;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VuZC9Tb3VuZC50cyJdLCJuYW1lcyI6WyJTb3VuZCIsInJlZWxTdG9wU291bmRJZHMiLCJpIiwicHVzaCIsImdldFJlZWxTdG9wU291bmRJZCIsImNvbmNhdCIsIkNvbnN0YW50cyIsIlNQSU5fQlVUVE9OX1NPVU5EIiwiaWQiLCJzb3VuZHMiLCJIb3dsIiwic3JjIiwicGxheSIsImluZGV4IiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJudW0iLCJSRUVMX1NUT1BfU09VTkRfUEFUSCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBTWFBLEs7QUFHVCxtQkFBYztBQUFBOztBQUFBLG9DQUZhLEVBRWI7O0FBQ1YsUUFBSUMsZ0JBQStCLEdBQUcsRUFBdEM7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLENBQXJCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQ3pCRCxNQUFBQSxnQkFBZ0IsQ0FBQ0UsSUFBakIsQ0FBc0JILEtBQUssQ0FBQ0ksa0JBQU4sQ0FBeUJGLENBQXpCLENBQXRCO0FBQ0g7O0FBSlMsK0NBS0tELGdCQUFnQixDQUFDSSxNQUFqQixDQUF3QkMsb0JBQVVDLGlCQUFsQyxDQUxMO0FBQUE7O0FBQUE7QUFLViwwREFBcUU7QUFBQSxZQUE1REMsRUFBNEQ7QUFDakUsYUFBS0MsTUFBTCxDQUFZRCxFQUFaLElBQWtCLElBQUlFLFlBQUosQ0FBUztBQUN2QkMsVUFBQUEsR0FBRyxFQUFFSDtBQURrQixTQUFULENBQWxCO0FBR0g7QUFUUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVWI7Ozs7V0FNRCxnQ0FBNkI7QUFDekIsV0FBS0MsTUFBTCxDQUFZSCxvQkFBVUMsaUJBQXRCLEVBQXlDSyxJQUF6QztBQUNIOzs7V0FFRCxtQ0FBZ0M7QUFDNUIsVUFBSUMsS0FBYSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUQsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTFCLENBQXBCO0FBQ0EsVUFBSVIsRUFBVSxHQUFHUixLQUFLLENBQUNJLGtCQUFOLENBQXlCUyxLQUF6QixDQUFqQjtBQUNBLFdBQUtKLE1BQUwsQ0FBWUQsRUFBWixFQUFnQkksSUFBaEI7QUFDSDs7O1dBWkQsNEJBQWtDSyxHQUFsQyxFQUF1RDtBQUNuRCxhQUFPWCxvQkFBVVksb0JBQVYsR0FBaUNELEdBQWpDLEdBQXVDLE1BQTlDO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hvd2x9IGZyb20gJ2hvd2xlcic7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4vLi4vY29uc3RhbnRzL0NvbnN0YW50J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb3VuZE1hcCB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBIb3dsO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU291bmQge1xyXG4gICAgcHJpdmF0ZSBzb3VuZHM6IFNvdW5kTWFwID0ge307XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGxldCByZWVsU3RvcFNvdW5kSWRzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlZWxTdG9wU291bmRJZHMucHVzaChTb3VuZC5nZXRSZWVsU3RvcFNvdW5kSWQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpZCBvZiByZWVsU3RvcFNvdW5kSWRzLmNvbmNhdChDb25zdGFudHMuU1BJTl9CVVRUT05fU09VTkQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmRzW2lkXSA9IG5ldyBIb3dsKHtcclxuICAgICAgICAgICAgICAgIHNyYzogaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFJlZWxTdG9wU291bmRJZChudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIENvbnN0YW50cy5SRUVMX1NUT1BfU09VTkRfUEFUSCArIG51bSArICcubXAzJztcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QnV0dG9uQ2xpY2tTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNvdW5kc1tDb25zdGFudHMuU1BJTl9CVVRUT05fU09VTkRdLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5UmFuZG9tUmVlbFN0b3BTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogNSk7XHJcbiAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSBTb3VuZC5nZXRSZWVsU3RvcFNvdW5kSWQoaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc291bmRzW2lkXS5wbGF5KCk7XHJcbiAgICB9XHJcbn0iXX0=