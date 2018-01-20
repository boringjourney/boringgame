var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Num = (function (_super) {
    __extends(Num, _super);
    function Num(type) {
        var _this = _super.call(this) || this;
        _this.NumType = type;
        return _this;
    }
    Object.defineProperty(Num.prototype, "NumType", {
        get: function () {
            return this._NumType;
        },
        set: function (v) {
            this._NumType = v;
            var str = "number_" + v;
            //console.log(str);
            this.source = RES.getRes(str);
        },
        enumerable: true,
        configurable: true
    });
    return Num;
}(eui.Image));
__reflect(Num.prototype, "Num");
//# sourceMappingURL=Num.js.map