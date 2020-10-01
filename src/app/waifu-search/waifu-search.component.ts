import { WaifuService } from './../waifu.service';
import { Waifu } from './../waifu';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-waifu-search',
  templateUrl: './waifu-search.component.html',
  styleUrls: ['./waifu-search.component.css'],
})
export class WaifuSearchComponent implements OnInit {
  waifus$: Observable<Waifu[]>;
  private searchTerms = new Subject<string>();

  constructor(private waifuService: WaifuService) {}

  search(terms: string): void {
    this.searchTerms.next(terms);
  }

  ngOnInit(): void {
    this.waifus$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.waifuService.searchWaifus(term))
    );
  }
}
