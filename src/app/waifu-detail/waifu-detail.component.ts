import { WaifuService } from './../waifu.service';
import { Waifu } from './../waifu';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-waifu-detail',
  templateUrl: './waifu-detail.component.html',
  styleUrls: ['./waifu-detail.component.css']
})
export class WaifuDetailComponent implements OnInit {

  @Input() waifu: Waifu

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private waifuService: WaifuService
  ) { }

  ngOnInit(): void {
    this.getWaifu()
  }

  getWaifu(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.waifuService.getWaifu(id).subscribe(waifu => this.waifu = waifu)
  }

  goBack(): void {
    this.location.back()
  }

}
