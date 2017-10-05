import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateComponent } from './components/translate/translate.component';
import { TranslateService } from './services/translate/translate.service';
import { TranslatePipe } from './services/translate/translate.pipe';
import { TRANSLATION_PROVIDERS } from './services/translate/translations';
//export * from './services/translate/translate.service';
export { TranslateService } from './services/translate/translate.service';
export { TranslatePipe } from './services/translate/translate.pipe';
export { TRANSLATION_PROVIDERS } from './services/translate/translations';
var ManagetradexModule = (function () {
    function ManagetradexModule() {
    }
    ManagetradexModule.forRoot = function () {
        return {
            ngModule: ManagetradexModule,
            providers: [
                TranslateService
            ]
        };
    };
    return ManagetradexModule;
}());
export { ManagetradexModule };
ManagetradexModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    TranslateComponent,
                    TranslatePipe
                ],
                exports: [
                    TranslateComponent,
                    TranslatePipe
                ],
                providers: [
                    TranslateService,
                    TRANSLATION_PROVIDERS
                ]
            },] },
];
/** @nocollapse */
ManagetradexModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map