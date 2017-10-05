export default {
   input: 'dist/src/app/managetradex/index.js',
   output: {
     file: 'dist/bundles/managetradex.umd.js',
     format: 'umd',
     name: 'ng.managetradex',
     sourcemap: true,
     external: [ 
       'ng.core',
       'ng.common'
     ]
   },
   globals: {
     '@angular/core': 'ng.core',
     '@angular/common': 'ng.common',
     'rxjs/Observable': 'Rx',
     'rxjs/ReplaySubject': 'Rx',
     'rxjs/add/operator/map': 'Rx.Observable.prototype',
     'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
     'rxjs/add/observable/fromEvent': 'Rx.Observable',
     'rxjs/add/observable/of': 'Rx.Observable'
   }
 }