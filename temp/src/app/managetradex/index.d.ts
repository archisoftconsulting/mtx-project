import { TranslateService } from './services/translate/translate.service';
export { TranslateService } from './services/translate/translate.service';
export { TranslatePipe } from './services/translate/translate.pipe';
export { TRANSLATION_PROVIDERS } from './services/translate/translations';
export declare class ManagetradexModule {
    static forRoot(): {
        ngModule: typeof ManagetradexModule;
        providers: typeof TranslateService[];
    };
}
