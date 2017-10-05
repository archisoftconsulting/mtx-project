import { Injectable, Inject } from '@angular/core';
import { TRANSLATIONS } from './translations';
var TranslateService = (function () {
    // Inject our translations
    function TranslateService(_translations) {
        this._translations = _translations;
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: function () {
            return this._currentLang;
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.use = function (lang) {
        // Set current language
        this._currentLang = lang;
    };
    TranslateService.prototype.translate = function (key) {
        // Private perform translation
        var translation = key;
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        return translation;
    };
    TranslateService.prototype.instant = function (key) {
        // Call translation
        return this.translate(key);
    };
    return TranslateService;
}());
export { TranslateService };
TranslateService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TranslateService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [TRANSLATIONS,] },] },
]; };
//# sourceMappingURL=translate.service.js.map