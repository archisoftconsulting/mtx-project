import { OpaqueToken } from '@angular/core';

// Import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from '../../locales/lang-en';
import { LANG_MS_NAME, LANG_MS_TRANS } from '../../locales/lang-ms';
import { LANG_ZH_NAME, LANG_ZH_TRANS } from '../../locales/lang-zh';

// Translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// All translations
export const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_MS_NAME]: LANG_MS_TRANS,
    [LANG_ZH_NAME]: LANG_ZH_TRANS,
};

// Providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];