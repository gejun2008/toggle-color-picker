import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'toggle-color-picker',
  template: `
  <div ngbDropdown class="dropdown color-picker-container">
  <button ngbDropdownToggle class="btn btn-default" type="button" [ngStyle]="{'background-color':selectedColor}" id="dropdownColorMenu">
  </button>
  <div ngbDropdownMenu class="dropdown-menu" aria-labelledby="dropdownColorMenu">
    <div class="color-picker-box">
      <div class="color-picker-item" *ngFor="let item of colorList" (click)="changeColor(item)" [ngStyle]="{'background-color':item}">
      </div>
    </div>
  </div>
</div>
`,
styles:[`.dropdown-toggle{
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.dropdown-toggle::after{
  display: none;
}


.color-picker-box{
  display: flex;
  flex-direction: row;
}

.color-picker-item{
  cursor: pointer;
  border: 1px solid #dcdcdc;
  border-radius:5px; 
  min-width: 25px;
  min-height: 25px;
  margin: 3px;
}`]
  
})
export class ColorPickerComponent implements OnInit {
  @Input() option: any;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  selectedColor = '#808080';
  colorList: any;

  constructor() { }

  ngOnInit() {
    this.selectedColor = this.option.defaultColor ? this.option.defaultColor : '#808080';
    this.colorList = this.option.configColorList;
  }

  changeColor(color: any) {
    if (color !== this.selectedColor) {
      this.selectedColor = color;
      this.selected.emit(color);
    } else {
      return;
    }
  }
}
