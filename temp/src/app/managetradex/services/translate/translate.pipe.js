import { Pipe } from '@angular/core';
import { TranslateService } from './translate.service';
var TranslatePipe = (function () {
    function TranslatePipe(_translate) {
        this._translate = _translate;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        if (!value)
            return;
        return this._translate.instant(value);
    };
    return TranslatePipe;
}());
export { TranslatePipe };
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate',
                pure: false
            },] },
];
/** @nocollapse */
TranslatePipe.ctorParameters = function () { return [
    { type: TranslateService, },
]; };
//# sourceMappingURL=translate.pipe.js.map