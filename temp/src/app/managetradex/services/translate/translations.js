import { OpaqueToken } from '@angular/core';
// Import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from '../../locales/lang-en';
import { LANG_MS_NAME, LANG_MS_TRANS } from '../../locales/lang-ms';
import { LANG_ZH_NAME, LANG_ZH_TRANS } from '../../locales/lang-zh';
// Translation token
export var TRANSLATIONS = new OpaqueToken('translations');
// All translations
export var dictionary = (_a = {},
    _a[LANG_EN_NAME] = LANG_EN_TRANS,
    _a[LANG_MS_NAME] = LANG_MS_TRANS,
    _a[LANG_ZH_NAME] = LANG_ZH_TRANS,
    _a);
// Providers
export var TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
var _a;
//# sourceMappingURL=translations.js.map