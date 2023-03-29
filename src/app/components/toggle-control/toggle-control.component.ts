import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle-control',
  templateUrl: './toggle-control.component.html',
  styleUrls: ['./toggle-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleControlComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleControlComponent implements ControlValueAccessor {
  @Input() value: boolean = false;
  @Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChange = (arg0: boolean) => {};
  onTouched = (arg0: boolean) => {};

  writeValue(value: boolean) {
    this.value = value;
    this.onChange(this.value);
    this.onTouched(this.value);
  }

  registerOnChange(fn: typeof this.onChange) {
    this.onChange = fn;
  }

  registerOnTouched(fn: typeof this.onTouched) {
    this.onTouched = fn;
  }

  toggle() {
    this.value = !this.value;
    this.onChange(this.value);
    this.onTouched(this.value);
    this.valueChange.emit(this.value);
  }
}
