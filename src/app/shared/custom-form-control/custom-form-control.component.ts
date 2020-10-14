import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,

  useExisting: forwardRef(() => CustomFormControlComponent),

  multi: true,
};

@Component({
  selector: 'app-custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.scss'],
  providers: [CUSTOM_CONTROL_VALUE_ACCESSOR],
})
export class CustomFormControlComponent implements OnInit, ControlValueAccessor {
  private _isChecked: boolean;

  constructor() {}

  ngOnInit(): void {}

  writeValue(isChecked: boolean): void {
    this._isChecked = isChecked;
  }
  get isChecked() {
    return this._isChecked;
  }
  set isChecked(val: boolean) {
    this._isChecked = val;
    this.propagateChange(this._isChecked);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  propagateChange = (_: any) => {};
}
