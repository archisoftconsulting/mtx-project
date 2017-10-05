# MtxProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Transpile, Packaging and Minify
Run `npm run builnpm` to execute ngc, rollup and uglify

## Login to NPM
Run `npm login` to login to NPM

## Update NPM version
Run `npm version <update_type> (patch, minor, or major)` to update package version.
Patch releases: 1.0 or 1.0.x or ~1.0.4
Minor releases: 1 or 1.x or ^1.0.4
Major releases: * or x

## Publish to NPM 
Run `npm publish` to publish to NPM


## Adding into package.json
"managetradex": "~0.0.1"

## Import From Project App Component
import { TranslateService, TranslatePipe, TRANSLATION_PROVIDERS } from 'managetradex/bundles/managetradex.umd'

declarations: [ AppComponent, TranslatePipe ],
providers: [ TranslateService, TRANSLATION_PROVIDERS ],