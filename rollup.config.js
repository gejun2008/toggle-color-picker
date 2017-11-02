export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/toggle-color-picker.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.moduleStarter',
  globals: {
    '@angular/core': 'ng.core'
  }
}
