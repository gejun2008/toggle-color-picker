/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
import * as i3 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config';
import * as i4 from './color-picker.component';
const styles_ColorPickerComponent:any[] = ['.dropdown-toggle[_ngcontent-%COMP%]{\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after{\n  display: none;\n}\n\n\n.color-picker-box[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n}\n\n.color-picker-item[_ngcontent-%COMP%]{\n  cursor: pointer;\n  border: 1px solid #dcdcdc;\n  border-radius:5px; \n  min-width: 25px;\n  min-height: 25px;\n  margin: 3px;\n}'];
export const RenderType_ColorPickerComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_ColorPickerComponent,data:{}});
function View_ColorPickerComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),3,'div',[['class',
      'color-picker-item']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.changeColor(_v.context.$implicit)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(1,278528,(null as any),0,i1.NgStyle,[i0.KeyValueDiffers,
      i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),i0.ɵpod(2,
      {'background-color':0}),(_l()(),i0.ɵted(-1,(null as any),['\n      ']))],(_ck,
      _v) => {
    const currVal_0:any = _ck(_v,2,0,_v.context.$implicit);
    _ck(_v,1,0,currVal_0);
  },(null as any));
}
export function View_ColorPickerComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted(-1,(null as any),['\n  '])),(_l()(),i0.ɵeld(1,
      0,(null as any),(null as any),20,'div',[['class','dropdown color-picker-container'],
          ['ngbDropdown','']],[[2,'show',(null as any)]],[[(null as any),'keyup.esc'],
          ['document','click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('keyup.esc' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,2).closeFromOutsideEsc()) !== false);
          ad = (pd_0 && ad);
        }
        if (('document:click' === en)) {
          const pd_1:any = ((<any>i0.ɵnov(_v,2).closeFromClick($event)) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(2,212992,(null as any),2,i2.NgbDropdown,
      [i3.NgbDropdownConfig,i0.NgZone],(null as any),(null as any)),i0.ɵqud(335544320,
      1,{_menu:0}),i0.ɵqud(335544320,2,{_toggle:0}),(_l()(),i0.ɵted(-1,(null as any),
      ['\n  '])),(_l()(),i0.ɵeld(6,0,(null as any),(null as any),4,'button',[['aria-haspopup',
      'true'],['class','btn btn-default dropdown-toggle'],['id','dropdownColorMenu'],
      ['ngbDropdownToggle',''],['type','button']],[[1,'aria-expanded',0]],[[(null as any),
      'click']],(_v,en,$event) => {
    var ad:boolean = true;
    if (('click' === en)) {
      const pd_0:any = ((<any>i0.ɵnov(_v,9).toggleOpen()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(7,278528,(null as any),0,i1.NgStyle,[i0.KeyValueDiffers,
      i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),i0.ɵpod(8,
      {'background-color':0}),i0.ɵdid(9,16384,[[2,4]],0,i2.NgbDropdownToggle,[i2.NgbDropdown,
      i0.ElementRef],(null as any),(null as any)),(_l()(),i0.ɵted(-1,(null as any),
      ['\n  '])),(_l()(),i0.ɵted(-1,(null as any),['\n  '])),(_l()(),i0.ɵeld(12,0,
      (null as any),(null as any),8,'div',[['aria-labelledby','dropdownColorMenu'],
          ['class','dropdown-menu'],['ngbDropdownMenu','']],[[2,'dropdown-menu',(null as any)],
          [2,'show',(null as any)]],(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(13,16384,[[1,4]],0,i2.NgbDropdownMenu,[i2.NgbDropdown,i0.ElementRef,
          i0.Renderer2],(null as any),(null as any)),(_l()(),i0.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i0.ɵeld(15,0,(null as any),(null as any),4,'div',[['class',
          'color-picker-box']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n      '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ColorPickerComponent_1)),
      i0.ɵdid(18,802816,(null as any),0,i1.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted(-1,
          (null as any),['\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n  '])),(_l()(),
          i0.ɵted(-1,(null as any),['\n'])),(_l()(),i0.ɵted(-1,(null as any),['\n']))],
      (_ck,_v) => {
        var _co:i4.ColorPickerComponent = _v.component;
        _ck(_v,2,0);
        const currVal_2:any = _ck(_v,8,0,_co.selectedColor);
        _ck(_v,7,0,currVal_2);
        const currVal_5:any = _co.colorList;
        _ck(_v,18,0,currVal_5);
      },(_ck,_v) => {
        const currVal_0:any = i0.ɵnov(_v,2).isOpen();
        _ck(_v,1,0,currVal_0);
        const currVal_1:any = i0.ɵnov(_v,9).dropdown.isOpen();
        _ck(_v,6,0,currVal_1);
        const currVal_3:any = true;
        const currVal_4:any = i0.ɵnov(_v,13).dropdown.isOpen();
        _ck(_v,12,0,currVal_3,currVal_4);
      });
}
export function View_ColorPickerComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'toggle-color-picker',
      ([] as any[]),(null as any),(null as any),(null as any),View_ColorPickerComponent_0,
      RenderType_ColorPickerComponent)),i0.ɵdid(1,114688,(null as any),0,i4.ColorPickerComponent,
      ([] as any[]),(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const ColorPickerComponentNgFactory:i0.ComponentFactory<i4.ColorPickerComponent> = i0.ɵccf('toggle-color-picker',
    i4.ColorPickerComponent,View_ColorPickerComponent_Host_0,{option:'option'},{selected:'selected'},
    ([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovd29yay9jYXNlL2FuZ3VsYXItc3R1ZHkvYW5ndWxhci1tb2R1bGUtc3RhcnRlci9zcmMvdG9nZ2xlLWNvbG9yLXBpY2tlci9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi93b3JrL2Nhc2UvYW5ndWxhci1zdHVkeS9hbmd1bGFyLW1vZHVsZS1zdGFydGVyL3NyYy90b2dnbGUtY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly8vRDovd29yay9jYXNlL2FuZ3VsYXItc3R1ZHkvYW5ndWxhci1tb2R1bGUtc3RhcnRlci9zcmMvdG9nZ2xlLWNvbG9yLXBpY2tlci9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC50cy5Db2xvclBpY2tlckNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovd29yay9jYXNlL2FuZ3VsYXItc3R1ZHkvYW5ndWxhci1tb2R1bGUtc3RhcnRlci9zcmMvdG9nZ2xlLWNvbG9yLXBpY2tlci9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC50cy5Db2xvclBpY2tlckNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICA8ZGl2IG5nYkRyb3Bkb3duIGNsYXNzPVwiZHJvcGRvd24gY29sb3ItcGlja2VyLWNvbnRhaW5lclwiPlxuICA8YnV0dG9uIG5nYkRyb3Bkb3duVG9nZ2xlIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdHlwZT1cImJ1dHRvblwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6c2VsZWN0ZWRDb2xvcn1cIiBpZD1cImRyb3Bkb3duQ29sb3JNZW51XCI+XG4gIDwvYnV0dG9uPlxuICA8ZGl2IG5nYkRyb3Bkb3duTWVudSBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bkNvbG9yTWVudVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2xvci1waWNrZXItYm94XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItcGlja2VyLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb2xvckxpc3RcIiAoY2xpY2spPVwiY2hhbmdlQ29sb3IoaXRlbSlcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOml0ZW19XCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiIsIjx0b2dnbGUtY29sb3ItcGlja2VyPjwvdG9nZ2xlLWNvbG9yLXBpY2tlcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztvQkNNTTtNQUFBO0lBQUE7SUFBQTtJQUE4RDtNQUFBO01BQUE7SUFBQTtJQUE5RDtFQUFBLHVDQUFBOytCQUFBLGdEQUEwRjtNQUFBLHdCQUFzQzs7SUFBdEM7SUFBMUYsV0FBMEYsU0FBMUY7Ozs7b0JBTk4sNENBQ0U7TUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtNQUFBLHVDQUFBO01BQUE7TUFBQSw4Q0FBeUQ7TUFBQSxXQUN6RDtNQUFBO01BQUE7TUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtFQUFBLHVDQUFBOytCQUFBLGdEQUFnRTtNQUFBLCtCQUFoRTttQkFBQSwrQkFBc0k7TUFBQSxXQUM3SCw0Q0FDVDtNQUFBO1VBQUE7VUFBQTthQUFBO3NCQUFBLCtCQUErRTtVQUFBLGFBQzdFO1VBQUE7VUFBQSxnQkFBOEIsZ0RBQzVCO2lCQUFBO2FBQUE7NEJBQUEseUNBQ007VUFBQSwyQkFDRiw0Q0FDRjtpQkFBQSwyQkFDRjs7O1FBVEo7UUFDZ0U7UUFBaEUsV0FBZ0UsU0FBaEU7UUFJbUM7UUFBL0IsWUFBK0IsU0FBL0I7O1FBTEo7UUFBQSxXQUFBLFNBQUE7UUFDQTtRQUFBLFdBQUEsU0FBQTtRQUVBO1FBQUE7UUFBQSxZQUFBLG1CQUFBOzs7O29CQ0pGO01BQUE7cUNBQUEsVUFBQTtNQUFBO0lBQUE7Ozs7OyJ9
