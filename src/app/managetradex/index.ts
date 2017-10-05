import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateComponent } from './components/translate/translate.component';
import { TranslateService } from './services/translate/translate.service';
import { TranslatePipe } from './services/translate/translate.pipe';
import { TRANSLATION_PROVIDERS } from './services/translate/translations'; 

//export * from './services/translate/translate.service';
export { TranslateService }    from './services/translate/translate.service';
export { TranslatePipe } from './services/translate/translate.pipe';
export { TRANSLATION_PROVIDERS }   from './services/translate/translations';

@NgModule({
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
})
export class ManagetradexModule { 

  static forRoot() {
    return {
      ngModule: ManagetradexModule,
      providers: [ 
        TranslateService
      ]
    }
  }
}
