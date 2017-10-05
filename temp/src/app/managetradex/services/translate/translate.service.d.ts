export declare class TranslateService {
    private _translations;
    private _currentLang;
    readonly currentLang: string;
    constructor(_translations: any);
    use(lang: string): void;
    private translate(key);
    instant(key: string): string;
}
