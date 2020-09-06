import { Waifu } from './../waifu';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-waifu-detail',
  templateUrl: './waifu-detail.component.html',
  styleUrls: ['./waifu-detail.component.css']
})
export class WaifuDetailComponent implements OnInit {

  @Input() waifu: Waifu

  constructor() { }

  ngOnInit(): void {
  }

}
