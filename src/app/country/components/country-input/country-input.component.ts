import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';
  
  term: string = '';
  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  search(): void {
    this.onEnter.emit(this.term);
  }

  input(): void {
    this.debouncer.next(this.term);
  }
}
