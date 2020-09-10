import { WaifuService } from './../waifu.service';
import { Waifu } from './../waifu';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  waifus: Waifu[] = []

  constructor(private waifuServuce: WaifuService) { }

  ngOnInit(): void {
    this.getWaifus()
  }

  getWaifus(): void {
    this.waifuServuce.getWaifus().subscribe(waifus => this.waifus = waifus.slice(1,5))
  }

}
