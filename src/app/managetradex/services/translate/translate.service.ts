import { Injectable, Inject  } from '@angular/core';
import { TRANSLATIONS } from './translations';  

@Injectable()
export class TranslateService {
  private _currentLang: string;

  public get currentLang() {
      return this._currentLang;
  }

  // Inject our translations
  constructor(@Inject(TRANSLATIONS) private _translations: any) {
  }

  public use(lang: string): void {
      // Set current language
      this._currentLang = lang;
  }

  private translate(key: string): string {
      // Private perform translation
      let translation = key;

      if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
          return this._translations[this.currentLang][key];
      }

      return translation;
  }

  public instant(key: string) {
      // Call translation
      return this.translate(key); 
  }
}