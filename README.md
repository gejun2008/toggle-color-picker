# Angular Toggle Color Picker Module

> A Guider for Angular Toggle Color Picker modules

## Credits
This project is basically a stripped down version of
[angular-async-local-storage](https://github.com/cyrilletuzi/angular-async-local-storage) 
by [https://github.com/cyrilletuzi](https://github.com/cyrilletuzi).

This project is a toggle color picker based on angular4. Similar with [ng2-color-picker](https://www.npmjs.com/package/ng2-color-picker)

![angular toggle color picker](https://raw.githubusercontent.com/AndyMeps/ng2-color-picker/master/assets/screenshot-color-picker-open.png)

# How to use 

## Dependencies
The module relies on bootstrap, ng-bootstrap for dropdown functionality.

## Installation
To include in your project install via NPM with:

```
npm install --save toggle-color-picker
```

You will then need to include the module to your app.module.ts:

```typescript
import { ColorPickerModule } from 'ng2-color-picker'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// ...

@NgModule({
    imports: [
        NgbModule.forRoot(); // In Feature Module, you don't need 'forRoot()'
        ColorPickerModule
    ]
})
///...
```

## HTML Component Markup
```html
<toggle-color-picker
    (selected)='selected($event)'
    [option]="optionColors">
</toggle-color-picker>
```
## Configuration
Current list of configuration options, types and default values:
option is object containers defaultColor and configColorList.

| Property | Type | Default | Description. |
| -------- | ---- | ------- | ------------ |
|  defaultColor| `string` | `#808080` | default color is gay. |
| configColorList | `list` | `['#808080','#000000',#ffffff]` | need configuration. display color list to choose |

## License

MIT
